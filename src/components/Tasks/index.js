import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Landing from "../Landing";
import Task from "../Task";
import { logout } from "../../reducers/sign";
import { getTasks, postTasks, putTasks, deleteTasks } from "../../reducers/user";
import axios from "axios";

function Tasks() {
  const dispatch = useDispatch();

  useEffect(() => {
    getUserTasks();
  }, []);

  const state = useSelector((state) => {
    return {
      sign: state.sign,
      user: state.user,
    };
  });

  const addTask = async (e) => {
    try {
      let name = e.target.newTaskVal.value;

      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/createTask`,
        { name },
        {
          headers: { Authorization: `Bearer ${state.sign.token}` },
        }
      );
      // console.log(res.data);
      dispatch(postTasks(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  const getUserTasks = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/`, {
        headers: { Authorization: `Bearer ${state.sign.token}` },
      });
      // console.log(res.data);
      dispatch(getTasks(res.data));
      // setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateTask = async (e, id) => {
    try {
      e.preventDefault();
      let name = e.target.newTaskVal.value;

      const res = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/updateTask/${id}`,
        { name },
        {
          headers: { Authorization: `Bearer ${state.sign.token}` },
        }
      );
      console.log(res.data);
      // getUserTasks();
      dispatch(putTasks(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      // console.log(id);
      const res = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/deleteTask/${id}`,
        {
          headers: { Authorization: `Bearer ${state.sign.token}` },
        }
      );
      // console.log("delete t",res.data, id);
      dispatch(deleteTasks(id));
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = () => {
    dispatch(logout({ user: "", token: "" }));
  };

  return (
    <>
      {state.sign.token ? (
        <>
          <form
            onSubmit={(e) => {
              addTask(e);
            }}
          >
            <input type="text" name="newTaskVal" />

            <input type="submit" value="Add" />
          </form>
          <ul>
            {state.user.tasks.map((item) => (
              <Task
                key={item._id}
                userItem={item}
                deleteTask={deleteTask}
                updateTask={updateTask}
              />
            ))}
          </ul>
          <Link to="/">
            <button onClick={logOut}>log out</button>
          </Link>
        </>
      ) : (
        <Landing />
      )}
    </>
  );
}

export default Tasks;
