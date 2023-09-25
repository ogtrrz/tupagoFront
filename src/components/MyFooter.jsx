import React from "react";
// import NextLink from "next/link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/router";
import PolicyIcon from "@mui/icons-material/Policy";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import CookieIcon from "@mui/icons-material/Cookie";

const MyFooter = () => {
	const router = useRouter();
	const handleOnClick = (e, param) => {
		e.preventDefault();
		// console.log("event", param);
		if (param === "linkedin") {
			return window.open(
				"https://www.linkedin.com/in/omar-gutierrez-07a2421ba/",
				"_ blank"
			);
		}
		if (param === "contactForm") {
			return router.push("/ContactForm");
		}
		if (param === "resume") {
			return router.push("/OmarGutierrez-CV.pdf");
		}
		//window.open _blank resume without email info
		if (param === "contactForm") {
			return window.open(
				"https://www.linkedin.com/in/omar-gutierrez-07a2421ba/",
				"_ blank"
			);
		}
		if (param === "github") {
			return window.open("https://github.com/ogtrrz/", "_ blank");
		}
		if (param === "architecture") {
			return router.push("/Architecture");
		}
		if (param === "privacy") {
			return router.push("/PrivacyPolicy");
		}
	};
	return (
		<React.Fragment>
			<Box sx={{ m: 10 }}></Box>
			<Grid
				container
				sx={{ bgcolor: "primary.main", color: "white", pb: 5, pl: 3 }}
				spacing={{ xs: 3, md: 6 }}
				columns={{ xs: 6, md: 12 }}>
				<Grid xs={5} item={true}>
					<Stack
						direction='row'
						alignItems='center'
						gap={1}
						onClick={(e) => handleOnClick(e, "linkedin")}
						sx={{
							mb: 1,
							"&:hover": {
								cursor: "pointer",
							},
						}}>
						<LinkedInIcon />
						<Typography variant='body2'>Omar Gutierrez Linkedin</Typography>
						<ArrowForwardIcon />
					</Stack>
					<Stack
						direction='row'
						alignItems='center'
						gap={1}
						onClick={(e) => handleOnClick(e, "resume")}
						sx={{
							mb: 1,
							"&:hover": {
								cursor: "pointer",
							},
						}}>
						<PictureAsPdfIcon />
						<Typography variant='body2'>
							Download Omar Gutierrez resume.
						</Typography>
						<ArrowForwardIcon />
					</Stack>
					<Stack
						direction='row'
						alignItems='center'
						gap={1}
						onClick={(e) => handleOnClick(e, "contactForm")}
						sx={{
							mb: 1,
							"&:hover": {
								cursor: "pointer",
							},
						}}>
						<ContactMailIcon />
						<Typography variant='body2'>Contact Form.</Typography>
						<ArrowForwardIcon />
					</Stack>
					<br />
					<Stack direction='row' alignItems='center' gap={1}>
						<CookieIcon />
						<Typography variant='body2'>
							This site does not use cookies
						</Typography>
					</Stack>
				</Grid>
				<Grid xs={5} item={true}>
					<Stack
						direction='row'
						alignItems='center'
						gap={1}
						onClick={(e) => handleOnClick(e, "github")}
						sx={{
							mb: 1,
							"&:hover": {
								cursor: "pointer",
							},
						}}>
						<GitHubIcon />
						<Typography variant='body2'>Omar Gutierrez GitHub</Typography>
						<ArrowForwardIcon />
					</Stack>
					<Stack
						direction='row'
						alignItems='center'
						gap={1}
						onClick={(e) => handleOnClick(e, "architecture")}
						sx={{
							mb: 1,
							"&:hover": {
								cursor: "pointer",
							},
						}}>
						<ArchitectureIcon />
						<Typography variant='body2'>Site architecture.</Typography>
						<ArrowForwardIcon />
					</Stack>
					<Stack
						direction='row'
						alignItems='center'
						gap={1}
						onClick={(e) => handleOnClick(e, "privacy")}
						sx={{
							mb: 1,
							"&:hover": {
								cursor: "pointer",
							},
						}}>
						<PolicyIcon />
						<Typography variant='body2'>Privacy Policy.</Typography>
						<ArrowForwardIcon />
					</Stack>
					<br />
					<Typography variant='body2'>© 2023 Omar Gutierrez.</Typography>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default React.memo(MyFooter);
