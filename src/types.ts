
export type Theme = 'light' | 'dark';

export type Category = 'All' | 'Web' | 'Mobile' | 'Data Analysis' | 'Desktop';

export interface Project {
  id: number;
  title: string;
  category: Category;
  description: string;
  tags: string[];
  image: string;
  githubUrl?: string; // Optional links
  liveUrl?: string;
  videoUrl?: string;
}

export interface Stat {
  label: string;
  value: string;
}
