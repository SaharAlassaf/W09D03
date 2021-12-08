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
      return {
        tasks: state.tasks.map((item) => {

          if (payload._id === item._id) {
            return { ...item, name: payload.name };
          } else {
            return item;
          }
        }),
      };

    case "DELETE_TASKS":
      return { tasks: state.tasks.filter((item) => item._id !== payload) };

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
