import "../../assets/styles/main/HowItWorks.css";

import waiting from "../../assets/images/main/HowItWorks/waiting.svg";
import truck from "../../assets/images/main/HowItWorks/delivery-truck.svg";
import secure from "../../assets/images/main/HowItWorks/secure.svg";
import money from "../../assets/images/main/HowItWorks/money-bags.svg";

export const HowItWorks = () => {
  return (
    <div className="howItWorks">
      <div className="container">
        <div className="howItWorks__inner">
          <h2 className="title">Как это работает</h2>
          <ul className="cards">
            <li className="card">
              <div className="card__image">
                <img src={waiting} />
              </div>
              <div className="card__inform">
                <h4 className="card__title">Прочитай задание внимательно</h4>
                <span className="card__subtitle">
                  Думаю у тебя не займет это больше двух-трех минут
                </span>
              </div>
            </li>
            <li className="card">
              <div className="card__image">
                <img src={truck} />
              </div>
              <div className="card__inform">
                <h4 className="card__title">Изучи весь макет заранее</h4>
                <span className="card__subtitle">
                  Подумай как это будет работать на разных разрешениях и при
                  скролле
                </span>
              </div>
            </li>
            <li className="card">
              <div className="card__image">
                <img src={secure} />
              </div>
              <div className="card__inform">
                <h4 className="card__title">Сделай хорошо</h4>
                <span className="card__subtitle">
                  Чтобы мы могли тебе доверить подобные задачи в будущем
                </span>
              </div>
            </li>
            <li className="card">
              <div className="card__image">
                <img src={money} />
              </div>
              <div className="card__inform">
                <h4 className="card__title">Получи предложение</h4>
                <span className="card__subtitle">
                  Ну тут все просто, не я придумал правила, но думаю так и
                  будет)))
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
