import { IProjectsSwiperItemProps, IProjectsSwiperItem } from "./interfaces.ts";

function ProjectsSwiperItem(props: IProjectsSwiperItem) {
  return (
    <>
      <div>
        <img src={props.ProjectImagePath} alt='' />
        <h2>{props.ProjectName}</h2>
        <p>{props.ProjectDescription}</p>
      </div>
      <ul>
        <li>
          <a href={props.ProjectRepoLink}>Repo</a>
        </li>
        <li>
          <a href={props.ProjectDemoLink}>Demo</a>
        </li>
      </ul>
    </>
  );
}

export default ProjectsSwiperItem;
