import React from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Accordion from "../../components/UI/Accordion/Accordion";
import Button from "../../components/UI/Button/Button";
import Loader from "../../components/UI/Loader/Loader";
import { server } from "../../consts/server";

import { useFetch } from "../../hooks/useFetch";

import taskStyles from "./TaskPage.module.scss";

const TaskPage = () => {
  console.log("render Task Page");
  const currentTaskId = useParams().taskId;
  const url = `${server.URL}/api/tasks/get/${currentTaskId}`;
  const [task, isLoading] = useFetch(url);

  return (
    <div className={taskStyles.taskPage + " wrapper"}>
      <div className={taskStyles.controlls}>
        <Link to={"./.."} className={taskStyles.back}>
          <Button value="Назад" style={{ fontSize: 18 }} />
        </Link>
      </div>

      {isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
        <section className={taskStyles.section}>
          <div className={taskStyles.title}>{task.title}</div>
          <div className={taskStyles.text}>{task.text}</div>
          <Accordion titleDefault={"Ответ"} titleHidden={"Скрыть"}>
            {task.answer}
          </Accordion>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default TaskPage;
