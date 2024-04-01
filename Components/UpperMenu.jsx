import React from "react";
import { useTestMode } from "../Context/TestModeContext";

const UpperMenu = ({ countDown }) => {
  const { setTestTime } = useTestMode();

  const updateTime = (e) => {
    setTestTime(e.target.id);
  };

  return (
    <div className="upper-menu">
      <div className="counter">{countDown}</div>

      <div className="modes">
        <div className="time-modes" onClick={updateTime} id={20}>
          20s
        </div>
        <div className="time-modes" onClick={updateTime} id={40}>
          40s
        </div>
        <div className="time-modes" onClick={updateTime} id={60}>
          60s
        </div>
      </div>
    </div>
  );
};

export default UpperMenu;
