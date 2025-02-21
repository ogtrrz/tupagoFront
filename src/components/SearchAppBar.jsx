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
} from "@mui/material";
import { Menu as MenuIcon, Search as SearchIcon, Close as CloseIcon } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { checkAuth } from "@/app/actions/checkAuth"; // ✅ Import server action

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
  const [authenticated, setAuthenticated] = useState(null); // ✅ Prevent hydration mismatch

  // ✅ Fetch authentication status using Server Action
  useEffect(() => {
    async function fetchAuthStatus() {
      const auth = await checkAuth();
      setAuthenticated(auth.authenticated);
      setLoading(false);
    }
    fetchAuthStatus();
  }, []);

  // 🔹 Handle Search Submission
  const handleSearch = async () => {
    if (search.length < 3) return;
    const encodedURL = encodeURIComponent(search);
    setSearch("");
    router.push(`/search?query=${encodedURL}`);
  };

  // 🔹 Handle Menu Dialog Open/Close
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // 🔹 Redirect to Login or Register
  const handleAuthRedirect = (path) => {
    router.push(path);
    handleClose();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          {/* Menu Icon */}
          <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }} onClick={handleClickOpen}>
            <MenuIcon />
          </IconButton>

          {/* Title */}
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Welcome
          </Typography>

          {/* Search Bar */}
          <Stack direction="row" alignItems="center" gap={1}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyUp={(e) => e.key === "Enter" && handleSearch()}
              />
            </Search>
            <Button variant="text" sx={{ color: "white" }} onClick={handleSearch}>
              Search
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* 🔹 Authentication Dialog */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle sx={{ backgroundColor: "primary.main", color: "white" }}>
          {authenticated === null ? "Loading..." : authenticated ? "User Menu" : "Welcome! Please Log In"}
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
              <Typography variant="body1">You are logged in.</Typography>
              <Button variant="contained" color="secondary" sx={{ mt: 2 }} onClick={() => router.push("/dashboard")}>
                Go to Dashboard
              </Button>
            </>
          ) : (
            <>
              <Typography variant="body1">Log in or create an account to continue.</Typography>
              <Stack direction="row" justifyContent="center" spacing={2} sx={{ mt: 2 }}>
                <Button variant="contained" color="primary" onClick={() => handleAuthRedirect("/login")}>
                  Login
                </Button>
                <Button variant="outlined" color="primary" onClick={() => handleAuthRedirect("/register")}>
                  Register
                </Button>
              </Stack>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}
