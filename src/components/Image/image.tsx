import AI from "../../assets/AI.png";
import web from "../../assets/webpng.png";
import tec from "../../assets/tec.png";
import proj from "../../assets/project.png";
import vis from "../../assets/visaopng.png";
import prof from "../../assets/photo.jpg";

export const AIIcon = () => {
  return (
    <img src={AI} alt="AI icon" style={{ width: "30px", margin: "7px" }} />
  );
};
export const WebIcon = () => {
  return (
    <img src={web} alt="web icon" style={{ width: "30px", margin: "7px" }} />
  );
};

export const TecIcon = () => {
  return (
    <img src={tec} alt="tec icon" style={{ width: "30px", margin: "7px" }} />
  );
};
export const ProjectIcon = () => {
  return (
    <img src={proj} alt="proj icon" style={{ width: "30px", margin: "7px" }} />
  );
};
export const VisIcon = () => {
  return (
    <img src={vis} alt="vis icon" style={{ width: "30px", margin: "7px" }} />
  );
};
export const ProfileAvatar = () => {
  return <img src={prof} alt="vis icon" style={{ width: "100%" }} />;
};
