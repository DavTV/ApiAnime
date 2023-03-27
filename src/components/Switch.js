import Sun from "../img/sun.svg";
import Moon from "../img/moon-stars.svg";
import { useRef } from "react";
const Switch = ({ switchBtn, setWitchBtn }) => {
  const switchRef = useRef();
  const handleSwitch = () => {
    setWitchBtn(!switchBtn);
    if (switchBtn) {
      document.body.className = "bg-dark";
      // setWitchBtn(false);
    } else {
      document.body.className = "bg-light";

      // setWitchBtn(true);
    }
    console.log(switchBtn);
  };
  return (
    <div
      className={
        switchBtn
          ? "float  p-2 rounded-circle btn btn-primary"
          : "float  p-2 rounded-circle btn btn-success"
      }
    >
      <span>
        <img
          src={switchBtn ? Sun : Moon}
          alt="..."
          ref={switchRef}
          onClick={handleSwitch}
        />
        {/* <img src={Moon} alt="" /> */}
      </span>
    </div>
  );
};
export default Switch;
