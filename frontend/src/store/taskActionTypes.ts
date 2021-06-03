export const SET_TASK = "task/SET_TASK";
export const REMOVE_TASK = "task/REMOVE_TASK";

export interface Task {
    id: number;
    user_id: number;
    project_id?: number;
    name: string;
    description?: string;
    priority: string;
    due_date: string;
}

export interface setTask {
    type: typeof SET_TASK;
    payload: Task;
}

export interface removeTask {
    type: typeof REMOVE_TASK;
}

export type TaskDispatchTypes = setTask | removeTask;
