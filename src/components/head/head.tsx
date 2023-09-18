import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Menu } from "antd";
import { AIIcon } from "../../components/Image/image";
import { WebIcon } from "../../components/Image/image";
import { TecIcon } from "../../components/Image/image";
import { VisIcon } from "../../components/Image/image";
import { ProjectIcon } from "../../components/Image/image";

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
  getItem("Artificial Intelligences", "1", <AIIcon />),
  getItem("Software Web", "2", <WebIcon />),
  getItem("Technologies ", "3", <TecIcon />),

  getItem("Projects WEB", "sub1", <ProjectIcon />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
  ]),

  getItem("Projects IA ", "sub2", <VisIcon />, [
    getItem("Option 7", "7"),
    getItem("Option 8", "8"),
  ]),
];

function NavBar() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div style={{ width: 256 }}>
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
          boxShadow: "1px white",
          border: "1px solid white",
          color: "white",
        }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
}

export default NavBar;
