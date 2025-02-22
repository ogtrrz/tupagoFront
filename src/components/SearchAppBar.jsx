"use client";

import * as React from "react";
import { useState, useEffect } from "react";
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
  DialogContent,
  CircularProgress,
  DialogActions,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { getUsername, logout } from "@/app/actions/checkAuth"; // ✅ Import logout function

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
  const { data: session, status } = useSession(); // ✅ Now includes `status`
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState("Invitado");

  // ✅ Fetch authentication status and username
  async function fetchAuthStatus() {
    const auth = await getUsername();
    setLoading(false);

    if (auth.authenticated && auth.username) {
      setAuthenticated(true);
      setUsername(auth.username);
    } else {
      setAuthenticated(false);
      setUsername("Invitado");
    }
  }

  useEffect(() => {
    fetchAuthStatus();
  }, []); // ✅ Runs only on mount

  // 🔹 Handle Search Submission
  const handleSearch = async () => {
    if (search.length < 3) return;
    const encodedURL = encodeURIComponent(search);
    setSearch("");
    router.push(`/search?query=${encodedURL}`);
  };

  // 🔹 Handle Logout
  const handleLogout = async () => {
    await logout(); // ✅ Call logout action
    router.refresh(); // ✅ Reload page to update state
    setOpen(false);
  };

  // 🔹 Handle Menu Dialog Open/Close
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          {/* Menu Icon */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
            onClick={handleClickOpen}
          >
            <MenuIcon />
          </IconButton>

          {/* ✅ Display Username */}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {status === "loading"
              ? "Cargando..."
              : session?.user?.username
              ? `Hola, ${session.user.username}`
              : "Bienvenido"}
          </Typography>

          {session ? (
            <Button color="inherit" onClick={() => signOut()}>
              Cerrar Sesión
            </Button>
          ) : (
            <Button color="inherit" href="/login">
              Iniciar Sesión
            </Button>
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
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle sx={{ backgroundColor: "primary.main", color: "white" }}>
          {loading ? "Cargando..." : authenticated ? "User Menu" : "Bienvenido"}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{ position: "absolute", right: 8, top: 8, color: "white" }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent sx={{ textAlign: "center", p: 3 }}>
          {loading ? (
            <CircularProgress />
          ) : authenticated ? (
            <>
              <Typography variant="body1">
                En sesión como {username}.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                sx={{ mt: 2 }}
                onClick={() => router.push("/dashboard")}
              >
                Ir al Dashboard
              </Button>
            </>
          ) : (
            <>
              <Typography variant="body1">
                Inicia sesión o crea una cuenta para continuar.
              </Typography>
              <Stack
                direction="row"
                justifyContent="center"
                spacing={2}
                sx={{ mt: 2 }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => router.push("/login")}
                >
                  Login
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => router.push("/register")}
                >
                  Registrarse
                </Button>
              </Stack>
            </>
          )}
        </DialogContent>
        {authenticated && (
          <DialogActions>
            {/* ✅ Logout Button */}
            <Button onClick={handleLogout} variant="outlined" color="error">
              Cerrar Sesión
            </Button>
          </DialogActions>
        )}
      </Dialog>
    </Box>
  );
}
