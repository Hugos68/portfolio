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

export const collections = {
	blog,
};
