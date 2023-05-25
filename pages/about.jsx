import { skillsIcon } from "../skills-icon";

const About = () => {
  return (
    <div className="about">
      <div className="top">
        <span className="title">
          Know Who <span>I'M</span>
        </span>
        <div className="top-wrapper">
          <div className="left">
            <p>
              Hi Everyone, I am <span>Samidul Islam</span> from{" "}
              <span>Sirajganj, Bangladesh</span>. I am a Frontend Developer
              since 2021.
            </p>
            <span>
              Apart from coding, some other activities that I love to do!
            </span>
            <ul>
              <li>Playing Games</li>
              <li>Workout</li>
              <li>Travelling</li>
            </ul>
          </div>
          <div className="right">
            <img src="3.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="professional-skills">
        <span className="title">
          Professional <span>Skills</span>
        </span>
        <div className="skills-container">
          {skillsIcon.map((skill, i) => (
            <div key={i} className="item">
              <img src={skill.poster} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default About;
