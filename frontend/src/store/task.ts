import { Dispatch } from "redux";
import {
    Task,
    SET_TASK,
    REMOVE_TASK,
    TaskDispatchTypes,
  } from "./taskActionTypes";

export const createTask = () => async (dispatch: Dispatch<TaskDispatchTypes>) => {
    const res = await fetch("/api/task/add", {
        headers: {
            "Content-Type": "application/json",
        },
    });
    const task = await res.json();
    console.log("These are the tasks----", task);
    return task;
};
