import React, { useEffect, useState } from "react";
import styles from "../styles/attendance.module.css";

export const Attendance = () => {
  const [isLate, setIsLate] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [status, setStatus] = useState("before"); // before | normal | late | absent

  const classHour = 15;
  const classMinute = 0;

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      if (status === "before") checkLateStatus(now);
    }, 1000);
    return () => clearInterval(timer);
  }, [status]);

  const checkLateStatus = (now) => {
    const start = new Date(now);
    start.setHours(classHour);
    start.setMinutes(classMinute);
    start.setSeconds(0);

    const diff = (now - start) / 60000;

    if (diff <= 10 && diff >= 0) setIsLate(false);
    else setIsLate(true);
  };

  const handleAttendance = () => {
    const now = new Date();
    const diff = (now - new Date(now.setHours(classHour, classMinute, 0))) / 60000;

    if (diff <= 10 && diff >= 0) {
      setStatus("normal");
    } else if (diff > 10 && diff <= 30) {
      setStatus("late");
    } else {
      setStatus("absent");
    }
  };

  const formatTime = (date) =>
    `${date.getHours()}시 ${date.getMinutes()}분`;

  if (status !== "before") {
    return (
      <div className={styles.resultContainer}>
        <div className={styles.resultCard}>
          <div className={styles[`icon-${status}`]}></div>
          <p className={styles.resultTime}>출석 시간 {formatTime(currentTime)}</p>
          <h3 className={styles.resultMessage}>
            {status === "normal" && "정상 출석되었습니다!"}
            {status === "late" && "지각 처리되었습니다."}
            {status === "absent" && "결석 처리되었습니다.."}
          </h3>
          <button className={styles.button}>홈으로 되돌아가기</button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>UX디자인의 이해</h2>
        <p className={styles.professor}>김교수</p>
        <hr className={styles.divider} />

        <div className={styles.infoRow}>
          <span className={styles.label}>강의시간</span>
          <span className={styles.value}>(금)15:00~17:30</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.label}>강의실</span>
          <span className={styles.value}>탐구관 505호</span>
        </div>

        <p className={`${styles.time} ${isLate ? styles.late : styles.onTime}`}>
          현재 시간: {formatTime(currentTime)}
        </p>

        <button className={styles.button} onClick={handleAttendance}>출석하기</button>
      </div>
    </div>
  );
};
