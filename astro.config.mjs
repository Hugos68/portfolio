import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: process.env.CF_PAGES_URL,
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
				theme: "github-dark-dimmed",
				wrap: true,
			},
		}),
		tailwind(),
		sitemap(),
	],
});
