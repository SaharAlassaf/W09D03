const initState = {
    tasks: [],
  };
  
  const admin = (state = initState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case "GET_TASKS":
        return { Tasks };
  
      case "DELETE_TASKS":
        return { Tasks };
  
      default:
        return state;
    }
  };
  
  export default admin;
  
  export const getAllTasks = (data) => {
    return {
      type: "GET_TASKS",
      payload: data,
    };
  };
  
  export const deleteAnyTasks = (data) => {
    return {
      type: "DELETE_TASKS",
      payload: data,
    };
  };
  