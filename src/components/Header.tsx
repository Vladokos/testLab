import { Burger } from "./Burger";

import logo from "../assets/images/header/logo.svg";

import "../assets/styles/header/Header.css";

export const Header = () => {
  return (
    <div className="wrapper">
      <header>
        <div className="container">
          <div className="header__inner">
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
            <nav className="navigation">
              <ul>
                <li>Как это работает</li>
                <li>3-й блок</li>
                <li>Вопросы и ответы</li>
                <li>Форма</li>
              </ul>
            </nav>
            <div className="burgerMenu">
              <Burger />
            </div>
          </div>
        </div>
      </header>
      <div className="greetings">
        <div className="container">
          <div className="greetings__inner">
            <div>
              <h1 className="title">
                Говорят, никогда не поздно сменить профессию
              </h1>
              <span className="subtitle">
                Сделай круто тестовое задание и у тебя получится
              </span>
            </div>
            <button>Проще простого!</button>
          </div>
        </div>
      </div>
    </div>
  );
};
