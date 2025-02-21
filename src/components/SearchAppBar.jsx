"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
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

  // ✅ Handle Logout
  const handleLogout = async () => {
    await logout();
    await fetchAuthStatus(); // ✅ Update state after logout
    router.refresh();
    setOpen(false);
  };

  // ✅ Handle Login Success (Trigger State Update)
  const handleLoginSuccess = async () => {
    await fetchAuthStatus(); // ✅ Update state immediately after login
    router.refresh(); // ✅ Force a refresh to apply changes
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          {/* Menu Icon */}
          <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>

          {/* ✅ Display Username */}
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Hola {username}
          </Typography>
        </Toolbar>
      </AppBar>

      {/* ✅ Add Login Success Call */}
      {authenticated === false && (
        <Button
          variant="contained"
          color="primary"
          onClick={async () => {
            router.push("/login");
            await handleLoginSuccess();
          }}
        >
          Iniciar Sesión
        </Button>
      )}
    </Box>
  );
}
