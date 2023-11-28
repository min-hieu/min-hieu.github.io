import type { BaseFrontmatter } from "./shared";

interface Post extends BaseFrontmatter {
  title: string;
  description: string;
  publishDate: Date;
  tags?: string[];
  date: string;
}

interface Tag {
  value: string;
  color: string;
  posts: string[];
  select: boolean;
}

export type { Post, Tag };
