// 📁 components/Attendance.jsx
import React, { useEffect, useState } from "react";
import styles from "../styles/attendance.module.css";

export const Attendance = () => {
  const [isLate, setIsLate] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  const classHour = 15;
  const classMinute = 0;

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      checkIfLate(now);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const checkIfLate = (now) => {
    const start = new Date(now);
    start.setHours(classHour);
    start.setMinutes(classMinute);
    start.setSeconds(0);

    const diff = (now - start) / 60000; // 분
    setIsLate(diff > 10);
  };

  const formatTime = (date) =>
    `${date.getHours()}시 ${date.getMinutes()}분`;

  const formatTimeDiff = (now) => {
  const start = new Date(now);
  start.setHours(classHour);
  start.setMinutes(classMinute);
  start.setSeconds(0);

  const diffInMin = Math.floor((now - start) / 60000);
  const sign = diffInMin >= 0 ? "+" : "-";
  const absMin = Math.abs(diffInMin);
  const h = String(Math.floor(absMin / 60)).padStart(2, "0");
  const m = String(absMin % 60).padStart(2, "0");

  return `(${sign}${h}:${m})`;
};


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
        현재 시간: {formatTime(currentTime)} {formatTimeDiff(currentTime)}
        </p>


        <button className={styles.button}>출석하기</button>
      </div>
    </div>
  );
};