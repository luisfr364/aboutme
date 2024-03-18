import ProjectsSwiper from "../../components/SwiperProjects/ProjectsSwiper";
import styles from "./ProjectsSection.module.css";
import { IProjectsSwiperItem } from "./../../components/SwiperProjects/ProjectsSwiperItem/interfaces";

const props: Array<IProjectsSwiperItem> = [
  {
    ProjectName: "Esse site",
    ProjectDescription: `Site criado com intuito de apresentar minhas habilidades e projetos que crio para meu portfólio digital.
    O site foi criado com react.js, css modules e swiper.js para a seção de projetos.`,
    ProjectImagePath: "./sitePng.png",
    ProjectRepoLink: "https://github.com/luisfr364/aboutme",
    ProjectRepoLogoPath: "./github-rounded-border-svgrepo-com.svg",
    ProjectDemoLogoPath: "./public/website-click-svgrepo-com.svg",
    ProjectDemoLink: "https://www.google.com",
  },
  {
    ProjectName: "Project 2",
    ProjectDescription: "Description 2",
    ProjectImagePath: "https://placehold.co/200",
    ProjectRepoLink: "#",
    ProjectRepoLogoPath: "./github-rounded-border-svgrepo-com.svg",
    ProjectDemoLogoPath: "./public/website-click-svgrepo-com.svg",
    ProjectDemoLink: "https://www.google.com",
  },
  {
    ProjectName: "Project 3",
    ProjectDescription: "Description 3",
    ProjectImagePath: "https://placehold.co/200",
    ProjectRepoLink: "#",
    ProjectRepoLogoPath: "./github-rounded-border-svgrepo-com.svg",
    ProjectDemoLogoPath: "./public/website-click-svgrepo-com.svg",
    ProjectDemoLink: "https://www.google.com",
  },
];

function ProjectsSection() {
  return (
    <section className={styles.section}>
      <h2>Projects</h2>
      <ProjectsSwiper projects={props} />
    </section>
  );
}

export default ProjectsSection;
