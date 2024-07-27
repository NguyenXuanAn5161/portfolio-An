import heroDevice from "../../../assets/avatar/hero-devices.svg";
import mfAvatar from "../../../assets/avatar/mf-avatar.svg";

const One = (props) => {
  return (
    <div className="wrapper__one">
      <h1 className="title mb-2">Software Engineer, Fullstack Developer</h1>
      <p className="subtitle mb-5">
        I design and code functional, beautiful solutions with passion and
        impact.
      </p>
      <div className="mb-5">
        <img className="personImg" src={mfAvatar} alt="mfAvatar" />
      </div>
      <div className="mb-5">
        <img className="heroDevice" src={heroDevice} alt="heroDevice" />
      </div>
    </div>
  );
};

export default One;
