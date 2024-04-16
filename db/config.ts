import { column, defineDb, defineTable } from "astro:db";

const Authors = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),
		name: column.text(),
	},
});

const Posts = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),
		title: column.text(),
		description: column.text(),
		content: column.text(),
		author_id: column.number({ references: () => Authors.columns.id }),
	},
});

export default defineDb({
	tables: {
		Authors,
		Posts,
	},
});
