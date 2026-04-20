import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'uxd8e1wg',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

const builder = createImageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}

export const blogQueries = {
  allPosts: `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    author->{name, image},
    categories[]->{title}
  }`,

  postBySlug: (slug: string) => `*[_type == "post" && slug.current == "${slug}"][0] {
    _id,
    title,
    slug,
    excerpt,
    body,
    mainImage,
    publishedAt,
    author->{name, image, bio},
    categories[]->{title, slug}
  }`,

  latestPosts: (limit: number = 3) => `*[_type == "post"] | order(publishedAt desc)[0...${limit}] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    author->{name, image},
    categories[]->{title}
  }`,

  allCategories: `*[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    "postCount": count(*[_type == "post" && references(^._id)])
  }`,

  postsByCategory: (slug: string) => `*[_type == "post" && "${slug}" in categories[]->slug.current] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    author->{name, image},
    categories[]->{title, slug}
  }`,

  categoryBySlug: (slug: string) => `*[_type == "category" && slug.current == "${slug}"][0] {
    _id,
    title,
    slug
  }`,
};
