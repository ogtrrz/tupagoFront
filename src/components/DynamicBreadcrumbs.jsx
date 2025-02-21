"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs, Typography, Stack } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";

export default function DynamicBreadcrumbs() {
  const pathname = usePathname();

  // Split pathname into parts
  const pathSegments = pathname.split("/").filter((segment) => segment);

  // ❗️ Remove known non-page segments (Adjust this based on your directory structure)
  const ignoredSegments = ["view", "form"]; // Add more if needed
  const filteredSegments = pathSegments.filter((segment) => !ignoredSegments.includes(segment));

  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
      sx={{ my: 2 }}
    >
      {/* Home Link */}
      <Stack direction="row" alignItems="center" gap={1}>
        <HomeIcon color="primary" />
        <Link href="/" passHref>
          <Typography variant="body1" color="primary" sx={{ cursor: "pointer" }}>
            Home
          </Typography>
        </Link>
      </Stack>

      {/* Dynamic Breadcrumbs */}
      {filteredSegments.map((segment, index) => {
        const url = `/${filteredSegments.slice(0, index + 1).join("/")}`;
        const isLast = index === filteredSegments.length - 1;

        return isLast ? (
          <Typography key={url} variant="body1" color="text.primary">
            {decodeURIComponent(segment)}
          </Typography>
        ) : (
          <Link key={url} href={url} passHref>
            <Typography variant="body1" color="primary" sx={{ cursor: "pointer" }}>
              {decodeURIComponent(segment)}
            </Typography>
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}
