import styles from "./AboutSection.module.css";

function AboutSection() {
  return (
    <section className={styles.aboutMe}>
      <div className={styles.textBlock__grid}>
        <div className={styles.aboutMe__textBlock}>
          <h2 className={styles.textBlock__title}>Sobre Mim</h2>
          <p className={styles.textBlock__paragraph}>
            Olá! Meu nome é Luis Fernando, sou desenvolvedor front-end e
            back-end, atualmente estou cursando ciências da computação e adoro
            aprender novas tecnologias. Estou sempre em busca de novos desafios
            e oportunidades para aprimorar minhas habilidades. Estou em busca de
            um estágio para colocar em prática meus conhecimentos e me inserir
            no mercado de trabalho.
          </p>
        </div>
        <div className={styles.textBlock__img}></div>
      </div>
    </section>
  );
}

export default AboutSection;
