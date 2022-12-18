import type { BaseFrontmatter } from "./shared";

interface Post extends BaseFrontmatter {
  title: string;
  description: string;
  publishDate: Date;
  tags?: string[];
}

interface Tag {
  value: string;
  color: string;
}

export type { Post, Tag };
