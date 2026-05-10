import React from "react";
import { Box, Container, Typography, Divider, List, ListItem, Link } from "@mui/material";

const DataDeletion: React.FC = () => {
  const supportEmail = "majorhelplinejmc24@gmail.com";

  return (
    <Container sx={{ py: { xs: 6, md: 8 }, maxWidth: "md" }}>
      <Typography variant="h3" fontWeight={900} gutterBottom>
        Data Deletion
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="body1" sx={{ mb: 2 }}>
        You can request deletion of your account and related personal data from Mayor Helpline JMC.
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
            Include your registered phone number or email address and your city/ward, if applicable,
            so we can verify your identity.
          </Typography>
        </ListItem>

        <ListItem>
          <Typography>
            We may contact you for additional verification before processing the deletion request.
          </Typography>
        </ListItem>
      </List>

      <Typography variant="h6" fontWeight={800} sx={{ mt: 3, mb: 1 }}>
        What we delete
      </Typography>

      <List dense>
        <ListItem>
          <Typography>Profile identifiers such as name, phone number, and email address.</Typography>
        </ListItem>

        <ListItem>
          <Typography>Authentication credentials, where applicable.</Typography>
        </ListItem>

        <ListItem>
          <Typography>Personal account data that is no longer required for service operation.</Typography>
        </ListItem>
      </List>

      <Typography variant="h6" fontWeight={800} sx={{ mt: 3, mb: 1 }}>
        What we may retain
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        Complaint records, action logs, remarks, status history, and supporting evidence may be
        retained where required for public-service operations, legal compliance, security,
        administrative review, or audit purposes. Where possible, retained records may be anonymized
        or separated from personal identifiers.
      </Typography>

      <Typography variant="h6" fontWeight={800} sx={{ mt: 3, mb: 1 }}>
        Processing time
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        We will review deletion requests within a reasonable period after successful verification.
        The time required may vary depending on the type of data, verification requirements, and
        operational or legal obligations.
      </Typography>

      <Box sx={{ mt: 3 }}>
        <Typography variant="caption" color="text.secondary">
          If the app later includes an in-app “Delete Account” option, this page should be updated
          to match the in-app deletion flow.
        </Typography>
      </Box>
    </Container>
  );
};

export default DataDeletion;