import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function MyHeaderPrincipal({ imageURL, label }) {
	return (
		<Box
			sx={{
				position: "relative", // ✅ Ensures it takes space
				width: "100%",
				height: "60vh", // ✅ Defines height to push other components down
				backgroundImage: `url(${imageURL || "/tupago.webp"})`,
				backgroundPosition: "center",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				display: "flex",
				alignItems: "flex-end", // ✅ Keeps text at bottom
			}}>
			<Box
				sx={{
					width: "100%",
					p: 2,
					boxShadow: 3, // ✅ Shadow effect
					bgcolor: "rgba(0, 0, 0, 0.8)", // ✅ Dark overlay
				}}>
				<Typography variant="h4" align="left" color="white">
					{label || "Omar Gutierrez, Fullstack Developer."}
				</Typography>
			</Box>
		</Box>
	);
}
