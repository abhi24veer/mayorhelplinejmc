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

const POLICY_LINKS = [
  { label: "Privacy", to: "/privacy" },
  { label: "Terms", to: "/terms" },
  { label: "Data Deletion", to: "/data-deletion" },
  { label: "Support", to: "/support" },
];

const Header: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const { pathname, hash } = useLocation();
  const scrolled = useScrollTrigger({ threshold: 8 });

  const isActive = (to: string) => pathname + hash === to || pathname === to;

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: scrolled ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.72)",
          color: "text.primary",
          backdropFilter: "blur(10px)",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 1.5, sm: 2, md: 3 } }}>
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: 60, sm: 68 },
              display: "flex",
              gap: { xs: 1, md: 2 },
              justifyContent: "space-between",
              overflow: "hidden",
            }}
          >
            {/* Brand */}
            <Box
              component={RouterLink}
              to="/"
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "inherit",
                minWidth: 0,
                flexShrink: 1,
                maxWidth: { xs: "58vw", sm: "46vw", md: 260 },
              }}
            >
              <Box sx={{ lineHeight: 1.05, minWidth: 0 }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 950,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    fontSize: { xs: "0.92rem", sm: "1rem" },
                  }}
                >
                  Mayor Helpline
                </Typography>

                <Typography
                  variant="caption"
                  sx={{
                    opacity: 0.75,
                    display: "block",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    fontSize: { xs: "0.68rem", sm: "0.75rem" },
                  }}
                >
                  Jabalpur Municipal Corporation • Showcase
                </Typography>
              </Box>
            </Box>

            {/* Desktop Nav */}
            <Stack
              direction="row"
              spacing={0.25}
              sx={{
                display: { xs: "none", lg: "flex" },
                alignItems: "center",
                flex: 1,
                justifyContent: "center",
                minWidth: 0,
              }}
            >
              {LINKS.map((l) => (
                <Button
                  key={l.to}
                  component={RouterLink}
                  to={l.to}
                  size="small"
                  sx={{
                    color: "text.primary",
                    fontWeight: isActive(l.to) ? 900 : 700,
                    opacity: isActive(l.to) ? 1 : 0.78,
                    borderRadius: 999,
                    px: 1.25,
                    whiteSpace: "nowrap",
                    "&:hover": { opacity: 1, bgcolor: "action.hover" },
                  }}
                >
                  {l.label}
                </Button>
              ))}
            </Stack>

            {/* Right actions */}
            <Stack
              direction="row"
              spacing={{ xs: 0.5, sm: 1 }}
              sx={{
                alignItems: "center",
                flexShrink: 0,
                minWidth: 0,
              }}
            >
              <Button
                component={RouterLink}
                to="/support"
                variant="text"
                size="small"
                sx={{
                  display: { xs: "none", md: "inline-flex" },
                  fontWeight: 900,
                  borderRadius: 999,
                  whiteSpace: "nowrap",
                }}
              >
                Support
              </Button>

              <Button
                component={RouterLink}
                to="/privacy"
                variant="outlined"
                size="small"
                sx={{
                  display: { xs: "none", md: "inline-flex" },
                  fontWeight: 900,
                  borderRadius: 999,
                  whiteSpace: "nowrap",
                }}
              >
                Privacy
              </Button>

              <Button
                component="a"
                href="https://play.google.com/store"
                target="_blank"
                rel="noreferrer"
                variant="contained"
                size="small"
                sx={{
                  display: { xs: "none", sm: "inline-flex" },
                  fontWeight: 950,
                  borderRadius: 999,
                  px: { sm: 1.5, md: 2 },
                  boxShadow: 0,
                  whiteSpace: "nowrap",
                }}
              >
                Google Play
              </Button>

              <IconButton
                onClick={() => setOpen(true)}
                sx={{ display: { xs: "inline-flex", lg: "none" }, flexShrink: 0 }}
                aria-label="Open menu"
              >
                <MenuIcon />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile / Tablet Drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            width: { xs: "84vw", sm: 360 },
            maxWidth: 380,
            p: 2,
          }}
        >
          <Typography sx={{ fontWeight: 950, mb: 1 }}>Navigate</Typography>

          <Stack spacing={0.5}>
            {LINKS.map((l) => (
              <Button
                key={l.to}
                component={RouterLink}
                to={l.to}
                onClick={() => setOpen(false)}
                sx={{
                  justifyContent: "flex-start",
                  borderRadius: 2,
                  fontWeight: 900,
                  textAlign: "left",
                }}
              >
                {l.label}
              </Button>
            ))}

            <Box sx={{ height: 8 }} />

            {POLICY_LINKS.map((l) => (
              <Button
                key={l.to}
                component={RouterLink}
                to={l.to}
                onClick={() => setOpen(false)}
                sx={{
                  justifyContent: "flex-start",
                  borderRadius: 2,
                  fontWeight: 900,
                  textAlign: "left",
                }}
              >
                {l.label}
              </Button>
            ))}

            <Button
              component="a"
              href="https://play.google.com/store"
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