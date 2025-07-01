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

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    tags: z.array(z.string()),
    codeUrl: z.string().optional(),
    codeButtonText: z.string().optional(),
    primaryColor: z.string().optional(),
    secondaryColor: z.string().optional(),
    gradientColor: z.string().optional(),
    accentColor: z.string().optional(),
    accentBg: z.string().optional(),
    img: z.string().optional(),
    // New flexible color properties for markdown styling
    primaryHex: z.string().optional(),
    secondaryHex: z.string().optional(),
    accentLightHex: z.string().optional(),
  }),
});

export const collections = { blog, projects };
