export default async function sitemap() {
	const routes = [
		"",
		"/about",
		"/projects",
		"/stack",
	].map((route) => ({
		url: `https://aymuhammet.com.tr${route}`,
		lastModified: new Date().toISOString().split("T")[0],
	}));

	return [...routes];
}
