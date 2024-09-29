import "../../assets/styles/main/Form.css";
import { CheckBox } from "../customComponents/CheckBox";
import { Input } from "../customComponents/Input";

export const Form = () => {
  return (
    <div className="form">
      <div className="container">
        <div className="form__inner">
          <h2 className="title">Отправь форму</h2>
          <form>
            <div className="first">
              <Input text={"Имя"} />
            </div>
            <div className="second">
              <Input text={"Телефон"} />
            </div>
            <div className="req">
              <CheckBox />
              <div>Согласен, отказываюсь</div>
            </div>
            <div className="send">
              <button>Отправить</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
