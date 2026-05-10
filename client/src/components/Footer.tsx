import React from "react";
import { Box, Container, Divider, Stack, Typography, Link as MuiLink } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const supportEmail = "majorhelplinejmc24@gmail.com";

  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        bgcolor: "background.paper",
        borderTop: (t) => `1px solid ${t.palette.divider}`,
        overflowX: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 3, md: 4 }, px: { xs: 2, sm: 3 } }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 2.5, md: 3 }}
          sx={{
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            width: "100%",
            minWidth: 0,
          }}
        >
          <Box sx={{ minWidth: 0, maxWidth: { xs: "100%", md: 640 } }}>
            <Typography
              sx={{
                fontWeight: 950,
                wordBreak: "break-word",
              }}
            >
              Mayor Helpline • Showcase
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                mt: 0.5,
                maxWidth: 640,
                lineHeight: 1.6,
              }}
            >
              Informational website for the Android app project, including citizen grievance,
              officer workflow, admin monitoring, support, privacy, terms, and data deletion pages.
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                mt: 1,
                wordBreak: "break-word",
              }}
            >
              Contact:{" "}
              <MuiLink href={`mailto:${supportEmail}`} underline="hover">
                {supportEmail}
              </MuiLink>
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: { xs: "flex-start", md: "flex-end" },
              columnGap: 2,
              rowGap: 1,
              maxWidth: { xs: "100%", md: 430 },
              minWidth: 0,
            }}
          >
            <MuiLink component={RouterLink} to="/privacy" underline="hover" sx={{ fontWeight: 800 }}>
              Privacy
            </MuiLink>

            <MuiLink component={RouterLink} to="/terms" underline="hover" sx={{ fontWeight: 800 }}>
              Terms
            </MuiLink>

            <MuiLink
              component={RouterLink}
              to="/data-deletion"
              underline="hover"
              sx={{ fontWeight: 800 }}
            >
              Data Deletion
            </MuiLink>

            <MuiLink component={RouterLink} to="/support" underline="hover" sx={{ fontWeight: 800 }}>
              Support
            </MuiLink>

            <MuiLink
              href="https://play.google.com/store"
              target="_blank"
              rel="noreferrer"
              underline="hover"
              sx={{ fontWeight: 800 }}
            >
              Google Play
            </MuiLink>
          </Box>
        </Stack>

        <Divider sx={{ my: { xs: 2.5, md: 3 } }} />

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            lineHeight: 1.6,
            wordBreak: "break-word",
          }}
        >
          © {year} Mayor Helpline JMC. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;