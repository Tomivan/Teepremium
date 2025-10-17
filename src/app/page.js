import styles from "./page.module.css";
import Homepage from "./components/homepage/homepage";

export default function Home() {
  return (
    <div className={styles.page}>
      <Homepage />
    </div>
  );
}
