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
          altText="TuPago Servicios"
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


/*TODO
- Implement Custom Error Pages: Create custom 404 and 500 error pages to enhance user experie*nce during unexpected errors.
- Utilize the Metadata API: Define metadata directly in your page or layout files to improve SEO and social sharing. 
DEV.TO https://dev.to/joodi/maximizing-seo-with-meta-data-in-nextjs-15-a-comprehensive-guide-4pa7?utm_source=chatgpt.com
- Generate Dynamic Metadata: For dynamic pages, use the generateMetadata function to provide unique titles and descriptions based on content.
- Set Up Security Headers: Configure HTTP security headers to prevent common vulnerabilities.
*/