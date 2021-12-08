const initState = {
  tasks: [],
};

const user = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_TASKS":
      return payload;

    case "POST_TASKS":
      const tasks = [...state.tasks, payload];
      return { tasks };

    case "PUT_TASKS":
      const { update } = payload;
      console.log("tasks", tasks);
      const newTasks = state.tasks.map((item) => {
        if (update._id == item.id) {
          return { ...item, name: update };
        } else {
          return item;
        }
      });
      console.log(newTasks);
      return { tasks: newTasks };

    case "DELETE_TASKS":
      const { id } = payload;
      return { tasks: state.tasks.filter((item) => item._id !== id) };

    default:
      return state;
  }
};

export default user;

export const getTasks = (data) => {
  return {
    type: "GET_TASKS",
    payload: { tasks: data },
  };
};

export const postTasks = (data) => {
  return {
    type: "POST_TASKS",
    payload: data,
  };
};

export const putTasks = (data) => {
  return {
    type: "PUT_TASKS",
    payload: data,
  };
};

export const deleteTasks = (data) => {
  return {
    type: "DELETE_TASKS",
    payload: data,
  };
};
