import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
//Dialog
import Button from "@mui/material/Button";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
// import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Stack from "@mui/material/Stack";
// import { useRouter } from "next/router";
// import PolicyIcon from "@mui/icons-material/Policy";
import ArchitectureIcon from "@mui/icons-material/Architecture";
// import ContactPageIcon from "@mui/icons-material/ContactPage";
import ContactMailIcon from "@mui/icons-material/ContactMail";
// import HailIcon from "@mui/icons-material/Hail";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: "100%",
	[theme.breakpoints.up("sm")]: {
		marginLeft: theme.spacing(1),
		width: "auto",
	},
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: "12ch",
			"&:focus": {
				width: "20ch",
			},
		},
	},
}));

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	"& .MuiDialogContent-root": {
		padding: theme.spacing(2),
	},
	"& .MuiDialogActions-root": {
		padding: theme.spacing(1),
	},
}));

export default function SearchAppBar() {
	//const router = useRouter();

	const [search, setSearch] = React.useState("");
	// const searchRef = useRef(null);
	const handleKeyup = async () => {
		// console.log("search", search);
		if (search.length < 3 ) {
			return;
		}
		const encodedURL = encodeURIComponent(search);
		setSearch("");
		// router.push(`/Search?search=${encodedURL}`);
	};

	const handleOnClick = (e, param) => {
		e.preventDefault();
		// console.log("event", param);
		if (param === "linkedin") {
			return window.open(
				"https://www.linkedin.com/in/omar-gutierrez-07a2421ba/",
				"_ blank"
			);
		}
		// if (param === "contactForm") {
		// 	return router.push("/ContactForm");
		// }
		// if (param === 'resume') {
		// 	return router.push("/OmarGutierrez-CV.pdf");
		// }
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
		// if (param === "architecture") {
		// 	return router.push("/Architecture");
		// }
		// if (param === "privacy") {
		// 	return router.push("/PrivacyPolicy");
		// }
	};

	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	return (
		<React.Fragment>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position='fixed'>
					<Toolbar>
						<IconButton
							size='large'
							edge='start'
							color='inherit'
							aria-label='open-dialog-menu'
							sx={{ mr: 2 }}
							onClick={handleClickOpen}>
							<MenuIcon />
						</IconButton>
						<Typography
							variant='subtitle0'
							noWrap
							component='div'
							sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
							Omar Gutierrez, Profile.
						</Typography>
						<Stack direction='row' alignItems='center' gap={1}>
							<Search>
								<SearchIconWrapper>
									<SearchIcon />
								</SearchIconWrapper>
								<StyledInputBase
									placeholder='Search…'
									inputProps={{ "aria-label": "search" }}
									value={search}
									onChange={(e) => setSearch(e.target.value)}
									onKeyUp={(e) => {
										if (e.key === "Enter") {
											handleKeyup();
										}
									}}
								/>
							</Search>
							<Button
								variant='text'
								sx={{ color: "white" }}
								onClick={handleKeyup}>
								Search
								<ArrowForwardIcon />
							</Button>
						</Stack>
					</Toolbar>
				</AppBar>
			</Box>
			{/* <Dialog
				PaperProps={{
					style: {
						backgroundColor: "transparent",
						boxShadow: "none",
					},
				}}
				onClose={accessModal}
				open={modal}
			/> */}
			<BootstrapDialog onClose={handleClose} aria-labelledby='menu' open={open}>
				<DialogTitle
					sx={{ m: 0, p: 2, backgroundColor: "primary.main", color: "white" }}
					id='customized-dialog-title'>
					Quick links
				</DialogTitle>
				<IconButton
					aria-label='close'
					onClick={handleClose}
					sx={{
						position: "absolute",
						right: 8,
						top: 8,
						color: (theme) => theme.palette.grey[500],
					}}>
					<CloseIcon />
				</IconButton>
				<DialogContent dividers sx={{ color: "secondary.main" }}>
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
				</DialogContent>
				{/* <DialogActions>
					<Button autoFocus onClick={handleClose}>
						Save changes
					</Button>
				</DialogActions> */}
			</BootstrapDialog>
		</React.Fragment>
	);
}