import React from "react";

import tasks from "./Tasks.module.scss";

import { tasks as tasksData } from "../../data/tasks";
import Table from "../../components/Table/Table";
import { useState } from "react";

const TasksPage = () => {
  const [tasksList, setTasksList] = useState(tasksData);

  const sortTasks = (info) => {
    setTimeout(() => {
      if (!info) {
        setTasksList(tasksData);
      } else {
        setTasksList(
          tasksData.filter((task) => {
            if (task.taskId === +info) {
              return true;
            }
            if (task.theme.toLowerCase().indexOf(info.toLowerCase()) >= 0) {
              return true;
            }
            if (task.title.toLowerCase().indexOf(info.toLowerCase()) >= 0) {
              return true;
            }
            return false;
          })
        );
      }
    }, 100);
  };

  return (
    <div className={"wrapper " + tasks.tasksPage}>
      <section className={tasks.section}>
        <div className={tasks.searchWrap}>
          <input
            type="text"
            className={tasks.searchField}
            placeholder="Введите номер или тему задачи"
            onInput={(e) => sortTasks(e.target.value)}
          />
        </div>
        <Table data={tasksList} />
      </section>
    </div>
  );
};

export default TasksPage;
