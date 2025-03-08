
/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true, 
	poweredByHeader: false, 
	compress: true, 
	staticPageGenerationTimeout: 1000, 
	output: "standalone", 
  
	images: {
	  remotePatterns: [
		{ protocol: "https", hostname: "tupago.click" },
		{ protocol: "http", hostname: "localhost" },
	  ],
	  formats: ["image/avif", "image/webp"], 
	},
  
	// experimental: {
	//   optimizeCss: true, 
	//   scrollRestoration: true, 
	// },
  
	async headers() {
	  return [
		{
		  source: "/.well-known/traffic-advice",
		  headers: [{ key: "Content-Type", value: "application/trafficadvice+json" }],
		},
		{
		  source: "/(.*)",
		  headers: [
			{ key: "X-Frame-Options", value: "DENY" },
			{ key: "X-Content-Type-Options", value: "nosniff" },
			{ key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
			{ key: "Permissions-Policy", value: "geolocation=()" },
		  ],
		},
	  ];
	},
  
	// webpack(config, { isServer }) {
	//   if (!isServer) {
	// 	config.resolve.fallback = { fs: false }; 
	//   }
	//   return config;
	// },
  };
  
  export default nextConfig;

//   optimizar imagenes
// for img in *.webp; do   convert "$img" -resize 80% -quality 80 "optimized_$img"; done
  






