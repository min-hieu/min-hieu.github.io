import type { MDXInstance } from "../types/shared";
import type { Post, Tag } from "../types/posts";

export function sortMDByDate(posts: MDXInstance<Post>[] = []) {
  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.publishDate).valueOf() - new Date(a.frontmatter.publishDate).valueOf()
  );
}

export function getUniqueTags(posts: MDXInstance<Post>[] = []) {
  const uniqueTags = new Set<Tag>();
  posts.forEach((post) => {
    post.frontmatter.tags?.map(tag => uniqueTags.add(
      {
        value: tag.toLowerCase(),
        color: '',
      }
    ));
  });
  const tags = [...uniqueTags];
  tags.map((p,i) => {
    let c = Math.floor(359.0 / tags.length * i);
    p.color = "hsl(" + c + ", 56%, 56%)";
  })
  return [...uniqueTags];
}

export function getTagColmap(tags: Tag[] = Map<string, string>) {
  const colmap = new Map<string, string>();
  tags.map(t =>
    colmap.set(t.value, t.color)
  );
  return colmap;
}

export function getUniqueTagsWithCount(posts: MDXInstance<Post>[] = []): {
  [key: string]: number;
} {
  return posts.reduce((prev, post) => {
    const runningTags: { [key: string]: number } = { ...prev };
    post.frontmatter.tags?.forEach(function (tag) {
      runningTags[tag] = (runningTags[tag] || 0) + 1;
    });
    return runningTags;
  }, {});
}
