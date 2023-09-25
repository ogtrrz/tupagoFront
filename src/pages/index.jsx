import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { spacing } from "@mui/system";

import NextLink from "next/link";
import Head from "next/head";
// import Image from "next/legacy/image";
import { useRouter } from "next/router";
import Typography from "@mui/material/Typography";
import MyAppBar from "@/components/MyAppBar";
import MediaCard from "@/components/MediaCard";
import MyHeaderPrincipal from "@/components/MyHeaderPrincipal";
import MyFooter from "@/components/MyFooter";
import styled from "@mui/system/styled";
import { data } from "@/lib/data";
import HomeIcon from "@mui/icons-material/Home";
import { profile } from "@/lib/profile";

// const Item = styled("div")(({ theme }) => ({
// 	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
// 	border: "1px solid",
// 	borderColor: theme.palette.mode === "dark" ? "#444d58" : "#ced7e0",
// 	padding: theme.spacing(1),
// 	borderRadius: "4px",
// 	textAlign: "center",
// }));

const sk = data;
const PROFILE = profile;

function Home({ skills }) {
  const imageURL = "/principal.webp";
  const router = useRouter();
  // console.log(JSON.stringify(skills));
  return (
    <React.Fragment>
      <Head>
        <title>{`Omar Gutierrez | Apache Kafka, GraphQL, Microservices, SpringBoot, Redis, Reactjs, Nextjs, Java 2...17 & Javascript.`}</title>
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL}${router.asPath}`}
        />
        <meta
          name="description"
          content={`Omar Gutierrez, ${PROFILE.substring(0, 159)}`}
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`Omar Gutierrez, ${PROFILE.substring(0, 48)}`}
        />
        <meta
          property="og:description"
          content={`Omar Gutierrez, ${PROFILE.substring(0, 159)}`}
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_URL}/principal.webp`}
        />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_URL}/principal.webp`}
        />

        <meta
          name="twitter:card"
          content={`${process.env.NEXT_PUBLIC_URL}/principal.webp`}
        />
        <meta name="twitter:title" content="Omar Gutierrez, Profile" />
        <meta
          name="twitter:description"
          content={`Omar Gutierrez, ${PROFILE.substring(0, 159)}`}
        />
        <meta
          name="twitter:image"
          content={`${process.env.NEXT_PUBLIC_URL}/principal.webp`}
        />
        <meta
          name="twitter:url"
          content={`${process.env.NEXT_PUBLIC_URL}${router.asPath}`}
        />
      </Head>
      <MyAppBar />
      <Box sx={{ height: 75 }} />

      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" color="primary" />}
        aria-label="Home Link"
      >
        <Stack direction="row" alignItems="center" gap={1} sx={{ ml: 3 }}>
          <HomeIcon />
          <Typography variant="body1">Home</Typography>
        </Stack>
      </Breadcrumbs>
      <Box sx={{ height: 10 }} />
      <MyHeaderPrincipal />
      <Box sx={{ mr: 3, pl: 3 }}>
        <Grid
          container
          alignItems="stretch"
          spacing={{ xs: 2, sm: 3, md: 5 }}
          columns={{ xs: 3, sm: 6, md: 9 }}
        >
          {skills.skills.map((skill) => {
            return (
              // <Grid xs={4} key={skill.skill}>
              <Grid
                xs={3}
                item={true}
                style={{ display: "flex" }}
                key={skill.skill}
              >
                <MediaCard skill={skill} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <MyFooter />
    </React.Fragment>
  );
}

export default Home;

export async function getServerSideProps(context) {
  const { req, res } = context;
  // bfcache.
  // res.setHeader(
  // 	"Cache-Control",
  // 	"public, s-maxage=2880, stale-while-revalidate=3600"
  // );
  res.setHeader(
    "Cache-Control",
    "public, max-age=604800, stale-while-revalidate=86400"
  );
  let data = sk;
  // console.log("data ssr", data);
  // const { params } = context;
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { skills: data },
    // revalidate: 86400,
    // notFound: true, //regresa el 404
    // redirect: { //redirecciona a la pagina
    // 	destination: '/no-data'
    // }
  };
}

// export async function getStaticPaths() {
// 	const data = sk;

// 	const ids = data.skills.map((item) => item.skills + "");
// 	const pathsWithParams = ids.map((id) => ({ params: { Skill: id + "" } }));

// 	return {
// 		paths: pathsWithParams,
// 		fallback: "blocking",
// 	};
// }
