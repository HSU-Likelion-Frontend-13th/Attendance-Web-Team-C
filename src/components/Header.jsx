import { Link, useLocation } from "react-router-dom";
import { logo, menu, profile, search } from "../assets";
import styles from "../styles/Header.module.css";

export const Header = () => {
  const location = useLocation();

  const getNavClass = (path) => {
    return location.pathname === path
      ? `${styles["nav-item"]} ${styles["current"]}`
      : styles["nav-item"];
  };

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.logo}>
        <img src={logo} />
      </Link>
      <div className={styles.nav}>
        <Link to="/login" className={getNavClass("/login")}>
          로그인 / 회원가입
        </Link>
        <Link to="/attendance" className={getNavClass("/attendance")}>
          출석하기
        </Link>
        <Link to="/calender" className={getNavClass("/calender")}>
          출격 확인
        </Link>
        <Link to="/" className={getNavClass("/")}>
          내 정보
        </Link>
      </div>
      <div className={styles.util}>
        <img src={profile} />
        <img src={search} />
        <img src={menu} />
      </div>
    </div>
  );
};