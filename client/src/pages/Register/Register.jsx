import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Signup() {
  // const googleAuth = () => {
  //   window.open(
  //     `${process.env.REACT_APP_API_URL}/auth/google/callback`,
  //     "_self"
  //   );
  // };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className={styles.container}>
        <div className={styles.form_container}>
          <div className={styles.left}>
            <img
              className={styles.img}
              src="./images/signup.jpg"
              alt="signup"
            />
          </div>
          <div className={styles.right}>
            <h2 className={styles.from_heading}>Create Account</h2>
            <input
              type="text"
              className={styles.input}
              placeholder=" Full Name"
            />
            <input type="text" className={styles.input} placeholder="Email" />
            <input
              type="number"
              className={styles.input}
              placeholder="Mobile no."
            />
            <input
              type="password"
              className={styles.input}
              placeholder="Password"
            />
            <button className={styles.btn}>Sign Up</button>
            <p className={styles.text}>or</p>
            <button className={styles.google_btn}>
              <img src="./images/google.png" alt="google icon" />
              <span>Sing up with Google</span>
            </button>
            <p className={styles.text}>
              Already Have Account ? <Link to="/login">Log In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
