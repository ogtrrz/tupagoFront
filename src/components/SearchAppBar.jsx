"use client";

import * as React from "react";
import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import { signOut, useSession } from "next-auth/react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Button,
  Stack,
  Dialog,
  DialogTitle,
  DialogActions,
  useMediaQuery,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useRouter } from "next/navigation";
import { useTheme } from "@mui/material/styles";

// Styled Components for Search Bar
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": { backgroundColor: alpha(theme.palette.common.white, 0.25) },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: { marginLeft: theme.spacing(1), width: "auto" },
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
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": { width: "20ch" },
    },
  },
}));

export default function SearchAppBar() {
  const { data: session, status } = useSession(); // ✅ Get session data
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // ✅ Detect if screen width < 600px

  // 🔹 Handle Search Submission
  const handleSearch = async () => {
    if (search.length < 3) return;
    const encodedURL = encodeURIComponent(search);
    setSearch("");
    router.push(`/search?query=${encodedURL}`);
  };

  // 🔹 Handle Navigation
  const navigateTo = (path) => {
    router.prefetch(path); // ✅ Prefetch route
    router.push(path);
    setOpen(false);
  };

  // 🔹 Handle Menu Dialog Open/Close
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          {/* ✅ Hide Menu Button if not logged in */}
          {session && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              sx={{ mr: 2 }}
              onClick={handleClickOpen}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* ✅ Display Username - Hide "Bienvenido"/"Hola" if screen width < 600px */}
          {!isMobile && (
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              {status === "loading"
                ? "Cargando..."
                : session?.user?.username
                ? `Hola, ${session.user.username}`
                : "Bienvenido"}
            </Typography>
          )}
          {isMobile && session?.user?.username && (
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              {session.user.username}
            </Typography>
          )}

          {/* ✅ Login/Logout Buttons with Icons - Hide "Cerrar Sesión" on small screens */}
          {!isMobile ? (
            session ? (
              <Button
                color="inherit"
                onClick={() => signOut()}
                startIcon={<LogoutIcon />}
              >
                Cerrar Sesión
              </Button>
            ) : (
              <Button color="inherit" href="/login" startIcon={<LoginIcon />}>
                Iniciar Sesión
              </Button>
            )
          ) : (
            !session && (
              <IconButton color="inherit" href="/login">
                <LoginIcon />
              </IconButton>
            )
          )}

          {/* Search Bar */}
          <Stack direction="row" alignItems="center" gap={1}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Buscar..."
                inputProps={{ "aria-label": "search" }}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyUp={(e) => e.key === "Enter" && handleSearch()}
              />
            </Search>
            <Button
              variant="text"
              sx={{ color: "white" }}
              onClick={handleSearch}
            >
              Buscar
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* 🔹 Authentication Dialog */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
        <DialogTitle sx={{ backgroundColor: "primary.main", color: "white" }}>
          {session ? "Menú de Usuario" : "Bienvenido"}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{ position: "absolute", right: 8, top: 8, color: "white" }}
        >
          <CloseIcon />
        </IconButton>
        <DialogActions
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            px: 3,
            pb: 3,
          }}
        >
          {/* Show buttons only when logged in */}
          {session && (
            <>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                startIcon={<AccountBalanceWalletIcon />}
                sx={{ justifyContent: "flex-start" }}
                onMouseEnter={() => router.prefetch("/mensajes")} // ✅ Prefetch on hover
                onClick={() => navigateTo("/mensajes")}
              >
                Ver Pagos
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                fullWidth
                startIcon={<QrCode2Icon />}
                sx={{ justifyContent: "flex-start" }}
                onMouseEnter={() => router.prefetch("/form/msjPagoQR")} // ✅ Prefetch on hover
                onClick={() => navigateTo("/form/msjPagoQR")}
              >
                Crear Pago QR
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                fullWidth
                startIcon={<AccountCircleIcon />}
                sx={{ justifyContent: "flex-start" }}
                onMouseEnter={() => router.prefetch("/clientes")} // ✅ Prefetch on hover
                onClick={() => navigateTo("/clientes")}
              >
                Mis Datos
              </Button>
            </>
          )}
          {/* ✅ Logout Button with Icon */}
          {session && (
            <Button
              variant="outlined"
              color="error"
              fullWidth
              startIcon={<LogoutIcon />}
              sx={{ justifyContent: "flex-start" }}
              onClick={() => signOut()}
            >
              Cerrar Sesión
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </Box>
  );
}
