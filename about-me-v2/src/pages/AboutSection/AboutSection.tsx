import DropDownList from "../../components/DropDownStackList/DropDownList.tsx";
import { items } from "../../components/DropDownStackList/interfaces.ts";
import styles from "./AboutSection.module.css";

const item: items[] = [
  {
    name: "React",
    iconPath:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/128px-React-icon.svg.png",
  },
  { name: "Node", iconPath: "https://www.svgrepo.com/show/452075/node-js.svg" },
  { name: "Express", iconPath: "path" },
  {
    name: "TypeScript",
    iconPath: "https://www.svgrepo.com/show/374146/typescript-official.svg",
  },
  {
    name: "JavaScript",
    iconPath: "https://www.svgrepo.com/show/452045/js.svg",
  },
];

function AboutSection() {
  return (
    <section className={styles.aboutMe}>
      <div className={styles.aboutMe__textBlock}>
        <h2 className={styles.textBlock__title}>Sobre Mim</h2>
        <p className={styles.textBlock__paragraph}>
          Olá! Meu nome é Luis Fernando e sou um desenvolvedor junior em busca
          de experiência. Comecei a programar como hobby e venho em busca de
          torna-lô minha profissão. Tenho experiência em e estou sempre em busca
          de aprender novas tecnologias. Adoro resolver problemas utilizando as
          mais novas tecnologias disponíveis.
        </p>
      </div>
      <DropDownList title='Stack' itemsArray={item} />
    </section>
  );
}

export default AboutSection;
