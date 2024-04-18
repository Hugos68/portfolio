import { defineConfig } from "astro/config";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: process.env.CF_PAGES_URL,
	integrations: [tailwind(), sitemap()],
	markdown: {
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
				dark: "slack-dark",
				light: "slack-ochin",
			},
			wrap: true,
		},
	},
});
