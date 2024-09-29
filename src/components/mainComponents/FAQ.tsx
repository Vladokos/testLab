
import "../../assets/styles/main/FAQ.css"

import cross from "../../assets/images/main/FAQ/cross.svg";



export const FAQ = () => {

    
  return (
    <div className="faq">
      <div className="container">
        <div className="faq__inner">
          <h2 className="title">Вопросы и ответы</h2>
          <ul className="questions">
            <li>
              <div>
                 <div className="question" onClick={(e:any) => e.target.className.includes("active") ? e.target.className = "question" : e.target.className +=" active"}>
                  Подтверждено: сознание наших соотечественников не замутнено
                  пропагандой?
                  <div>
                    <img src={cross} />
                  </div>
                </div>
                <div className="answer">
                  В частности, дальнейшее развитие различных форм деятельности
                  позволяет выполнить важные задания по разработке дальнейших
                  направлений развития. Предварительные выводы неутешительны:
                  экономическая повестка сегодняшнего дня говорит о возможностях
                  существующих финансовых и административных условий.
                </div>
              </div>
            </li>
            <li>
              <div>
                <div className="question" onClick={(e:any) => e.target.className.includes("active") ? e.target.className = "question" : e.target.className +=" active"}>
                  Прототип нового сервиса - это как трубный призыв?
                  <div>
                    <img src={cross} />
                  </div>
                </div>
                <div className="answer">
                  В частности, дальнейшее развитие различных форм деятельности
                  позволяет выполнить важные задания по разработке дальнейших
                  направлений развития. Предварительные выводы неутешительны:
                  экономическая повестка сегодняшнего дня говорит о возможностях
                  существующих финансовых и административных условий.
                </div>
              </div>
            </li>
            <li>
              <div>
                 <div className="question" onClick={(e:any) => e.target.className.includes("active") ? e.target.className = "question" : e.target.className +=" active"}>
                  Частокол на границе продолжает удивлять?
                  <div>
                    <img src={cross} />
                  </div>
                </div>
                <div className="answer">
                  В частности, дальнейшее развитие различных форм деятельности
                  позволяет выполнить важные задания по разработке дальнейших
                  направлений развития. Предварительные выводы неутешительны:
                  экономическая повестка сегодняшнего дня говорит о возможностях
                  существующих финансовых и административных условий.
                </div>
              </div>
            </li>
            <li>
              <div>
                 <div className="question" onClick={(e:any) => e.target.className.includes("active") ? e.target.className = "question" : e.target.className +=" active"}>
                  Очевидцы сообщают, что слышали грохот грома градущих
                  изменений?
                  <div>
                    <img src={cross} />
                  </div>
                </div>
                <div className="answer">
                  В частности, дальнейшее развитие различных форм деятельности
                  позволяет выполнить важные задания по разработке дальнейших
                  направлений развития. Предварительные выводы неутешительны:
                  экономическая повестка сегодняшнего дня говорит о возможностях
                  существующих финансовых и административных условий.
                </div>
              </div>
            </li>
            <li>
              <div>
                 <div className="question" onClick={(e:any) => e.target.className.includes("active") ? e.target.className = "question" : e.target.className +=" active"}>
                  И по сей день в центральных регионах звучит перекатами
                  печальный плач оппозиции?
                  <div>
                    <img src={cross} />
                  </div>
                </div>
                <div className="answer">
                  В частности, дальнейшее развитие различных форм деятельности
                  позволяет выполнить важные задания по разработке дальнейших
                  направлений развития. Предварительные выводы неутешительны:
                  экономическая повестка сегодняшнего дня говорит о возможностях
                  существующих финансовых и административных условий.
                </div>
              </div>
            </li>
            <li>
              <div>
                 <div className="question" onClick={(e:any) => e.target.className.includes("active") ? e.target.className = "question" : e.target.className +=" active"}>
                  Нынче никто не может себе позволить инициировать треск
                  разлетающихся скреп?
                  <div>
                    <img src={cross} />
                  </div>
                </div>
                <div className="answer">
                  В частности, дальнейшее развитие различных форм деятельности
                  позволяет выполнить важные задания по разработке дальнейших
                  направлений развития. Предварительные выводы неутешительны:
                  экономическая повестка сегодняшнего дня говорит о возможностях
                  существующих финансовых и административных условий.
                </div>
              </div>
            </li>
            <li>
              <div>
                 <div className="question" onClick={(e:any) => e.target.className.includes("active") ? e.target.className = "question" : e.target.className +=" active"}>
                  Высококачественный прототип будущего проекта обнадёживает?
                  <div>
                    <img src={cross} />
                  </div>
                </div>
                <div className="answer">
                  В частности, дальнейшее развитие различных форм деятельности
                  позволяет выполнить важные задания по разработке дальнейших
                  направлений развития. Предварительные выводы неутешительны:
                  экономическая повестка сегодняшнего дня говорит о возможностях
                  существующих финансовых и административных условий.
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
