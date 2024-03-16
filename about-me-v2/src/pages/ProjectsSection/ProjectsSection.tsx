import ProjectsSwiper from "../../components/SwiperProjects/ProjectsSwiper";

const props = [
  {
    ProjectName: "Project 1",
    ProjectDescription: "Description 1",
    ProjectImagePath: "https://placehold.co/200",
    ProjectRepoLink: "#",
    ProjectDemoLink: "https://www.google.com",
  },
  {
    ProjectName: "Project 2",
    ProjectDescription: "Description 2",
    ProjectImagePath: "https://placehold.co/200",
    ProjectRepoLink: "#",
    ProjectDemoLink: "https://www.google.com",
  },
  {
    ProjectName: "Project 3",
    ProjectDescription: "Description 3",
    ProjectImagePath: "https://placehold.co/200",
    ProjectRepoLink: "#",
    ProjectDemoLink: "https://www.google.com",
  },
];

function ProjectsSection() {
  return (
    <section>
      <h2>Projects</h2>
      <ProjectsSwiper projects={props} />
    </section>
  );
}

export default ProjectsSection;
