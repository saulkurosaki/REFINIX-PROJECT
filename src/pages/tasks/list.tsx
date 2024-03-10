import {
  KanbanBoardContainer,
  KanbanBoard,
  KanbanColumn,
  KanbanItem,
} from "@/components";
import { TASKS_QUERY } from "@/graphql/queries";
import { useList } from "@refinedev/core";

export const TasksList = () => {
  const { data: tasks, isLoading: isLoadingTasks } = useList({
    resource: "tasks",
    sorters: [
      {
        field: "dueDate",
        order: "asc",
      },
    ],
    pagination: {
      mode: "off",
    },
    meta: {
      gqlQuery: TASKS_QUERY,
    },
  });

  return (
    <>
      <KanbanBoardContainer>
        <KanbanBoard>
          <KanbanColumn>
            <KanbanItem>This is my first to do</KanbanItem>
          </KanbanColumn>

          <KanbanColumn></KanbanColumn>
        </KanbanBoard>
      </KanbanBoardContainer>
    </>
  );
};
