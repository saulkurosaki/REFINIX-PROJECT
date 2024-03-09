import { KanbanBoardContainer, KanbanBoard, KanbanColumn } from "@/components";

export const TasksList = () => {
  return (
    <>
      <KanbanBoardContainer>
        <KanbanBoard>
          <KanbanColumn></KanbanColumn>

          <KanbanColumn></KanbanColumn>
        </KanbanBoard>
      </KanbanBoardContainer>
    </>
  );
};
