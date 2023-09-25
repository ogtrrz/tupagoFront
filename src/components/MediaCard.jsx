import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Stack from "@mui/material/Stack";
import NextLink from "next/link";
// import Image from "next/image";
import { useRouter } from "next/router";
import SocialShare from "@/components/SocialShare";

export default function MediaCard({ skill }) {
	const router = useRouter();
	const handleOnClick = () => {
		router.push(`/view/${skill.skill}`);
	};
	return (
		<Card sx={{ maxWidth: 500 }}>
			<NextLink href={`/view/${skill.skill}`} title={skill.skill} passHref>
				<CardMedia
					sx={{ height: 280 }}
					image={skill?.image}
					title={skill.skill}
				/>
			</NextLink>
			<CardContent>
				<Stack direction='row' alignItems='center' gap={1}>
					<Typography
						variant='h5'
						align='left'
						color='primary'
						onClick={handleOnClick}
						sx={{
							"&:hover": {
								cursor: "pointer",
							},
						}}>
						{skill.skill}
					</Typography>
					<ArrowForwardIcon color='primary'/>
				</Stack>

				<Typography
					variant='body2'
					color='primary'
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
			<CardActions sx={{ ml: 1 }}>
				<SocialShare skill={skill} />
			</CardActions>
		</Card>
	);
}
