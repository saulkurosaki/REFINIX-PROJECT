import { Text } from "@/components/text";
import { useDroppable } from "@dnd-kit/core";
import { Badge, Space } from "antd";

const KanbanColumn = () => {
  const { isOver, setNodeRef, active } = useDroppable({
    id: "",
    data: "",
  });

  const count = 2;

  return (
    <div
      ref={setNodeRef}
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "0 16px",
      }}
    >
      <div
        style={{
          padding: "12px",
        }}
      >
        <Space style={{ width: "100%", justifyContent: "space-between" }}>
          <Space>
            <Text
              ellipsis={{ tooltip: "TITLE TO DO" }}
              size="xs"
              strong
              style={{ textTransform: "uppercase", whiteSpace: "nowrap" }}
            >
              TITLE
            </Text>

            {!!count && <Badge count={count} color="cyan" />}
          </Space>
        </Space>
      </div>
    </div>
  );
};

export default KanbanColumn;
