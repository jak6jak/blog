import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    tags: z.array(z.string()),
    readTime: z.string().optional(),
  }),
});

export const collections = { blog };