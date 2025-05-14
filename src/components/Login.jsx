import styles from "../styles/Login.module.css";
import visualImage from "../assets/logo.svg";

export function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.formSection}>
          <h2 className={styles.title}>로그인</h2>
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>이름</label>
              <div className={styles.inputWrapper}>
                <span className={styles.icon}>👤</span>
                <input type="text" placeholder="이름을 입력해주세요" className={styles.input} />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>학번</label>
              <div className={styles.inputWrapper}>
                <span className={styles.icon}>🔒</span>
                <input type="text" placeholder="학번을 입력해주세요" className={styles.input} />
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
