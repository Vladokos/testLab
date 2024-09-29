import { useCallback, useState } from "react";

import Slider from "react-slick";

import "../../assets/styles/main/Reviews.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import avatar1 from "../../assets/images/main/reviews/avatar1.jpeg";
import avatar2 from "../../assets/images/main/reviews/avatar2.jpeg";
import avatar3 from "../../assets/images/main/reviews/avatar3.jpeg";

import active from "../../assets/images/slider/active.svg";
import inactive from "../../assets/images/slider/inactive.svg";

export const Reviews = () => {
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const [isBegin, setIsBegin] = useState<boolean>(true);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: (current: number) => handleSlideChange(current),
    prevArrow: (
      <div>
        <img
          className={`arrow back ${isBegin}`}
          src={isBegin ? inactive : active}
        />
      </div>
    ),
    nextArrow: (
      <div>
        <img
          className={`arrow next ${isEnd}`}
          src={isEnd ? inactive : active}
        />
      </div>
    ),
    responsive: [
      {
        breakpoint: 1308,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 756,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const handleSlideChange = (current: number) => {
    console.log(current);
    if (current > 0 && current < 3 && (isEnd === true || isBegin === true)) {
      setIsBegin(false);
      setIsEnd(false);
    } else if (current === 3) {
      setIsEnd(true);
    } else if (current === 0) {
      setIsBegin(true);
    }
  };

  return (
    <div className="reviews">
      <div className="container">
        <div className="reviews__inner">
          <h2 className="title">Отзывы</h2>

          <Slider {...settings}>
            <div className="slide">
              <div className="authorInfo">
                <div className="authorImage">
                  <img src={avatar3} alt="" />
                </div>
                <div>
                  <h3 className="name">Константинов Михаил Павлович</h3>
                  <span className="city">Санкт-Петербург</span>
                </div>
              </div>
              <div className="review">
                Каждый из нас понимает очевидную вещь: перспективное
                планирование предоставляет широкие возможности для анализа
                существующих паттернов поведения. В своём стремлении улучшить
                пользовательский опыт мы
              </div>
            </div>

            <div className="slide">
              <div className="authorInfo">
                <div className="authorImage">
                  <img src={avatar2} alt="" />
                </div>
                <div>
                  <h3 className="name">Иван Иванов</h3>
                  <span className="city">Санкт-Петербург</span>
                </div>
              </div>
              <div className="review">
                Каждый из нас понимает очевидную вещь: перспективное
                планирование предоставляет широкие возможности для анализа
                существующих паттернов поведения. В своём стремлении улучшить
                пользовательский опыт мы упускаем, что активно развивающиеся
                страны третьего мира призваны к ответу.
              </div>
            </div>

            <div className="slide">
              <div className="authorInfo">
                <div className="authorImage">
                  <img src={avatar1} alt="" />
                </div>
                <div>
                  <h3 className="name">Артем Корнилов</h3>
                  <span className="city">Самара</span>
                </div>
              </div>
              <div className="review">
                Каждый из нас понимает очевидную вещь: перспективное
                планирование предоставляет широкие возможности для анализа
                существующих паттернов поведения.
              </div>
            </div>

            <div className="slide">
              <div className="authorInfo">
                <div className="authorImage">
                  <img src={avatar3} alt="" />
                </div>
                <div>
                  <h3 className="name">Константинов Михаил Павлович</h3>
                  <span className="city">Санкт-Петербург</span>
                </div>
              </div>
              <div className="review">
                Каждый из нас понимает очевидную вещь: перспективное
                планирование предоставляет широкие возможности для анализа
                существующих паттернов поведения. В своём стремлении улучшить
                пользовательский опыт мы
              </div>
            </div>

            <div className="slide">
              <div className="authorInfo">
                <div className="authorImage">
                  <img src={avatar2} alt="" />
                </div>
                <div>
                  <h3 className="name">Иван Иванов</h3>
                  <span className="city">Санкт-Петербург</span>
                </div>
              </div>
              <div className="review">
                Каждый из нас понимает очевидную вещь: перспективное
                планирование предоставляет широкие возможности для анализа
                существующих паттернов поведения. В своём стремлении улучшить
                пользовательский опыт мы упускаем, что активно развивающиеся
                страны третьего мира призваны к ответу.
              </div>
            </div>

            <div className="slide">
              <div className="authorInfo">
                <div className="authorImage">
                  <img src={avatar1} alt="" />
                </div>
                <div>
                  <h3 className="name">Артем Корнилов</h3>
                  <span className="city">Самара</span>
                </div>
              </div>
              <div className="review">
                Каждый из нас понимает очевидную вещь: перспективное
                планирование предоставляет широкие возможности для анализа
                существующих паттернов поведения.
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};
