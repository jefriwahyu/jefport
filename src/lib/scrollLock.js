/**
 * Coordinates modal scroll-lock with the Lenis smooth scroller in Home.
 * Lenis hijacks wheel events at window level, so `body overflow: hidden`
 * alone can't stop the page behind an open modal.
 */
let locks = 0;
const subs = new Set();

const emit = () => subs.forEach((fn) => fn(locks > 0));

export const lockScroll = () => {
  locks += 1;
  emit();
};

export const unlockScroll = () => {
  locks = Math.max(0, locks - 1);
  emit();
};

export const onScrollLockChange = (fn) => {
  subs.add(fn);
  return () => {
    subs.delete(fn);
  };
};
