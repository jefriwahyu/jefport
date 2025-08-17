import { ExternalLink, Github, ArrowRight } from "lucide-react";

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
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w 5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects</span>
        </h2>

        <p className="text-center">
          A collection of my notable projects showcasing my skills and
          expertise.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-fuill object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/50 text-secondary">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://github.com/jefriwahyu" className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank">
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
