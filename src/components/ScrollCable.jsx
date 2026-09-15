import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/motion";

const TARGETS = ["experience", "skills", "projects", "education", "contact"];
// Organic left/right weave across the viewport (fractions of width)
const LANE_X = [0.34, 0.66, 0.32, 0.68, 0.5];
const BURST_COLORS = ["#00ff41", "#e6ffe6", "#00cc33", "#ffffff"];
const BURST_COUNT = 7;

/**
 * Premium scroll system for the terminal portfolio:
 * - Full-page organic SVG cable (glow + main + data-flow layers) drawn by
 *   scroll progress, with a glowing node riding the tip via getPointAtLength.
 * - Per-section triggers (IntersectionObserver): border pulse, 300ms glitch
 *   overlay, command re-type, staggered item entrance, node particle burst.
 * - Cable hidden on mobile; reveals still run. Fully inert when the user
 *   prefers reduced motion (content stays visible, no listeners).
 */
export const ScrollCable = () => {
  const wrapRef = useRef(null);
  const svgRef = useRef(null);
  const maskPathRef = useRef(null);
  const shapeRef = useRef(null);
  const nodeRef = useRef(null);
  const burstLayerRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    document.documentElement.classList.add("cable-on");

    const svg = svgRef.current;
    const maskPath = maskPathRef.current;
    const node = nodeRef.current;
    const burstLayer = burstLayerRef.current;
    if (!svg || !maskPath || !node) return;

    const shapePaths = Array.from(
      shapeRef.current?.querySelectorAll("path") || []
    );
    const VB_W = 1000;
    let vbH = window.innerHeight * 2;
    let pathLen = 0;
    let ticking = false;
    const fired = new Set();
    const nodePage = { x: 0, y: 0 };
    let disposed = false;

    const pageY = (el) => el.getBoundingClientRect().top + window.scrollY;

    const buildPath = () => {
      const sections = TARGETS.map((id) => document.getElementById(id)).filter(Boolean);
      if (sections.length === 0) return;
      const W = VB_W;
      const H = Math.max(
        document.documentElement.scrollHeight,
        window.innerHeight * 2
      );
      vbH = H;
      svg.setAttribute("viewBox", `0 0 ${W} ${H}`);

      const pts = sections.map((el, i) => ({
        x: LANE_X[i % LANE_X.length] * W,
        y: pageY(el) + Math.min(140, el.offsetHeight * 0.18),
      }));
      const startY = Math.max(0, pts[0].y - 160);
      const last = sections[sections.length - 1];
      const endY = Math.min(H, pageY(last) + last.offsetHeight * 0.55);

      let d = `M ${LANE_X[0] * W} ${startY}`;
      let prev = { x: LANE_X[0] * W, y: startY };
      const all = [...pts, { x: 0.5 * W, y: endY }];
      all.forEach((p) => {
        const dy = p.y - prev.y;
        d += ` C ${prev.x} ${prev.y + dy * 0.5}, ${p.x} ${p.y - dy * 0.5}, ${p.x} ${p.y}`;
        prev = p;
      });

      [maskPath, ...shapePaths].forEach((path) => path.setAttribute("d", d));
      pathLen = maskPath.getTotalLength();
      update();
    };

    const update = () => {
      ticking = false;
      if (disposed || pathLen === 0) return;
      const max = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight
      );
      const p = Math.min(1, Math.max(0, window.scrollY / max));
      maskPath.style.strokeDashoffset = String(1 - p);
      try {
        const pt = maskPath.getPointAtLength(p * pathLen);
        nodePage.x = pt.x;
        nodePage.y = pt.y;
        // Node lives in SVG user space: place it in viewBox coords directly.
        node.setAttribute("transform", `translate(${pt.x} ${pt.y})`);
      } catch {
        /* path not ready */
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    const burst = (vx, vy) => {
      if (!burstLayer) return;
      for (let i = 0; i < BURST_COUNT; i++) {
        const s = document.createElement("span");
        const angle = (Math.PI * 2 * i) / BURST_COUNT + Math.random() * 0.5;
        const dist = 34 + Math.random() * 38;
        const size = 3 + Math.random() * 4;
        s.style.cssText = `position:absolute;left:${vx}px;top:${vy}px;width:${size}px;height:${size}px;background:${BURST_COLORS[i % BURST_COLORS.length]};box-shadow:0 0 8px #00ff41;pointer-events:none;`;
        burstLayer.appendChild(s);
        const dx = Math.cos(angle) * dist;
        const dy = Math.sin(angle) * dist;
        s.animate(
          [
            { transform: "translate(-50%,-50%) scale(1)", opacity: 1 },
            {
              transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(0)`,
              opacity: 0,
            },
          ],
          { duration: 600 + Math.random() * 150, easing: "cubic-bezier(.2,.7,.3,1)" }
        ).onfinish = () => s.remove();
      }
    };

    const retypeCommand = (section) => {
      const el = section.querySelector("[data-cmd-text]");
      if (!el || el.dataset.typed) return;
      const full = el.textContent;
      el.dataset.typed = "1";
      el.textContent = "";
      let i = 0;
      const timer = setInterval(() => {
        i += 2;
        el.textContent = full.slice(0, i);
        if (i >= full.length) clearInterval(timer);
      }, 28);
    };

    const fire = (section) => {
      if (!section || fired.has(section.id)) return;
      fired.add(section.id);
      section.classList.add("cable-hit");
      retypeCommand(section);
      const items = section.querySelectorAll("[data-cable-item]");
      items.forEach((item, i) => {
        item.style.setProperty("--cd", `${i * 90}ms`);
        // Force reflow so transition runs even if class was present
        void item.offsetWidth;
        item.classList.add("cable-in");
      });
      // Burst at the node's current viewport position (viewBox → screen).
      // Skipped when the cable SVG is display:none (mobile).
      if (svg.clientWidth > 0) {
        const vx = nodePage.x * (svg.clientWidth / VB_W);
        const vy = (nodePage.y * (svg.clientHeight / vbH)) - window.scrollY;
        burst(vx, vy);
      }
      observer.unobserve(section);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) fire(entry.target);
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -8% 0px" }
    );
    TARGETS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Alternate entrance direction per section (left/right + 1-2deg tilt)
    const seedDirections = () => {
      TARGETS.forEach((id, si) => {
        const section = document.getElementById(id);
        if (!section) return;
        const dir = si % 2 === 0 ? -1 : 1;
        section.querySelectorAll("[data-cable-item]").forEach((item) => {
          item.style.setProperty("--cx", `${dir * 30}px`);
          item.style.setProperty("--cr", `${dir * 1.4}deg`);
        });
      });
    };
    seedDirections();

    // Safety net: reveal anything already in view (covers observer hiccups)
    const safetySweep = () => {
      TARGETS.forEach((id) => {
        const el = document.getElementById(id);
        if (!el || fired.has(id)) return;
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.75 && r.bottom > window.innerHeight * 0.2) {
          fire(el);
        }
      });
    };
    const safetyTimer = setTimeout(safetySweep, 2500);
    window.addEventListener("scroll", safetySweep, { passive: true });

    let rebuildTimer;
    const rebuild = () => {
      clearTimeout(rebuildTimer);
      rebuildTimer = setTimeout(() => {
        buildPath();
        seedDirections();
      }, 200);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", rebuild);
    window.addEventListener("load", rebuild);
    if (document.fonts?.ready) document.fonts.ready.then(() => !disposed && rebuild());
    const ro = new ResizeObserver(rebuild);
    ro.observe(document.body);

    // Late-added items (e.g. Skills tab switch re-mounts cards): seed their
    // direction vars, and reveal instantly if their section already fired.
    const mo = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        m.addedNodes.forEach((n) => {
          if (!(n instanceof Element)) return;
          const els = n.matches?.("[data-cable-item]")
            ? [n, ...n.querySelectorAll("[data-cable-item]")]
            : [...(n.querySelectorAll?.("[data-cable-item]") || [])];
          els.forEach((el) => {
            const section = el.closest?.("section");
            const si = TARGETS.indexOf(section?.id);
            const dir = si % 2 === 0 ? -1 : 1;
            el.style.setProperty("--cx", `${dir * 30}px`);
            el.style.setProperty("--cr", `${dir * 1.4}deg`);
            if (section && fired.has(section.id)) {
              el.style.setProperty("--cd", "60ms");
              el.classList.add("cable-in");
            }
          });
        });
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    buildPath();
    update();

    return () => {
      disposed = true;
      clearTimeout(safetyTimer);
      clearTimeout(rebuildTimer);
      observer.disconnect();
      mo.disconnect();
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", safetySweep);
      window.removeEventListener("resize", rebuild);
      window.removeEventListener("load", rebuild);
      document.documentElement.classList.remove("cable-on");
    };
  }, []);

  if (typeof window !== "undefined" && prefersReducedMotion()) return null;

  return (
    <>
      {/* Cable layer: absolute full-page height, behind content */}
      <div ref={wrapRef} className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <svg
          ref={svgRef}
          className="hidden md:block w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <mask id="cable-mask" maskUnits="userSpaceOnUse">
              <path
                ref={maskPathRef}
                d=""
                fill="none"
                stroke="#fff"
                strokeWidth="4"
                pathLength="1"
                strokeDasharray="1"
                strokeDashoffset="1"
              />
            </mask>
          </defs>
          <g ref={shapeRef} mask="url(#cable-mask)">
            {/* Glow layer */}
            <path
              d=""
              fill="none"
              stroke="#00ff41"
              strokeWidth="7"
              opacity="0.22"
              pathLength="1"
              style={{ filter: "blur(9px)" }}
            />
            {/* Main neon layer */}
            <path
              d=""
              fill="none"
              stroke="#00ff41"
              strokeWidth="2.5"
              opacity="0.9"
              pathLength="1"
            />
            {/* Data-flow dashes (infinite crawl) */}
            <path
              d=""
              fill="none"
              stroke="#e6ffe6"
              strokeWidth="2.5"
              opacity="0.85"
              pathLength="1"
              strokeDasharray="0.02 0.05"
              strokeLinecap="round"
              className="cable-flow"
            />
          </g>
          {/* Riding node */}
          <g ref={nodeRef}>
            <circle r="15" fill="#00ff41" opacity="0.18" />
            <circle r="7" fill="#00ff41" opacity="0.9" />
            <circle r="3" fill="#eaffea" />
          </g>
        </svg>
      </div>
      {/* Burst particle layer (fixed, viewport coords) */}
      <div ref={burstLayerRef} className="fixed inset-0 z-[5] pointer-events-none" aria-hidden="true" />
    </>
  );
};
