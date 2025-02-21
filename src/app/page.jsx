"use client";

import React from "react";
import SearchAppBar from "@/components/SearchAppBar";
import MyFooter from "@/components/MyFooter";
import MyHeaderPrincipal from "@/components/MyHeaderPrincipal";
import MediaCard from "@/components/MediaCard";
import { data } from "@/lib/data";

import {
  Box,
  Breadcrumbs,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";

export default function HomePage() {
  return (
    <>
      {/* Top Navigation */}
      <SearchAppBar />

      {/* Breadcrumb Navigation */}
      <Box
        sx={{
          mt: { xs: 8, md: 10 },
          px: 2,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Stack direction="row" alignItems="center" gap={1}>
            <HomeIcon color="primary" />
            <Typography variant="body1" color="text.primary">
              Home
            </Typography>
          </Stack>
        </Breadcrumbs>
      </Box>

      {/* Hero / Header Section */}
      <Box sx={{ mt: 4 }}>
        <MyHeaderPrincipal
          imageURL="/tupago.webp"
          label="TuPago.click, pagos fáciles y gratuitos, remotos o presentes, ES TODO"
          altText="TuPago Service Preview"
        />
      </Box>

      {/* Main Content Section */}
      <Container maxWidth="lg" sx={{ mt: { xs: 4, md: 8 } }}>
        <Grid container spacing={3}>
          {data.skills.map((skill) => (
            <Grid item xs={12} sm={6} md={4} key={skill.skill}>
              <MediaCard skill={skill} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <MyFooter />
    </>
  );
}
