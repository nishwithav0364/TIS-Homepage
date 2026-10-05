/** @type {import('next').NextConfig} */
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
	output: "export",
	basePath: isGitHubPagesBuild ? "/TIS-Homepage" : "",
	images: {
		unoptimized: true,
	},
};

export default nextConfig;
