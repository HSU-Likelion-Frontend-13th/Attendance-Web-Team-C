import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/attendance.module.css";
import attendanceIcon from "../assets/attendance.svg";
import lateIcon from "../assets/late.svg";
import absenceIcon from "../assets/absence.svg";

export const Attendance = () => {
  const [status, setStatus] = useState("before"); // before | attendance | late | absent
  const [currentTime, setCurrentTime] = useState(new Date());
  const navigate = useNavigate();

  const attendanceStartTime = new Date();
  attendanceStartTime.setHours(15, 0, 0, 0); // 출석 기준 시간: 15:00

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleAttendance = () => {
    const now = new Date();
    const diff = (now - attendanceStartTime) / 60000;

    if (diff <= 10 && diff >= 0) {
      setStatus("attendance");
    } else if (diff > 10 && diff <= 30) {
      setStatus("late");
    } else {
      setStatus("absent");
    }
  };

  const formatTime = (date) =>
    `${date.getHours()}시 ${date.getMinutes()}분`;

  const formatTimeDiff = (now) => {
    const diffInMin = Math.floor((now - attendanceStartTime) / 60000);
    const sign = diffInMin >= 0 ? "+" : "-";
    const absMin = Math.abs(diffInMin);
    const h = String(Math.floor(absMin / 60)).padStart(2, "0");
    const m = String(absMin % 60).padStart(2, "0");
    return `(${sign}${h}:${m})`;
  };

  const getStatusIcon = () => {
    switch (status) {
      case "attendance":
        return attendanceIcon;
      case "late":
        return lateIcon;
      case "absent":
        return absenceIcon;
      default:
        return null;
    }
  };

  if (status !== "before") {
    return (
      <div className={styles.resultContainer}>
        <div className={styles.resultCard}>
          <img src={getStatusIcon()} alt={status} className={styles.statusIcon} />
          <p className={styles.resultTime}>출석 시간 {formatTime(currentTime)}</p>
          <h3 className={styles.resultMessage}>
            {status === "attendance" && "정상 출석되었습니다!"}
            {status === "late" && "지각 처리되었습니다."}
            {status === "absent" && "결석 처리되었습니다.."}
          </h3>
          <button className={styles.button} onClick={() => navigate("/calender")}>내 출석 현황 보러가기</button>
        </div>
      </div>
    );
  }

  const isLate = (currentTime - attendanceStartTime) / 60000 > 10;

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

        <button className={styles.button} onClick={handleAttendance}>출석하기</button>
      </div>
    </div>
  );
};