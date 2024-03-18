import { IProjectsSwiperItem } from "./interfaces.ts";
import styles from "./ProjectsSwiperItem.module.css";

function ProjectsSwiperItem(props: IProjectsSwiperItem) {
  return (
    <div className={styles.projectItem}>
      <div className={styles.projectItem__desc}>
        <img src={props.ProjectImagePath} alt='' />
        <h2>{props.ProjectName}</h2>
        <p>{props.ProjectDescription}</p>
      </div>
      <ul className={styles.linksList}>
        <li className={styles.linksListItem}>
          <a href={props.ProjectRepoLink}>
            <img src={props.ProjectRepoLogoPath} />
            <p>Repo</p>
          </a>
        </li>
        <li className={styles.linksListItem}>
          <a href={props.ProjectDemoLink}>
            <img src={props.ProjectDemoLogoPath} alt='website logo' />
            <p>Demo</p>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ProjectsSwiperItem;
