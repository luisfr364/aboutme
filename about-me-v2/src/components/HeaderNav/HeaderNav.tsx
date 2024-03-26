import styles from "./HeaderNav.module.css";

function HeaderNav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.list__item}>
          <a href='#about'>Sobre</a>
        </li>
        <li className={styles.list__item}>
          <a href='#projects'>Projetos</a>
        </li>
        <li className={styles.list__item}>
          <a href='#contact'>Contato</a>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNav;
