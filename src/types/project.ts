export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  url?: string;
  repo?: string;
  status?: "live" | "in-progress";
  year?: string;
};


