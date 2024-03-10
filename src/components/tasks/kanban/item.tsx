import { useDraggable } from "@dnd-kit/core";

const KanbanItem = () => {
  const { attributes, listeners, setNodeRed, active } = useDraggable({
    id: "",
    data: "data",
  });

  return <div>Kanban Item component Test c:</div>;
};

export default KanbanItem;
