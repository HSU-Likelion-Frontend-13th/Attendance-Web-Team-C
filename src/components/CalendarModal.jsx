import styles from "../styles/CalendarModal.module.css";
import { close } from "../assets";

const data = [
  {
    title: "한성 이나기난스(L)",
    professor: "송교수",
    place: "상상관 205",
    attendance: "출석",
  },
  {
    title: "사고와 표현(2)",
    professor: "이교수",
    place: "탐구관 708",
    attendance: "지각",
  },
  {
    title: "생성형 AI와 디자인 씽킹(7)",
    professor: "최교수",
    place: "탐구관 402",
    attendance: "결석",
  },
];

export const CalendarModal = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        <div className={styles.top}>
          <div className={styles.today}>2025년 04년 23일</div>
          <div className={styles.img}>
            <img src={close} />
          </div>
        </div>
        <div className={styles.statusBox}>
          {data.map((el, index) => (
            <div className={styles.status} key={index}>
              <div className={styles.title}>{el.title}</div>
              <div className={styles.professor}>{el.professor}</div>
              <div className={styles.place}>{el.place}</div>
              <div
                className={`
                  ${styles.attendance} 
                ${el.attendance === "지각" ? styles.late : ""} 
                ${el.attendance === "결석" ? styles.absence : ""}
                `}
              >
                {el.attendance}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
