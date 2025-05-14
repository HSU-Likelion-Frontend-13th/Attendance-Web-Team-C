import { headerlogo2 } from "../assets";
import { CalendarItem } from "../components/CalendarItem";
import styles from "../styles/AttendanceCheckPage.module.css";

export const AttendanceCheckPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.img}>
          <img src={headerlogo2} />
        </div>
        <span className={styles.title}>내 출석 현황</span>
      </div>
      <div className={styles.contents}>
        <div className={styles.mainCalendar}>
          <CalendarItem isMain={true}/>
        </div>
        <div className={styles.leftCalendar}>
          <CalendarItem isMain={false}/>
        </div>
        <div className={styles.rightCalendar}>
          <CalendarItem isMain={false}/>
        </div>
      </div>
    </div>
  );
};
