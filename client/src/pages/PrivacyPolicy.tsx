import React from "react";
import { Box, Container, Typography, Divider, List, ListItem, Link } from "@mui/material";

const PrivacyPolicy: React.FC = () => {
  const lastUpdated = "2026-02-28";
  const supportEmail = "support@yourdomain.com"; // TODO

  return (
    <Container sx={{ py: { xs: 6, md: 8 }, maxWidth: "md" }}>
      <Typography variant="h3" fontWeight={900} gutterBottom>
        Privacy Policy
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 2 }}>
        Last updated: {lastUpdated}
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="body1" sx={{ mb: 2 }}>
        Mayor Helpline is operated for municipal grievance and service requests. This Privacy Policy
        explains what information we collect, how we use it, and your choices.
      </Typography>

      <Typography variant="h6" fontWeight={800} sx={{ mt: 3, mb: 1 }}>
        Information we collect
      </Typography>
      <List dense>
        <ListItem>
          <Typography>
            <b>Account data</b> (if you create an account): name, phone number/email, role (Citizen/Officer/Admin).
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            <b>Complaint data</b>: complaint text, category, location details you provide, timestamps, status history.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            <b>Attachments</b> (optional): photos/videos you upload for complaint evidence.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            <b>Device/usage data</b> (if analytics/crash reporting is enabled): app performance logs, crash logs, device identifiers.
          </Typography>
        </ListItem>
      </List>

      <Typography variant="h6" fontWeight={800} sx={{ mt: 3, mb: 1 }}>
        How we use information
      </Typography>
      <List dense>
        <ListItem><Typography>Provide and improve complaint registration, tracking, and resolution.</Typography></ListItem>
        <ListItem><Typography>Verify users and prevent abuse/fraud.</Typography></ListItem>
        <ListItem><Typography>Communicate updates about complaint status.</Typography></ListItem>
        <ListItem><Typography>Debug issues and monitor stability (crashes/ANR).</Typography></ListItem>
      </List>

      <Typography variant="h6" fontWeight={800} sx={{ mt: 3, mb: 1 }}>
        Sharing
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        We share data only with authorized municipal departments/officers for resolving complaints, and
        with service providers required to operate the app (e.g., hosting, storage, analytics) as applicable.
      </Typography>

      <Typography variant="h6" fontWeight={800} sx={{ mt: 3, mb: 1 }}>
        Data retention
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Complaint records are retained as required for municipal service operations, audit, and reporting.
        You can request deletion where applicable (see “Your choices”).
      </Typography>

      <Typography variant="h6" fontWeight={800} sx={{ mt: 3, mb: 1 }}>
        Security
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        We use reasonable technical and organizational measures to protect information, including encryption in transit
        where supported by our infrastructure.
      </Typography>

      <Typography variant="h6" fontWeight={800} sx={{ mt: 3, mb: 1 }}>
        Your choices
      </Typography>
      <List dense>
        <ListItem>
          <Typography>
            <b>Access/Update:</b> You may update your profile information where available in the app.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            <b>Delete:</b> You may request account deletion and/or data deletion via the Data Deletion page.
          </Typography>
        </ListItem>
      </List>

      <Typography variant="h6" fontWeight={800} sx={{ mt: 3, mb: 1 }}>
        Contact
      </Typography>
      <Typography variant="body1">
        Email:{" "}
        <Link href={`mailto:${supportEmail}`} underline="hover">
          {supportEmail}
        </Link>
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Typography variant="caption" color="text.secondary">
          Note: Update this policy so it exactly matches your actual SDKs (Firebase, analytics, ads) and permissions used.
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;