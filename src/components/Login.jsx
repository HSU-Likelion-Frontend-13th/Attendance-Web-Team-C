import { Header } from "./Header";
import "../styles/LoginPage.css";

export default function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-form">
          <h2 className="login-title">로그인</h2>
          <form className="login-inputs">
            <input type="text" placeholder="이름을 입력해주세요" className="login-input" />
            <input type="password" placeholder="학번을 입력해주세요" className="login-input" />
            <input type="password" placeholder="비밀번호" className="login-input" />
            <button type="submit" className="login-button">로그인</button>
          </form>
          <div className="signup-link">회원가입</div>
        </div>

        <div className="login-info">
          <img src="/logo.png" alt="HANSUNG University" className="login-logo" />
          <h3 className="university-name">HANSUNG UNIVERSITY</h3>
          <p className="university-desc">글로벌 영향력을 선도하는 혁신대학</p>
        </div>
      </div>
    </div>
  );
}

export const Login = () => {

    return (
        <div>
            <Header/>
        </div>
    )
}

