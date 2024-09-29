import { useEffect, useState } from "react";

import "../../assets/styles/main/Debt.css";

import phone from "../../assets/images/main/debt/phone.png";
import truck from "../../assets/images/main/debt/truck.png";

export const Debt = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="debt">
      <div className="container">
        <div className="debt__inner">
          <div className="about">
            <h2 className="title">Круто, ты дошел до третьего блока</h2>
            <p className="subtitle">
              63% опрошенных пользовались кредитами из-за того, что не могли
              покрыть непредвиденные расходы свыше 15 000 ₽.
              <br />
              <br />
              Доступ к заработанным деньгам помогает отказаться от кредитов и
              экономить деньги на процентах и штрафах.
            </p>
          </div>
          <div className="images">
            <div
              className="phone"
              style={{ transform: `translateY(${scrollY * 0.05}px)` }}
            >
              <img src={phone} />
            </div>
            <div
              className="truck"
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
              <img src={truck} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
