import { Link, useLocation } from "react-router-dom";
import { logo, menu, profile, search } from "../assets";
import "../styles/header.css";

export const Header = () => {
  const location = useLocation();

  const getNavClass = (path) => {
    return location.pathname === path ? "nav-item current" : "nav-item";
  };

  return (
    <div className="container">
      <Link to="/attendance" className="logo">
        <img src={logo} />
      </Link>
      <div className="nav">
        <Link to="/login" className={getNavClass("/login")}>
          로그인 / 회원가입
        </Link>
        <Link to="/attendance" className={getNavClass("/attendance")}>
          출석하기
        </Link>
        <Link to="/attendanceCheck" className={getNavClass("/attendancePage")}>
          출격 확인
        </Link>
        <Link to="/profile" className={getNavClass("/")}>
          내 정보
        </Link>
      </div>
      <div className="util">
        <img src={profile} />
        <img src={search} />
        <img src={menu} />
      </div>
    </div>
  );
};
