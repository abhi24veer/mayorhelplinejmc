import React from "react";
import { Container, Typography, Divider, Stack, Button, Box, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const Support: React.FC = () => {
  const supportEmail = "support@yourdomain.com"; // TODO
  const phone = "+91-XXXXXXXXXX"; // TODO

  return (
    <Container sx={{ py: { xs: 6, md: 8 }, maxWidth: "md" }}>
      <Typography variant="h3" fontWeight={900} gutterBottom>
        Support
      </Typography>

      <Typography color="text.secondary">
        Contact the Mayor Helpline team for help with complaints, login, or app issues.
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Stack spacing={2} direction={{ xs: "column", sm: "row" }}>
        <Button
          variant="contained"
          startIcon={<EmailIcon />}
          href={`mailto:${supportEmail}`}
          sx={{ borderRadius: 3 }}
        >
          Email Support
        </Button>
        <Button
          variant="outlined"
          startIcon={<HelpOutlineIcon />}
          href="/privacy"
          sx={{ borderRadius: 3 }}
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
        <Typography variant="body1">Phone: {phone}</Typography>
      </Box>
    </Container>
  );
};

export default Support;