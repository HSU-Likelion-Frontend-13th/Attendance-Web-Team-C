import { useState } from "react";
import styles from "../styles/Login.module.css";
import visualImage from "../assets/logo.svg";
import eveIcon from "../assets/eye.svg"; // 👁️ 아이콘 추가

export function Login() {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("default");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const VALID_ID = "2171181";
    const VALID_PASSWORD = "123456";

    if (studentId === VALID_ID && password === VALID_PASSWORD) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  const getInputClass = () => {
    if (status === "success") return `${styles.input} ${styles.inputSuccess}`;
    if (status === "error") return `${styles.input} ${styles.inputError}`;
    return styles.input;
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.formSection}>
          <h2 className={styles.title}>로그인</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            {/* 학번 입력 */}
            <div className={styles.inputGroup}>
              <label className={styles.label}>학번</label>
              <div className={styles.inputWrapper}>
                <span className={styles.icon}>🔒</span>
                <input
                  type="text"
                  placeholder="학번을 입력해주세요"
                  className={getInputClass()}
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                />
              </div>
            </div>

            {/* 비밀번호 입력 */}
            <div className={styles.inputGroup}>
              <label className={styles.label}>비밀번호</label>
              <div className={styles.inputWrapper}>
                <span className={styles.icon}>🔒</span>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="비밀번호"
                  className={getInputClass()}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <img
                  src={eveIcon}
                  alt="toggle visibility"
                  className={styles.eyeIcon}
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
            </div>

            <div className={styles.rememberRow}>
              <label>
                <input type="checkbox" /> 아이디 저장
              </label>
            </div>

            <button type="submit" className={styles.loginBtn}>로그인</button>
          </form>

          <div className={styles.footerText}>
            아직 회원이 아니신가요? <span className={styles.link}>회원가입</span>
          </div>
        </div>

        <div className={styles.imageSection}>
          <img src={visualImage} alt="visual" className={styles.visualImage} />
        </div>
      </div>
    </div>
  );
}
