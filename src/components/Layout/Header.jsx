import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <span className="projectLabel">
        <h2 className="projectName">Игровые задачи</h2>
        <div className="spinner"></div>
      </span>
      <nav className="navigate">
        <ul>
          <li>
            <NavLink className="link" to={"/"} activeclassname="active">
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to={"/tasks"} activeclassname="active">
              Задачи
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
