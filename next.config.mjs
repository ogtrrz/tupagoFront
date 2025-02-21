/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
	//swcMinify: true,
	poweredByHeader: false,
	compress: true,
	staticPageGenerationTimeout: 1000,
	images: {
		domains: ["tupago.click", "localhost"],
	},
	// Codelab: Modify content-type for traffic advice file.
	async headers() {
		return [
			{
				source: "/.well-known/traffic-advice",
				headers: [
					{
						key: "Content-Type",
						value: "application/trafficadvice+json",
					},
				],
			},
		];
	},
};

export default nextConfig;
