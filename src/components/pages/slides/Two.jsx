import Card from "../../card/card";

const Two = (props) => {
  return (
    <div className="wrapper__two">
      <h1>Hi, I'm An. Nice to meet you.</h1>
      <p>
        I am about to graduate from IUH - Industrial University of Ho Chi Minh
        City with a degree in Software Engineering. While I don't have
        professional experience yet, I am eager to start my journey in the tech
        industry. I'm naturally curious, always learning, and excited to apply
        my knowledge and skills to real-world projects.
      </p>
      <div className="c__cardSkill">
        <Card />
      </div>
    </div>
  );
};

export default Two;
