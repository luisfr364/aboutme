import { Swiper, SwiperSlide } from "swiper/react";
import { IProjectsSwiperItemProps } from "./ProjectsSwiperItem/interfaces";
import ProjectsSwiperItem from "./ProjectsSwiperItem/ProjectSwiperItem";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const ProjectsSwiper = (props: IProjectsSwiperItemProps) => {
  return (
    <Swiper
      spaceBetween={5}
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
            ProjectDemoLink={project.ProjectDemoLink}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectsSwiper;
