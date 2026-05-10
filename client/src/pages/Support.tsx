import React from "react";
import { Container, Typography, Divider, Stack, Button, Box, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Link as RouterLink } from "react-router-dom";

const Support: React.FC = () => {
  const supportEmail = "majorhelplinejmc24@gmail.com";
  const phone = "+91 9702412097";

  return (
    <Container sx={{ py: { xs: 6, md: 8 }, maxWidth: "md" }}>
      <Typography variant="h3" fontWeight={900} gutterBottom>
        Support
      </Typography>

      <Typography color="text.secondary">
        Contact the Mayor Helpline JMC team for help with complaints, login, account access, data
        deletion, or app issues.
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Stack spacing={2} direction={{ xs: "column", sm: "row" }}>
        <Button
          variant="contained"
          startIcon={<EmailIcon />}
          href={`mailto:${supportEmail}`}
          sx={{ borderRadius: 3, fontWeight: 900 }}
        >
          Email Support
        </Button>

        <Button
          component={RouterLink}
          to="/privacy"
          variant="outlined"
          startIcon={<HelpOutlineIcon />}
          sx={{ borderRadius: 3, fontWeight: 900 }}
        >
          Privacy Policy
        </Button>
      </Stack>

      <Box sx={{ mt: 4 }}>
        <Typography variant="body1" sx={{ mb: 1 }}>
          Email:{" "}
          <Link href={`mailto:${supportEmail}`} underline="hover">
            {supportEmail}
          </Link>
        </Typography>

        <Typography variant="body1" sx={{ mb: 1 }}>
          Phone: {phone}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          For data deletion requests, email us with the subject “Data Deletion Request”.
        </Typography>
      </Box>
    </Container>
  );
};

export default Support;