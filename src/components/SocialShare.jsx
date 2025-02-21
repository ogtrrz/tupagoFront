import React from "react";
import Stack from "@mui/material/Stack";
// import { useRouter } from "next/router";

// import FacebookShareButton from "react-share/lib/FacebookShareButton";
// import TwitterShareButton from "react-share/lib/TwitterShareButton";
// import LinkedinShareButton from "react-share/lib/LinkedinShareButton";
// import TelegramShareButton from "react-share/lib/TelegramShareButton";

// import FacebookIcon from "react-share/lib/FacebookIcon";
// import TwitterIcon from "react-share/lib/TwitterIcon";
// import LinkedinIcon from "react-share/lib/LinkedinIcon";
// import TelegramIcon from "react-share/lib/TelegramIcon";

const SocialShare = ({ skill }) => {
	const router = useRouter();
	return (
		<Stack direction='row' spacing={2}>
			{/* <FacebookShareButton
				url={`${process.env.NEXT_PUBLIC_URL}${router.asPath}/view/${skill.skill}`}
				quote={`${skill.skill}`}
				hashtag={`#${skill.skill}`}
				description={`$skill.profile}`}>
				<FacebookIcon size={32} round />
			</FacebookShareButton>

			<TwitterShareButton
				title={`#${skill.skill}, Omar Gutierrez`}
				url={`${process.env.NEXT_PUBLIC_URL}${router.asPath}/view/${skill.skill}`}
				hashtags={[`${skill.profile.substring(0, 190)}...`]}>
				<TwitterIcon size={32} round />
			</TwitterShareButton>
			<LinkedinShareButton
				title={`#${skill.skill}, Omar Gutierrez`}
				url={`${process.env.NEXT_PUBLIC_URL}${router.asPath}/view/${skill.skill}`}
				description={`$skill.profile}`}>
				<LinkedinIcon size={32} round />
			</LinkedinShareButton>
			<TelegramShareButton
				title={`#${skill.skill}, Omar Gutierrez`}
				url={`${process.env.NEXT_PUBLIC_URL}${router.asPath}/view/${skill.skill}`}
				description={`$skill.profile}`}>
				<TelegramIcon size={32} round />
			</TelegramShareButton> */}
			<p>social</p>
		</Stack>
	);
};

export default SocialShare;