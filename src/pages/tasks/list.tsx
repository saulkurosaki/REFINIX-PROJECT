import {
  KanbanBoardContainer,
  KanbanBoard,
  KanbanColumn,
  KanbanItem,
} from "@/components";

export const TasksList = () => {
  return (
    <>
      <KanbanBoardContainer>
        <KanbanBoard>
          <KanbanColumn>
            <KanbanItem></KanbanItem>
          </KanbanColumn>

          <KanbanColumn></KanbanColumn>
        </KanbanBoard>
      </KanbanBoardContainer>
    </>
  );
};
