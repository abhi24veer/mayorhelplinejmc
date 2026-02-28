// src/components/Header.tsx  (no icons anywhere in header)
import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink, useLocation } from "react-router-dom";

const LINKS = [
  { label: "Overview", to: "/#overview" },
  { label: "Modules", to: "/#modules" },
  { label: "Workflow", to: "/#workflow" },
  { label: "Screens", to: "/#screens" },
  { label: "FAQ", to: "/#faq" },
];

const Header: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const { pathname, hash } = useLocation();
  const scrolled = useScrollTrigger({ threshold: 8 });

  const isActive = (to: string) => pathname + hash === to;

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: scrolled ? "rgba(255,255,255,0.88)" : "rgba(255,255,255,0.65)",
          color: "text.primary",
          backdropFilter: "blur(10px)",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: 68, display: "flex", gap: 2 }}>
            {/* Brand */}
            <Box
              component={RouterLink}
              to="/"
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "inherit",
                minWidth: 260,
              }}
            >
              <Box sx={{ lineHeight: 1.05 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 950 }}>
                  Mayor Helpline
                </Typography>
                <Typography variant="caption" sx={{ opacity: 0.75 }}>
                  Jabalpur Municipal Corporation • Showcase
                </Typography>
              </Box>
            </Box>

            {/* Desktop Nav */}
            <Stack
              direction="row"
              spacing={0.5}
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                flex: 1,
                justifyContent: "center",
              }}
            >
              {LINKS.map((l) => (
                <Button
                  key={l.to}
                  component={RouterLink}
                  to={l.to}
                  sx={{
                    color: "text.primary",
                    fontWeight: isActive(l.to) ? 900 : 700,
                    opacity: isActive(l.to) ? 1 : 0.78,
                    borderRadius: 999,
                    px: 1.6,
                    "&:hover": { opacity: 1, bgcolor: "action.hover" },
                  }}
                >
                  {l.label}
                </Button>
              ))}
            </Stack>

            {/* Right actions */}
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <Button
                component={RouterLink}
                to="/support"
                variant="text"
                sx={{ display: { xs: "none", sm: "inline-flex" }, fontWeight: 900, borderRadius: 999 }}
              >
                Support
              </Button>
              <Button
                component={RouterLink}
                to="/privacy"
                variant="outlined"
                sx={{ display: { xs: "none", sm: "inline-flex" }, fontWeight: 900, borderRadius: 999 }}
              >
                Privacy
              </Button>

              <Button
                component="a"
                href="https://play.google.com/store" // TODO: replace with real listing
                target="_blank"
                rel="noreferrer"
                variant="contained"
                sx={{
                  fontWeight: 950,
                  borderRadius: 999,
                  px: 2,
                  boxShadow: 0,
                }}
              >
                Google Play
              </Button>

              <IconButton
                onClick={() => setOpen(true)}
                sx={{ display: { xs: "inline-flex", md: "none" } }}
                aria-label="Open menu"
              >
                <MenuIcon />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 320, p: 2 }}>
          <Typography sx={{ fontWeight: 950, mb: 1 }}>Navigate</Typography>
          <Stack spacing={0.5}>
            {LINKS.map((l) => (
              <Button
                key={l.to}
                component={RouterLink}
                to={l.to}
                onClick={() => setOpen(false)}
                sx={{ justifyContent: "flex-start", borderRadius: 2, fontWeight: 900 }}
              >
                {l.label}
              </Button>
            ))}

            <Box sx={{ height: 8 }} />

            <Button
              component={RouterLink}
              to="/support"
              onClick={() => setOpen(false)}
              sx={{ justifyContent: "flex-start", borderRadius: 2, fontWeight: 900 }}
            >
              Support
            </Button>

            <Button
              component={RouterLink}
              to="/privacy"
              onClick={() => setOpen(false)}
              sx={{ justifyContent: "flex-start", borderRadius: 2, fontWeight: 900 }}
            >
              Privacy
            </Button>

            <Button
              component="a"
              href="https://play.google.com/store" // TODO
              target="_blank"
              rel="noreferrer"
              variant="contained"
              sx={{ mt: 1, fontWeight: 950, borderRadius: 2 }}
              onClick={() => setOpen(false)}
            >
              Google Play
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;