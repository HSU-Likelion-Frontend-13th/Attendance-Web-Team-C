import { logo, menu, profile, search } from "../assets";
import "../styles/header.css";

export const Header = () => {
  return (
    <div className="container">
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="navi">
        <div>로그인 / 회원가입</div>
        <div>출석하기</div>
        <div>출격 확인</div>
        <div>내 정보</div>
      </div>
      <div className="util">
        <img src={profile} />
        <img src={search} />
        <img src={menu} />
      </div>
    </div>
  );
};
