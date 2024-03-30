import ProjectsSwiper from "../../components/SwiperProjects/ProjectsSwiper";
import styles from "./ProjectsSection.module.css";
import { IProjectsSwiperItem } from "./../../components/SwiperProjects/ProjectsSwiperItem/interfaces";

const projectsArr: Array<IProjectsSwiperItem> = [
  {
    ProjectName: "Esse site",
    ProjectDescription: `Site criado com intuito de apresentar minhas habilidades e projetos que crio para meu portfólio digital.
    O site foi criado com react.js, css modules e swiper.js para a seção de projetos.`,
    ProjectImagePath: "./src/assets/sitePng.png",
    ProjectRepoLink: "https://github.com/luisfr364/aboutme",
    ProjectRepoLogoPath: "https://www.svgrepo.com/show/494149/github.svg",
    ProjectDemoLogoPath: "https://www.svgrepo.com/show/367884/web.svg",
    ProjectDemoLink: "#",
  },
  {
    ProjectName: "Projeto 2",
    ProjectDescription: "Em Construção...",
    ProjectImagePath: "https://www.svgrepo.com/show/403132/construction.svg",
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
