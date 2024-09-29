import "../../assets/styles/customComponents/CheckBox.css"

export const CheckBox = () => {
  return (
    <div>
      <div className="checkbox-wrapper-45">
        <input id="cbx-45" type="checkbox" />
        <label className="cbx" htmlFor="cbx-45">
          <div className="flip">
            <div className="front"></div>
            <div className="back">
              <svg width="16" height="14" viewBox="0 0 16 14">
                <path d="M2 8.5L6 12.5L14 1.5"></path>
              </svg>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};
