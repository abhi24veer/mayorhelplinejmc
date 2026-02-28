// src/components/Footer.tsx
import React from "react";
import { Box, Container, Divider, Stack, Typography, Link as MuiLink } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <Box component="footer" sx={{ mt: "auto", bgcolor: "background.paper", borderTop: (t) => `1px solid ${t.palette.divider}` }}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          sx={{ alignItems: { md: "center" }, justifyContent: "space-between" }}
        >
          <Box>
            <Typography sx={{ fontWeight: 950 }}>Mayor Helpline • Showcase</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, maxWidth: 640 }}>
              Informational website for the Android app project (citizen grievance + officer/admin workflow).
              Policy links below are for Google Play compliance.
            </Typography>
          </Box>

          <Stack direction="row" spacing={2} sx={{ flexWrap: "wrap" }}>
            <MuiLink component={RouterLink} to="/privacy" underline="hover" sx={{ fontWeight: 800 }}>
              Privacy
            </MuiLink>
            <MuiLink component={RouterLink} to="/terms" underline="hover" sx={{ fontWeight: 800 }}>
              Terms
            </MuiLink>
            <MuiLink component={RouterLink} to="/data-deletion" underline="hover" sx={{ fontWeight: 800 }}>
              Data Deletion
            </MuiLink>
            <MuiLink component={RouterLink} to="/support" underline="hover" sx={{ fontWeight: 800 }}>
              Support
            </MuiLink>
            <MuiLink
              href="https://play.google.com/store" // TODO
              target="_blank"
              rel="noreferrer"
              underline="hover"
              sx={{ fontWeight: 800 }}
            >
              Google Play
            </MuiLink>
          </Stack>
        </Stack>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary">
          © {year} Mayor Helpline (Project Showcase)
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;