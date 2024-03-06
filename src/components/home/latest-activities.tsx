import { UnorderedListOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { title } from "process";
import React from "react";
import { Text } from "../text";

const LatestActivities = () => {
  return (
    <Card
      headStyle={{ padding: "16px" }}
      bodyStyle={{ padding: "0 1rem" }}
      title={
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <UnorderedListOutlined />
          <Text size="sm" style={{ marginLeft: "0.5rem" }}>
            LatestActivities
          </Text>
        </div>
      }
    ></Card>
  );
};

export default LatestActivities;
