const AboutMe = (props) => {
  return (
    <div className="grid__wrapper">
      <div className="grid__wrapper--color">
        <p>list of contents</p>
      </div>
      <div className="grid__wrapper--noColor">
        <ol>
          <li>
            <a href="#">About Me</a>
          </li>
          <li>
            <a href="#">vision</a>
          </li>
          <li>
            <a href="#">Personal Skills</a>
          </li>
          <li>
            <a href="#">Education</a>
          </li>
          <li>
            <a href="#">Work Experience</a>
          </li>
          <li>
            <a href="#">Project Portfolio</a>
          </li>
          <li>
            <a href="#">Notable Project</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default AboutMe;
