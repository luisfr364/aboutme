import HeaderNav from "../../components/HeaderNav/HeaderNav.tsx";
import styles from "./Header.module.css";

function Header(): JSX.Element {
  return (
    <header>
      <div className={styles.header__headerBlock}>
        <div className={styles.headerBlock__textblock}>
          <h1 className={styles.textblock__title}>Luis Fernando</h1>
          <p className={styles.textblock__paragraph}>Full-Stack Developer</p>
        </div>
        <HeaderNav />
      </div>
    </header>
  );
}

export default Header;
