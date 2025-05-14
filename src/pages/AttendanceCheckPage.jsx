import { useState } from "react";
import { headerlogo2 } from "../assets";
import { CalendarItem } from "../components/CalendarItem";
import { CalendarModal } from "../components/CalendarModal";
import styles from "../styles/AttendanceCheckPage.module.css";

export const AttendanceCheckPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [todayDate, setTodayDate] = useState("");
  const dateOnClick = (value) => {
    setIsOpen(value);
  };

  return (
    <>
      {isOpen ? <CalendarModal isClick={dateOnClick} todayDate={todayDate}/> : null}
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.img}>
            <img src={headerlogo2} />
          </div>
          <span className={styles.title}>내 출석 현황</span>
        </div>
        <div className={styles.contents}>
          <div className={styles.mainCalendar}>
            <CalendarItem isMain={true} isClick={dateOnClick} isOpen={isOpen} setTodayDate={setTodayDate} />
          </div>
          <div className={styles.leftCalendar}>
            <CalendarItem isMain={false} />
          </div>
          <div className={styles.rightCalendar}>
            <CalendarItem isMain={false} />
          </div>
        </div>
      </div>
    </>
  );
};
