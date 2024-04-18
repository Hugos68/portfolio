import { z, defineCollection } from "astro:content";

const blog = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		tags: z.array(z.string()),
		publishedAt: z.date(),
		editedAt: z.date(),
		image: z.string().optional(),
	}),
});

const work = defineCollection({
	type: "data",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		tags: z.array(z.string()),
		images: z.array(z.string()),
	}),
});

export const collections = {
	blog,
	work,
};
