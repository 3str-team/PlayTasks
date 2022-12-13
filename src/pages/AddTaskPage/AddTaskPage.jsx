import React from "react";
import { useState } from "react";
import Button from "../../components/UI/Button/Button";
import { server } from "../../consts/server";

import add from "./AddTaskPage.module.scss";

const defaultData = {
  theme: "",
  title: "",
  text: "",
  answer: "",
};

const AddTaskPage = () => {
  const [data, setData] = useState({
    ...defaultData,
    password: "",
  });

  const submit = () => {
    const url = `${server.URL}/api/tasks/add`;

    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");

    xhr.send(JSON.stringify(data));

    xhr.onload = () => {
      console.log(xhr.response);
      setData({
        ...defaultData,
        password: data.password,
      });
    };
  };

  return (
    <div className={"wrapper " + add.addPage}>
      <section className={add.section}>
        <div className={add.form}>
          <input
            className={add.input}
            type="text"
            placeholder="Пароль"
            onInput={(e) => setData({ ...data, password: e.target.value })}
          />
          <input
            value={data.theme}
            className={add.input}
            type="text"
            placeholder="Категория"
            onInput={(e) => setData({ ...data, theme: e.target.value })}
          />
          <input
            value={data.title}
            className={add.input}
            type="text"
            placeholder="Название задачи"
            onInput={(e) => setData({ ...data, title: e.target.value })}
          />
          <textarea
            value={data.text}
            className={add.input}
            placeholder="Текст задачи"
            onInput={(e) => setData({ ...data, text: e.target.value })}
          ></textarea>
          <textarea
            value={data.answer}
            className={add.input}
            placeholder="Ответ"
            onInput={(e) => setData({ ...data, answer: e.target.value })}
          ></textarea>
          <Button
            style={{ maxWidth: 100 }}
            value="Отправить"
            onClick={submit}
          />
        </div>
      </section>
    </div>
  );
};

export default AddTaskPage;
