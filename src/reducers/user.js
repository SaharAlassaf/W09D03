const initState = {
  tasks: [],
};

const user = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_TASKS":
      return { Tasks };

    case "POST_TASKS":
      return { Tasks };

    case "PUT_TASKS":
      return { Tasks };

    case "DELETE_TASKS":
      return { Tasks };

    default:
      return state;
  }
};

export default user;

export const getTasks = (data) => {
  return {
    type: "GET_TASKS",
    payload: data,
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
