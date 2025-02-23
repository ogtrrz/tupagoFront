import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Skeleton from "@mui/material/Skeleton";

export default function MyHeaderPrincipal({ imageURL, label }) {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "60vh",
        display: "flex",
        alignItems: "flex-end",
        overflow: "hidden", // ✅ Prevents unwanted scrolling
      }}
    >
      {/* ✅ Show Skeleton while image is loading */}
      {!imageLoaded && (
        <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          sx={{ position: "absolute", top: 0, left: 0 }}
          animation="wave"
        />
      )}

      <Image
        src={imageURL || "/tupago.webp"}
        alt="Header Background"
        fill
        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 80vw, 100vw" // ✅ Define responsive sizes
        style={{
          objectFit: "cover",
          objectPosition: "top",
          zIndex: -1,
          display: imageLoaded ? "block" : "none", // ✅ Hide image until loaded
        }}
        priority
        onLoad={() => setImageLoaded(true)} // ✅ Hide Skeleton when image loads
      />

      <Box
        sx={{
          width: "100%",
          p: 2,
          boxShadow: 3,
          bgcolor: "rgba(0, 0, 0, 0.8)",
          position: "relative",
        }}
      >
        <Typography variant="h4" align="left" color="white">
          {label ||
            "TuPago.click, pagos fáciles y gratuitos, remotos o presentes, ES TODO"}
        </Typography>
      </Box>
    </Box>
  );
}
