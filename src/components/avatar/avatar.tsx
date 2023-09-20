import React from "react";
import { Space } from "antd";
import { AIWSP } from "../Image/image";

const Profile: React.FC = () => (
  <div>
    <div>
      <Space direction="vertical" size={16}>
        <Space
          wrap
          size={16}
          style={{
            width: "16.2%",
            margin: "auto",
            display: "flex",
          }}
        >
          <AIWSP />
        </Space>
      </Space>
    </div>
  </div>
);

export default Profile;
