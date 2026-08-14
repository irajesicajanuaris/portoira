export type Skill = {
  title: string;
  chips: string[];
};

export type Experience = {
  when: string;
  title: string;
  org: string;
  bullets: string[];
};

export type Project = {
  id: string;
  badge: string;
  title: string;
  desc: string;
  stack: string[];
};

export type Credential = {
  icon: string;
  title: string;
  desc: string;
  when: string;
};