import ProjectsSwiper from "../../components/SwiperProjects/ProjectsSwiper";
import styles from "./ProjectsSection.module.css";
import { IProjectsSwiperItem } from "./../../components/SwiperProjects/ProjectsSwiperItem/interfaces";

const projectsArr: Array<IProjectsSwiperItem> = [
  {
    ProjectName: "Bone Loader",
    ProjectDescription:
      "Bone loader é uma lib simples que promete deixar a criação de telas de carregamento mais fáceis, contendo três elementos customizáveis.",
    ProjectImagePath: "./bone-loader.gif",
    ProjectRepoLink: "https://github.com/luisfr364/bone-loader",

    ProjectDemoLogoPath: "https://www.svgrepo.com/show/367884/web.svg",
    ProjectDemoLink: "#",
  },
  {
    ProjectName: "Esse site",
    ProjectDescription: `Site criado com intuito de apresentar minhas habilidades e projetos que crio para meu portfólio digital.
    O site foi criado com react.js, css modules e swiper.js para a seção de projetos.`,
    ProjectImagePath: "./sitePng.png",
    ProjectRepoLink: "https://github.com/luisfr364/aboutme",
  },
  {
    ProjectName: "Pipconfig",
    ProjectDescription:
      "Pipconfig é um projeto que visa facilitar a configuração do arquivo de configurações do pipewire e oferece segurança com a possibilidade de backups.",
    ProjectImagePath: "./pipconfig.png",
    ProjectRepoLink: "https://github.com/luisfr364/pipconfig",
  },
];

function ProjectsSection() {
  return (
    <section className={styles.section} id='projects'>
      <div className={styles.projectsContainer}>
        <h2>Projetos</h2>
        <ProjectsSwiper projects={projectsArr} />
      </div>
    </section>
  );
}

export default ProjectsSection;
