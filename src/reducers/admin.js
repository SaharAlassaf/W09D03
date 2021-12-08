const initState = {
  tasks: [],
};

const admin = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_TASKS":
      return payload;

    case "DELETE_TASKS":
      const { id } = payload;
      const delTasks = state.tasks.filter((item) => item._id !== id);
      return { tasks: delTasks };

    default:
      return state;
  }
};

export default admin;

export const getAllTasks = (data) => {
  return {
    type: "GET_TASKS",
    payload: { tasks: data },
  };
};

export const deleteAnyTasks = (data) => {
  return {
    type: "DELETE_TASKS",
    payload: data,
  };
};
