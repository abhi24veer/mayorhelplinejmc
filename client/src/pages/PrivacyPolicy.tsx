import React from "react";
import { Box, Container, Typography, Divider, List, ListItem, Link } from "@mui/material";

const PrivacyPolicy: React.FC = () => {
  const lastUpdated = "2026-02-28";
  const supportEmail = "mayorhelplinejmc24@gmail.com";

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
        Mayor Helpline JMC is an independent platform designed to help citizens report and track
        local issues and service requests. This application is not an official government app but
        aims to facilitate communication between citizens and relevant authorities.
      </Typography>

      <Typography variant="h6" fontWeight={800} sx={{ mt: 3, mb: 1 }}>
        Information we collect
      </Typography>
      <List dense>
        <ListItem>
          <Typography>
            <b>Account data</b>: name, phone number/email, and user role (Citizen/Officer/Admin).
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            <b>Complaint data</b>: complaint text, category, location details you provide,
            timestamps, and status history.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            <b>Attachments</b>: photos or videos uploaded as supporting evidence.
          </Typography>
        </ListItem>
      </List>

      <Typography variant="h6" fontWeight={800} sx={{ mt: 3, mb: 1 }}>
        How we use information
      </Typography>
      <List dense>
        <ListItem>
          <Typography>
            To enable complaint submission, tracking, and resolution workflows.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            To verify users and prevent misuse of the platform.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            To notify users about updates or status changes.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            To improve app performance, stability, and user experience.
          </Typography>
        </ListItem>
      </List>

      <Typography variant="h6" fontWeight={800} sx={{ mt: 3, mb: 1 }}>
        Sharing of information
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Information may be shared with relevant authorities, service providers, or platform
        administrators solely for the purpose of resolving reported issues and maintaining app
        functionality. We do not sell personal data.
      </Typography>

      <Typography variant="h6" fontWeight={800} sx={{ mt: 3, mb: 1 }}>
        Data retention
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Data is retained only as long as necessary to provide services, maintain records, and comply
        with operational needs. Users may request deletion of their data where applicable.
      </Typography>

      <Typography variant="h6" fontWeight={800} sx={{ mt: 3, mb: 1 }}>
        Security
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        We implement reasonable security measures to protect your data, including encryption in
        transit and controlled access to stored information.
      </Typography>

      <Typography variant="h6" fontWeight={800} sx={{ mt: 3, mb: 1 }}>
        Your choices
      </Typography>
      <List dense>
        <ListItem>
          <Typography>
            <b>Access/Update:</b> You can update your account details within the app.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            <b>Delete:</b> You may request deletion of your account or data by contacting us.
          </Typography>
        </ListItem>
      </List>

      <Typography variant="h6" fontWeight={800} sx={{ mt: 3, mb: 1 }}>
        Age restriction
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        This application is intended for users aged 18 and above only. We do not knowingly collect
        or process data from individuals under the age of 18. If we become aware that such data has
        been collected, it will be deleted promptly.
      </Typography>

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
          This policy should reflect actual services, SDKs, and permissions used in the application.
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;
