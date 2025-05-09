import { Link } from "react-router-dom";
import { logo, menu, profile, search } from "../assets";
import "../styles/header.css";

export const Header = () => {
  return (
    <div className="container">
      <Link to="/attendance" className="logo">
        <img src={logo} />
      </Link>
      <div className="navi">
        <Link to="/login">로그인 / 회원가입</Link>
        <Link to="/attendance">출석하기</Link>
        <Link to="/attendanceCheck">출격 확인</Link>
        <Link to="/profile">내 정보</Link>
      </div>
      <div className="util">
        <img src={profile} />
        <img src={search} />
        <img src={menu} />
      </div>
    </div>
  );
};
