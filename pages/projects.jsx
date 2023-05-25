import Project from "@/components/Project";
import { projects } from "../projects";
import Footer from "@/components/Footer";

const Projects = () => {
  return (
    <div className="projects">
      <h2 className="title">
        My Recent <span>Works</span>
      </h2>
      <p>Here are few projects I've worked on recently.</p>
      <div className="p-container">
        {projects.map((p, i) => (
          <Project key={i} project={p} />
        ))}
      </div>
      <Footer />
    </div>
  );
};
export default Projects;
