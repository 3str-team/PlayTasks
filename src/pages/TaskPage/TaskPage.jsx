import React from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/UI/Button/Button";

import { tasks as tasksData } from "../../data/tasks";

import taskStyles from "./TaskPage.module.scss";

const TaskPage = () => {
  const currentTaskId = useParams().taskId;
  const task = tasksData.filter((t) => +t.taskId === +currentTaskId)[0];

  return (
    <div className={taskStyles.taskPage + " wrapper"}>
      <div className={taskStyles.controlls}>
        <Link to={"./.."} className={taskStyles.back}>
          <Button value="Назад" style={{ fontSize: 18 }} />
        </Link>
      </div>
      <section className={taskStyles.section}>
        <div className={taskStyles.title}>{task.title}</div>
        <div className={taskStyles.text}>{task.text}</div>
      </section>

      <Footer />
    </div>
  );
};

export default TaskPage;
