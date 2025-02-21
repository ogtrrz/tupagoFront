"use client";

import React from "react";
import MyHeaderPrincipal from "@/components/MyHeaderPrincipal";
import MediaCard from "@/components/MediaCard";
import { data } from "@/lib/data";

import { Box, Container, Grid } from "@mui/material";

export default function HomePage() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}
