import React from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Accordion from "../../components/UI/Accordion/Accordion";
import Button from "../../components/UI/Button/Button";

import { tasks as tasksData } from "../../data/tasks";

import taskStyles from "./TaskPage.module.scss";

const TaskPage = () => {
  const currentTaskId = useParams().taskId;
  const { title, text, answer } = tasksData.filter(
    (t) => +t.taskId === +currentTaskId
  )[0];

  return (
    <div className={taskStyles.taskPage + " wrapper"}>
      <div className={taskStyles.controlls}>
        <Link to={"./.."} className={taskStyles.back}>
          <Button value="Назад" style={{ fontSize: 18 }} />
        </Link>
      </div>
      <section className={taskStyles.section}>
        <div className={taskStyles.title}>{title}</div>
        <div className={taskStyles.text}>{text}</div>
        <Accordion titleDefault={"Ответ"} titleHidden={"Скрыть"}>
          {answer}
        </Accordion>
      </section>

      <Footer />
    </div>
  );
};

export default TaskPage;
