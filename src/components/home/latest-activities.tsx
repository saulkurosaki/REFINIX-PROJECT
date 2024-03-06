import { UnorderedListOutlined } from "@ant-design/icons";
import { Card, List } from "antd";
import { title } from "process";
import React from "react";
import { Text } from "../text";
import LatestActivitiesSkeleton from "../skeleton/latest-activities";

const LatestActivities = () => {
  const isLoading = true;

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
    >
      {isLoading ? (
        <List
          itemLayout="horizontal"
          dataSource={Array.from({ length: 5 }).map((_, i) => ({ id: i }))}
          renderItem={(_, index) => <LatestActivitiesSkeleton key={index} />}
        />
      ) : (
        <List />
      )}
    </Card>
  );
};

export default LatestActivities;
