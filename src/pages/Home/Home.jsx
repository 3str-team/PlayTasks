import React from "react";
import Footer from "../../components/Footer/Footer";
import Section from "../../components/Section/Section";
import Button from "../../components/UI/Button/Button";
import Select from "../../components/UI/Select/Select";

import home from "./Home.module.scss";

const Home = () => {
  return (
    <div className={"wrapper " + home.homePage}>
      <section className={home.introduction}>
        <div className={home.introductionText}>
          <h2>Игровые задачи</h2>
          <p>
            Вас приветствует команда проекта "Игровые задачи". Добро пожаловать!
          </p>
        </div>
        <Button value={"Поехали!"} style={{ fontSize: "1.1rem" }} />
      </section>

      <Section
        title={"О проекте"}
        classes={[home.about, "unfullSection"]}
        variant="twice"
      >
        <div className={home.aboutText}>
          Наш проект нацелен на создание{" "}
          <Select variant="underline">сборника</Select> задач для учеников 5-7
          классов. Мы хотим пополнить арсенал преподавателей простым для
          понимания, но, в то же время, хорошо проработанным задачником
        </div>
        <div
          style={{
            minWidth: 200,
            minHeight: 200,
            borderRadius: 10,
            backgroundColor: "black",
          }}
        ></div>
      </Section>
      <Section
        title={"Скоро"}
        style={{ outline: "4px dashed gray", padding: 50 }}
      >
        Скоро здесь будет ссылка на задачник и ещё немного информации
      </Section>
      <Footer />
    </div>
  );
};

export default Home;
