export function formatDate(date: Date) {
	const currentYear = new Date().getFullYear();
	if (date.getFullYear() === currentYear) {
		return date.toLocaleDateString(undefined, {
			month: "short",
			day: "numeric",
		});
	}
	return date.toLocaleDateString(undefined, {
		year: "numeric",
		month: "short",
		day: "numeric",
	});
}
