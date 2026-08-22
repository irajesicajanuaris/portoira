// This file contains the types used in the portfolio section of the application.
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

  images?: string[];
  github?: string;
  live?: string;

  problem?: string;
  dataset?: { label: string; value: string }[];
  model?: { name: string; task: string };
  results?: { value: string; label: string }[];
  implementation?: string[];
  conclusion?: string;
};

export type Credential = {
  icon: string;
  title: string;
  desc: string;
  when: string;

  pdf?: string;
  github?: string;
  link?: string;
};
