interface IProjectsSwiperItem {
  ProjectName: string;
  ProjectDescription: string;
  ProjectImagePath: string;
  ProjectRepoLink?: string;
  ProjectDemoLink?: string;
  ProjectDemoLogoPath?: string;
}

interface IProjectsSwiperItemProps {
  projects: IProjectsSwiperItem[];
}

export type { IProjectsSwiperItem, IProjectsSwiperItemProps };
