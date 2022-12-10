import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <span className="projectLabel">
        <h2 className="projectName">Игровые задачи</h2>
        <div className="spinner"></div>
      </span>
      <nav
        className={`navigate${isMenuOpen ? " active" : ""}`}
        onClick={closeMenu}
      >
        <ul className="list">
          <li>
            <NavLink className="link" to={""} activeclassname="active">
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to={"tasks"} activeclassname="active">
              Задачи
            </NavLink>
          </li>
        </ul>
      </nav>
      <button className="burger" onClick={openMenu}></button>
    </header>
  );
};

export default Header;
