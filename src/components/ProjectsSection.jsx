import {
  ExternalLink,
  Github,
  ArrowRight,
  Code,
  Star,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Ulbi Insight",
    description:
      "This is a news website developed using PHP and Tailwind. Its purpose is to publish information regarding events, announcements, and articles from various organizations within the International Logistics and Business University.",
    image: "/projects/ulbi-insight.jpg",
    tags: ["PHP", "Tailwind", "JavaScript"],
    demoUrl: "https://ulbiinsight.tinagers.com/",
    githubUrl: "https://github.com/jefriwahyu/ulbi_insight",
  },
  {
    id: 2,
    title: "Pemira",
    description:
      "An E-Voting website developed with PHP, JavaScript, and Tailwind for student elections at the International Logistics and Business University, including for the Student President/Vice President and the heads of student associations.",
    image: "/projects/pemira.jpg",
    tags: ["PHP", "Tailwind", "JavaScript"],
    demoUrl: "https://pemira.tinagers.com/",
    githubUrl: "https://github.com/jefriwahyu/pemira_24",
  },
  {
    id: 3,
    title: "KuyKontak",
    description:
      "A contacts app developed in Flutter that lets users sync their local phone contacts, add favorites, and toggle between dark and light modes. The backend is powered by two separate APIs: one using ExpressJS with MongoDB and another using CodeIgniter 4 with MySQL.",
    image: "/projects/kuykontak.png",
    tags: ["Flutter", "PHP", "ExpressJS", "CodeIgniter4"],
    demoUrl: "https://github.com/jefriwahyu/kuykontak-app",
    githubUrl: "https://github.com/jefriwahyu/kuykontak-app",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-primary/4 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Featured <span className="text-primary">Projects</span>
          </h2>

          <p className="text-center text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            A collection of my notable projects showcasing my skills and
            expertise in modern web development.
          </p>
        </div>

        {/* Projects Grid - Enhanced */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group relative bg-card/60 backdrop-blur-xl border-border/50 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 hover:translate-y-[-8px] hover:rotate-1"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

              {/* Image Container with Enhanced Effects */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Floating Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-[-10px] group-hover:translate-y-0 transition-all duration-500 delay-200">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/20 backdrop-blur-md rounded-lg text-white hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-lg"
                  >
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/20 backdrop-blur-md rounded-lg text-white hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-lg"
                  >
                    <Github size={16} />
                  </a>
                </div>

                {/* Project Number Badge */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {project.id}
                </div>
              </div>

              {/* Content Section - Enhanced */}
              <div className="p-8 relative">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-8 w-12 h-1 bg-gradient-to-r from-primary to-transparent rounded-full opacity-60"></div>

                {/* Tags with Enhanced Styling */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1.5 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title with Animation */}
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-4">
                  {project.description}
                </p>

                {/* Action Buttons - Enhanced */}
                <div className="flex justify-between items-center pt-4 border-t border-border/30">
                  <div className="flex items-center gap-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 group-hover/btn:bg-primary/20 transition-colors duration-300">
                        <ExternalLink size={14} />
                      </div>
                      <span className="group-hover/btn:translate-x-1 transition-transform duration-300">
                        Live Demo
                      </span>
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 group-hover/btn:bg-primary/20 transition-colors duration-300">
                        <Github size={14} />
                      </div>
                      <span className="group-hover/btn:translate-x-1 transition-transform duration-300">
                        Source Code
                      </span>
                    </a>
                  </div>

                  {/* Interactive Sparkle */}
                  <Sparkles className="w-4 h-4 text-primary/60 animate-pulse group-hover:animate-spin group-hover:text-primary transition-all duration-500" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center mt-20">
          <div className="inline-flex flex-col items-center gap-6 p-8 bg-card/60 backdrop-blur-xl border-border/50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              <span className="text-sm font-medium">Want to see more?</span>
              <div className="w-12 h-px bg-gradient-to-r from-primary via-transparent to-transparent"></div>
            </div>

            <p className="text-muted-foreground text-sm max-w-md">
              Explore my complete portfolio of projects, experiments, and
              contributions on GitHub.
            </p>

            <a
              href="https://github.com/jefriwahyu"
              target="_blank"
              rel="noopener noreferrer"
              className="cosmic-button group flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Github className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">Explore My GitHub</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
