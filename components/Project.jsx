import { AiFillEye, AiFillGithub } from "react-icons/ai";

const Project = ({ project }) => {
  return (
    <div className="project">
      <img className="image" src={project?.poster} alt="" />
      <div className="info">
        <h3 className="title">{project?.name}</h3>
        <p>{project?.desc}</p>
      </div>
      <div className="btns">
        <a href={project?.sourceLink}>
          <AiFillGithub />
          <span>Source</span>
        </a>
        <a href={project?.demoLink}>
          <AiFillEye />
          <span>Demo</span>
        </a>
      </div>
    </div>
  );
};
export default Project;
