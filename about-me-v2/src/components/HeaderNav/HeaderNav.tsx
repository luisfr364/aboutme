import styles from "./HeaderNav.module.css";

function HeaderNav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.list__item}>
          <a href='#about'>About</a>
        </li>
        <li className={styles.list__item}>
          <a href='#projects'>Projects</a>
        </li>
        <li className={styles.list__item}>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNav;
