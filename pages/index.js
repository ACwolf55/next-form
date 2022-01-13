import styles from "../styles/Home.module.css";
import Login from "./Login";

export default function Home1() {
  return (
    <div className={styles.container}>
      <div className="page">
        <Login />
      </div>
    </div>
  );
}
