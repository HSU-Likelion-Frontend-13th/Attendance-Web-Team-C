import { useEffect, useState } from "react";
import styles from "../styles/Login.module.css";
import visualImage from "../assets/logo.svg";
import eveIcon from "../assets/eye.svg";
import openEveIcon from "../assets/openeye.svg"; // 👁️ 열림 상태 아이콘
import { useNavigate } from "react-router-dom";

export function Login() {
  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [remember, setRemember] = useState(false);
  const [status, setStatus] = useState("default");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedName = localStorage.getItem("name");
    const savedId = localStorage.getItem("studentId");
    if (savedName && savedId) {
      setName(savedName);
      setStudentId(savedId);
      setRemember(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const VALID_NAME = "박경빈";
    const VALID_ID = "20012301";

    const isValid = name === VALID_NAME && studentId === VALID_ID;
    setStatus(isValid ? "success" : "error");

    if (remember && isValid) {
      localStorage.setItem("name", name);
      localStorage.setItem("studentId", studentId);
    } else {
      localStorage.removeItem("name");
      localStorage.removeItem("studentId");
    }
  };

  useEffect(() => {
    if(status == "success")
      navigate("/attendance");  
  },[status]);

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
            {/* 이름 입력 */}
            <div className={styles.inputGroup}>
              <label className={styles.label}>이름</label>
              <div className={styles.inputWrapper}>
                <span className={styles.icon}>👤</span>
                <input
                  type="text"
                  placeholder="이름을 입력해주세요"
                  className={getInputClass()}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            {/* 학번 입력 (비밀번호 역할) */}
            <div className={styles.inputGroup}>
              <label className={styles.label}>학번</label>
              <div className={styles.inputWrapper}>
                <span className={styles.icon}>🔒</span>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="학번을 입력해주세요"
                  className={getInputClass()}
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                />
                <img
                  src={showPassword ? openEveIcon : eveIcon}
                  alt="toggle password"
                  className={styles.eyeIcon}
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
            </div>

            <div className={styles.rememberRow}>
              <label>
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />{" "}
                아이디 저장
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
