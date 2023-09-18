import React from "react";
import { Avatar, Space } from "antd";
import { ProfileAvatar } from "../../components/Image/image";

const Profile: React.FC = () => (
  <div>
    <div>
      <Space direction="vertical" size={16}>
        <Space wrap size={16}>
          <Avatar size={64} icon={<ProfileAvatar />} />
        </Space>
      </Space>
    </div>
  </div>
);

export default Profile;
