import React, { useState, useEffect, useRef } from "react";
import Table from "../../components/Table/Table";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/UI/Loader/Loader";

import { useFetch } from "../../hooks/useFetch";

import tasks from "./Tasks.module.scss";
import { server } from "../../consts/server";

const TasksPage = () => {
  console.log("render Tasks Page");
  const url = `${server.URL}/api/tasks/getAll`;
  const [tasksData, isLoading] = useFetch(url);
  const [tasksList, setTasksList] = useState([]);
  const searchInput = useRef();
  console.log(searchInput.current);

  useEffect(() => {
    if (!isLoading) {
      setTasksList(tasksData);
    }
  }, [isLoading, tasksData]);

  const sortTasks = () => {
    if (!searchInput.current.value) {
      setTasksList(tasksData);
    } else {
      setTasksList(
        tasksList.filter((task) => {
          if (task.taskId === +searchInput.current.value) {
            return true;
          }
          if (
            task.theme
              .toLowerCase()
              .indexOf(searchInput.current.value.toLowerCase()) >= 0
          ) {
            return true;
          }
          if (
            task.title
              .toLowerCase()
              .indexOf(searchInput.current.value.toLowerCase()) >= 0
          ) {
            return true;
          }
          return false;
        })
      );
    }
  };

  return (
    <div className={"wrapper " + tasks.tasksPage}>
      <section className={tasks.section}>
        <div className={tasks.searchWrap}>
          <input
            type="text"
            className={tasks.searchField}
            placeholder="Введите номер, тему или название задачи"
            ref={searchInput}
            onInput={sortTasks}
          />
        </div>
        {isLoading ? (
          <Loader isLoading={isLoading} />
        ) : (
          <Table data={tasksList} />
        )}
      </section>

      <Footer />
    </div>
  );
};

export default TasksPage;
