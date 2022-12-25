import type { MDXInstance } from "../types/shared";
import type { Post, Tag } from "../types/posts";

export function sortMDByDate(posts: MDXInstance<Post>[] = []) {
  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.publishDate).valueOf() - new Date(a.frontmatter.publishDate).valueOf()
  );
}

export function strToCol(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return "hsl(" + (hash / (122*str.length) * 255) + ", 56%, 56%)";
}

export function getTags(posts: MDXInstance<Post>[]) {
  const tags = new Map<string, Tag>();
  const tagkeys = new Array();

  posts.forEach(p => {
    p.frontmatter.tags?.map(t => {
      const tagHash = t.toLowerCase();
      const tagEntry = tags.get(tagHash);
      if (tagEntry)
        tagEntry.posts.push(p.frontmatter.title);
      else {
        tags.set(tagHash, {
          value: tagHash,
          color: strToCol(tagHash),
          posts: [p.frontmatter.title],
          select: false,
        });
        tagkeys.push(tagHash);
      }
    });
  });

  return [tags, tagkeys];
}

export function getUniqueTags(posts: MDXInstance<Post>[] = []) {
  const uniqueTags = new Set<string>();
  posts.forEach((post) => {
    post.frontmatter.tags?.map(tag => uniqueTags.add(
        tag.toLowerCase(),
    ));
  });
  const tags = [...uniqueTags];
  const tagsCol = tags.map((t,i) => {
            const c = Math.floor(359.0 / tags.length * i);
            const col = "hsl(" + c + ", 56%, 56%)";
            return {
              value: t,
              color: col,
            }
          })
  return tagsCol;
}

export function getTagColmap(tags: Tag[]) {
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
