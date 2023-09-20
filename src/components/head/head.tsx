import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Menu } from "antd";
import { AIIcon } from "../../components/Image/image";
import { WebIcon } from "../../components/Image/image";
import { TecIcon } from "../../components/Image/image";
import { VisIcon } from "../../components/Image/image";
import { ProjectIcon } from "../../components/Image/image";
import { useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Artificial Intelligences", "ArtificialIntelligence", <AIIcon />),
  getItem("Software Web", "SoftwareWeb", <WebIcon />),
  getItem("Technologies ", "Technology", <TecIcon />),

  getItem("Projects WEB", "ProjectsWeb", <ProjectIcon />, [
    getItem("Projeto 1", "ProjectsWeb1"),
    getItem("projeto 2", "ProjectsWeb2"),
  ]),

  getItem("Projects IA ", "ProjectsAI", <VisIcon />, [
    getItem("Projeto 1", "ProjectsAI1"),
    getItem("Projeto 2", "ProjectsAI2"),
  ]),
];

function NavBar() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const navigate = useNavigate();

  return (
    <div style={{ maxWidth: "100%", margin: "0 auto" }}>
      <Button
        type="link"
        onClick={toggleCollapsed}
        style={{ marginBottom: 16, backgroundColor: "black" }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        style={{
          backgroundColor: "black",
          boxShadow: "4px 1px 4px 1px #ffffff82",
          border: "1px solid white",
          color: "white",
        }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        items={items}
        onClick={(item) => {
          navigate(item.key);
        }}
      />
    </div>
  );
}

export default NavBar;
