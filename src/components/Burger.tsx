import { useState } from "react";

import getScrollbarWidth from "../hooks/getScrollWidth";

import logoB from "../assets/images/logoB.svg";
import cross from "../assets/images/Cross.svg";
import rightArrow from "../assets/images/RightArrow.svg";

import "../assets/styles/Burger.css";

export const Burger = () => {
  const [isClicked, setIsClicked] = useState<string>("");

  const burgerOpen = () => {
    const scrollWidth = getScrollbarWidth();

    document.body.style.paddingRight = `${scrollWidth}px`;
    document.body.style.overflow = "hidden";

    setIsClicked("active");
  };

  const burgerClosed = () => {
    
    setTimeout(() => {
      document.body.style.paddingRight = `0px`;
      document.body.style.overflow = "initial";
    }, 850);

    setIsClicked("inactive");
  };

  console.log(getScrollbarWidth());
  return (
    <div className="burger">
      <div onClick={() => burgerOpen()}>
        <div className="firstLine"></div>
        <div className="secondLine"></div>
      </div>
      <nav className={`navigation_burger ${isClicked}`}>
        <ul>
          <li>
            <img src={logoB} alt="Logo" className="logoB" />
            <img
              src={cross}
              alt="Close"
              className="cross"
              onClick={() => burgerClosed()}
            />
          </li>
          <li>
            <span> Как это работает</span> <img src={rightArrow} />
          </li>
          <li>
            <span> 3-й блок</span> <img src={rightArrow} />
          </li>
          <li>
            <span> Вопросы и ответы</span> <img src={rightArrow} />
          </li>
          <li>
            <span> Форма</span> <img src={rightArrow} />
          </li>
        </ul>
      </nav>
    </div>
  );
};
