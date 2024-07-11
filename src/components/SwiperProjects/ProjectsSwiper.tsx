import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IProjectsSwiperItemProps } from "./ProjectsSwiperItem/interfaces";
import ProjectsSwiperItem from "./ProjectsSwiperItem/ProjectSwiperItem";

import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";

const ProjectsSwiper = (props: IProjectsSwiperItemProps) => {
  const [slidesPerView, setSlidesPerView] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setSlidesPerView(1);
      } else if (width >= 768 && width < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(2);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once initially to set the initial value

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={1}
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
            ProjectDemoLogoPath={project.ProjectDemoLogoPath}
            ProjectDemoLink={project.ProjectDemoLink}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectsSwiper;
