import {
    Task,
    SET_TASK,
    REMOVE_TASK,
    TaskDispatchTypes,
  } from "./taskActionTypes";

  const initialState = {
      task: {
          id: -Infinity,
          user_id: -Infinity,
          name: "",
          description: "",
          priority: "",
          due_date: "",
      },
  }

  interface TaskState {
      task: Task;
  }

  const taskReducer = (
      state: TaskState = initialState,
      action: TaskDispatchTypes
  ): TaskState => {
      switch (action.type){
        case SET_TASK:
            return {...state, task: action.payload};
        case REMOVE_TASK:
            return { ...state, task: {
                id: -Infinity,
                user_id: -Infinity,
                name: "",
                description: "",
                priority: "",
                due_date: "",
            }};
        default:
            return state;
      }
  }

  export default taskReducer;
