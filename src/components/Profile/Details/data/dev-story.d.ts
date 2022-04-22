export type DevStory = {
  projects: Project[];
  experiences: Experience[];
};

export type Project = {
  year: number;
  month: number;
  what: string;
  about: string;
  tags: string[];
  link: string | null;
};

export type Experience = {
  yearStart: number;
  monthStart: number;
  yearEnd: number | null;
  monthEnd: number | null;
  where: string;
  what: string;
  tags: string[];
};
