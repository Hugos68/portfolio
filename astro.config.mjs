import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";

// https://astro.build/config
export default defineConfig({
	integrations: [
		mdx({
			rehypePlugins: [
				[rehypeAutolinkHeadings, { behavior: "wrap" }],
				[
					rehypeExternalLinks,
					{
						target: "_blank",
						content: { type: "text", value: " 🡕" },
					},
				],
			],
		}),
		tailwind(),
	],
});
