import React from "react";
import { Container, Typography, Divider, List, ListItem, Link } from "@mui/material";

const Terms: React.FC = () => {
  const lastUpdated = "2026-02-28";
  const supportEmail = "majorhelplinejmc24@gmail.com";

  return (
    <Container sx={{ py: { xs: 6, md: 8 }, maxWidth: "md" }}>
      <Typography variant="h3" fontWeight={900} gutterBottom>
        Terms of Service
      </Typography>

      <Typography color="text.secondary">Last updated: {lastUpdated}</Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="body1" sx={{ mb: 2 }}>
        Mayor Helpline JMC helps citizens submit municipal complaints and track their resolution. By
        using the service, you agree to these terms.
      </Typography>

      <Typography variant="h6" fontWeight={800} sx={{ mt: 3, mb: 1 }}>
        Use of the service
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        The application is intended to support complaint submission, tracking, officer review,
        administrative monitoring, and grievance-related communication. Users must provide accurate
        information when submitting complaints or account details.
      </Typography>

      <Typography variant="h6" fontWeight={800} sx={{ mt: 3, mb: 1 }}>
        Acceptable use
      </Typography>

      <List dense>
        <ListItem>
          <Typography>No false complaints, harassment, hate speech, or illegal content.</Typography>
        </ListItem>

        <ListItem>
          <Typography>
            Do not upload sensitive personal content unless necessary for the complaint.
          </Typography>
        </ListItem>

        <ListItem>
          <Typography>Do not attempt to access other users’ data or restricted system areas.</Typography>
        </ListItem>

        <ListItem>
          <Typography>
            Do not misuse the platform, interfere with service operation, or submit misleading
            information.
          </Typography>
        </ListItem>
      </List>

      <Typography variant="h6" fontWeight={800} sx={{ mt: 3, mb: 1 }}>
        Complaint content
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        Users are responsible for the accuracy of complaint descriptions, uploaded evidence, and
        location details. Complaint information may be reviewed by authorized personnel for
        verification, assignment, escalation, transfer, and resolution.
      </Typography>

      <Typography variant="h6" fontWeight={800} sx={{ mt: 3, mb: 1 }}>
        Service limitations
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        Resolution timelines depend on department workload, field conditions, verification
        requirements, available resources, and administrative processes. We do not guarantee specific
        resolution times or outcomes.
      </Typography>

      <Typography variant="h6" fontWeight={800} sx={{ mt: 3, mb: 1 }}>
        Account suspension
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        We may suspend or restrict accounts that violate these terms, misuse the system, submit
        abusive content, attempt unauthorized access, or interfere with platform operations.
      </Typography>

      <Typography variant="h6" fontWeight={800} sx={{ mt: 3, mb: 1 }}>
        Privacy
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        Use of the service is also governed by our Privacy Policy, which explains how information is
        collected, used, shared, retained, and deleted.
      </Typography>

      <Typography variant="h6" fontWeight={800} sx={{ mt: 3, mb: 1 }}>
        Contact
      </Typography>

      <Typography variant="body1">
        For support, complaints, privacy questions, or data deletion requests, contact us at{" "}
        <Link href={`mailto:${supportEmail}`} underline="hover">
          {supportEmail}
        </Link>
        .
      </Typography>
    </Container>
  );
};

export default Terms;