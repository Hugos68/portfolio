import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";
import rehypeSlug from "rehype-slug";

// https://astro.build/config
export default defineConfig({
	integrations: [
		mdx({
			rehypePlugins: [
				rehypeSlug,
				[
					rehypeAutolinkHeadings,
					{
						behavior: "wrap",
					},
				],
				[
					rehypeExternalLinks,
					{
						target: "_blank",
						content: {
							type: "text",
							value: " 🡕",
						},
					},
				],
			],
			shikiConfig: {
				themes: {
					light: "github-light",
					dark: "github-dark",
				},
				langs: [],
				wrap: true,
			},
		}),
		tailwind(),
	],
});
