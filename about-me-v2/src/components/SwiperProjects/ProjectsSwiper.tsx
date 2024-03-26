import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IProjectsSwiperItemProps } from "./ProjectsSwiperItem/interfaces";
import ProjectsSwiperItem from "./ProjectsSwiperItem/ProjectSwiperItem";

import "swiper/css";
import "swiper/css/navigation";

const ProjectsSwiper = (props: IProjectsSwiperItemProps) => {
  return (
    <Swiper
      slidesPerView={2}
      onSlideChange={() => console.log("slide change")}
      modules={[Navigation]}
      navigation
    >
      {props.projects.map((project, index) => (
        <SwiperSlide key={index}>
          <ProjectsSwiperItem
            ProjectName={project.ProjectName}
            ProjectDescription={project.ProjectDescription}
            ProjectImagePath={project.ProjectImagePath}
            ProjectRepoLink={project.ProjectRepoLink}
            ProjectRepoLogoPath={project.ProjectRepoLogoPath}
            ProjectDemoLogoPath={project.ProjectDemoLogoPath}
            ProjectDemoLink={project.ProjectDemoLink}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectsSwiper;
