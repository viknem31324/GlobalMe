import { Task } from "@/types/task"

export interface IRootStore {
  day: {
    tasks: Array<Task>;
  };
}