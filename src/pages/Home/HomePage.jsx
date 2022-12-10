import React from "react";
import Footer from "../../components/Footer/Footer";
import Section from "../../components/Section/Section";
import Button from "../../components/UI/Button/Button";
import Select from "../../components/UI/Select/Select";
import { Link, Element } from "react-scroll";

import home from "./Home.module.scss";

const HomePage = () => {
  const UNFULL_SECTION_CLASS = "unfullSection";

  return (
    <div className={"wrapper " + home.homePage} id="wrap">
      <section className={home.introduction}>
        <div className={home.introductionText}>
          <h2>Игровые задачи</h2>
          <p>
            Вас приветствует команда проекта "Игровые задачи". Добро пожаловать!
          </p>
        </div>
        <Link
          to="text_section"
          smooth={"easeInOut"}
          duration={800}
          containerId="wrap"
        >
          <Button value={"Поехали!"} style={{ fontSize: "1.1rem" }} />
        </Link>
      </section>
      <Section
        title={"О проекте"}
        classes={[home.about, UNFULL_SECTION_CLASS]}
        variant="twice"
      >
        <div className={home.aboutText}>
          <Element
            name="text_section"
            style={{ position: "absolute", top: 0 }}
          ></Element>
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
            boxShadow: "0 0 100px 3px rgba(0, 0, 0, 0.5)",
          }}
        ></div>
      </Section>

      <Section
        title={"Конкуренция"}
        classes={[home.competitors, UNFULL_SECTION_CLASS]}
        variant="twice"
      >
        <div>
          Разумеется, что на этом поприще мы не первые. Многие авторитетные
          методисты и преподаватели выпусткают свои сборники, что ставит их на
          уровень выше. Хоть они уже и имеют обширную аудиторию, наши
          исследования говорят, что <Select>потребность</Select> у целевой
          аудитории <Select>есть</Select>, и мы всеми силами стремимся её
          удволетворить
        </div>
        <div>
          Мы упорно работаем над систематизацией, доступностью для детей и
          содержимым, чтобы дети легко могли понимать и усваивать материал
        </div>
      </Section>

      <Section
        title={"Скоро"}
        style={{ outline: "4px dashed gray", padding: 50 }}
      >
        Скоро здесь будет ссылка на задачник
      </Section>

      <Footer />
    </div>
  );
};

export default HomePage;
