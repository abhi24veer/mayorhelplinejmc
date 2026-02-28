import React from "react";
import { Box, Container, Typography, Divider, List, ListItem, Link } from "@mui/material";

const DataDeletion: React.FC = () => {
  const supportEmail = "support@yourdomain.com"; // TODO

  return (
    <Container sx={{ py: { xs: 6, md: 8 }, maxWidth: "md" }}>
      <Typography variant="h3" fontWeight={900} gutterBottom>
        Data Deletion
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="body1" sx={{ mb: 2 }}>
        You can request deletion of your account and related personal data from Mayor Helpline.
      </Typography>

      <Typography variant="h6" fontWeight={800} sx={{ mt: 3, mb: 1 }}>
        How to request deletion
      </Typography>
      <List dense>
        <ListItem>
          <Typography>
            Email us at{" "}
            <Link href={`mailto:${supportEmail}`} underline="hover">
              {supportEmail}
            </Link>{" "}
            with subject <b>“Data Deletion Request”</b>.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            Include your registered phone/email and your city/ward (if applicable) to verify identity.
          </Typography>
        </ListItem>
      </List>

      <Typography variant="h6" fontWeight={800} sx={{ mt: 3, mb: 1 }}>
        What we delete
      </Typography>
      <List dense>
        <ListItem><Typography>Profile identifiers (name, phone/email) after verification.</Typography></ListItem>
        <ListItem><Typography>Authentication credentials (as applicable).</Typography></ListItem>
      </List>

      <Typography variant="h6" fontWeight={800} sx={{ mt: 3, mb: 1 }}>
        What we may retain
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Complaint records may be retained for legal/audit requirements, but will be anonymized where possible.
      </Typography>

      <Box sx={{ mt: 3 }}>
        <Typography variant="caption" color="text.secondary">
          If you have an in-app “Delete account” button later, update this page to match the in-app flow.
        </Typography>
      </Box>
    </Container>
  );
};

export default DataDeletion;