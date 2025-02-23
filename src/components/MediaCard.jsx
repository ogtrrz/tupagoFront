import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Stack from "@mui/material/Stack";
import NextLink from "next/link";
import Image from "next/image";

export default function MediaCard({ skill }) {
	const handleOnClick = () => {
		// router.push(`/view/${skill.skill}`);
	};

	return (
		<Card sx={{ maxWidth: 500 }}>
			<NextLink href={`/view/${skill.skill}`} title={skill.skill} passHref>
				{/* ✅ Replace CardMedia with next/image */}
				<div style={{ position: "relative", width: "100%", height: "280px" }}>
					<Image
						src={skill?.image}
						alt={skill.skill}
						fill
						style={{ objectFit: "cover", borderRadius: "4px" }} // ✅ Ensure proper display
						priority // ✅ Faster loading
					/>
				</div>
			</NextLink>
			<CardContent>
				<Stack direction='row' alignItems='center' gap={1}>
					<Typography
						variant='h5'
						align='left'
						color='secondary'
						onClick={handleOnClick}
						sx={{
							"&:hover": {
								cursor: "pointer",
							},
						}}>
						{skill.skill.replace("_", " ")}
					</Typography>
					<ArrowForwardIcon color='secondary' />
				</Stack>

				<Typography
					variant='body2'
					color='secondary'
					align='left'
					onClick={handleOnClick}
					sx={{
						"&:hover": {
							cursor: "pointer",
						},
					}}>
					{skill.profile}
				</Typography>
			</CardContent>
		</Card>
	);
}
