import { Carousel } from "antd";
import { AIWSP2, AIWSP3, AIWSP4 } from "../Image/image";

const contentStyle: React.CSSProperties = {
  height: "100%",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
};

const Carousell: React.FC = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>
        <AIWSP2 />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <AIWSP3 />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <AIWSP4 />
      </h3>
    </div>
  </Carousel>
);

export default Carousell;
