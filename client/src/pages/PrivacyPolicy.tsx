import React from "react";
import { Box, Container, Typography, Divider, List, ListItem, Link } from "@mui/material";

const PrivacyPolicy: React.FC = () => {
  const lastUpdated = "2026-02-28";
  const supportEmail = "majorhelplinejmc24@gmail.com";

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
        Mayor Helpline JMC is a municipal grievance support application designed to help citizens
        submit complaints, attach supporting evidence, and track complaint status updates. This
        application supports communication and complaint-management workflows between citizens and
        authorized personnel.
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        By using the application, you agree to the collection and use of information as described in
        this Privacy Policy.
      </Typography>

      <Typography variant="h6" fontWeight={800} sx={{ mt: 3, mb: 1 }}>
        Information we collect
      </Typography>

      <List dense>
        <ListItem>
          <Typography>
            <b>Account information:</b> name, phone number, email address, login credentials, and
            user role such as Citizen, Officer, or Admin.
          </Typography>
        </ListItem>

        <ListItem>
          <Typography>
            <b>Complaint information:</b> complaint description, category, location details provided
            by the user, timestamps, remarks, assigned department, status history, and action logs.
          </Typography>
        </ListItem>

        <ListItem>
          <Typography>
            <b>Attachments:</b> photos, videos, or documents uploaded as supporting evidence for a
            complaint.
          </Typography>
        </ListItem>

        <ListItem>
          <Typography>
            <b>Device and usage information:</b> basic technical information required to operate,
            secure, and improve the application, such as app usage activity, error logs, and device
            information where applicable.
          </Typography>
        </ListItem>
      </List>

      <Typography variant="h6" fontWeight={800} sx={{ mt: 3, mb: 1 }}>
        How we use information
      </Typography>

      <List dense>
        <ListItem>
          <Typography>
            To allow users to create, submit, view, and track municipal complaints.
          </Typography>
        </ListItem>

        <ListItem>
          <Typography>
            To allow authorized officers and administrators to review, assign, update, escalate,
            transfer, and resolve complaints.
          </Typography>
        </ListItem>

        <ListItem>
          <Typography>
            To verify users, prevent misuse, maintain accountability, and protect the platform from
            unauthorized access.
          </Typography>
        </ListItem>

        <ListItem>
          <Typography>
            To send complaint-related updates, notifications, or service messages.
          </Typography>
        </ListItem>

        <ListItem>
          <Typography>
            To improve application performance, reliability, security, and user experience.
          </Typography>
        </ListItem>
      </List>

      <Typography variant="h6" fontWeight={800} sx={{ mt: 3, mb: 1 }}>
        Location information
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        The application may collect or allow users to provide location-related information for the
        purpose of identifying where a complaint or service issue occurred. Location information is
        used only for complaint handling, verification, assignment, and resolution workflows.
      </Typography>

      <Typography variant="h6" fontWeight={800} sx={{ mt: 3, mb: 1 }}>
        Media and file uploads
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        Users may upload photos, videos, or other supporting files as complaint evidence. These files
        are used only to support complaint review, verification, and resolution. Users should avoid
        uploading sensitive personal information unless it is necessary for the complaint.
      </Typography>

      <Typography variant="h6" fontWeight={800} sx={{ mt: 3, mb: 1 }}>
        Sharing of information
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        Complaint-related information may be shared with authorized officers, administrators,
        relevant departments, service providers, or technical personnel only as needed to operate the
        platform, resolve complaints, maintain records, or comply with applicable requirements. We do
        not sell personal data.
      </Typography>

      <Typography variant="h6" fontWeight={800} sx={{ mt: 3, mb: 1 }}>
        Third-party services
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        The application may use third-party infrastructure or services for hosting, authentication,
        database storage, media storage, analytics, notifications, or error monitoring. These
        services process data only as required to provide and maintain the application.
      </Typography>

      <Typography variant="h6" fontWeight={800} sx={{ mt: 3, mb: 1 }}>
        Data retention
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        We retain personal data and complaint records only for as long as necessary to provide the
        service, support complaint resolution, maintain operational records, prevent misuse, and meet
        legal, administrative, or audit requirements. Some complaint records may be retained even
        after account deletion where required for public-service, legal, or audit purposes.
      </Typography>

      <Typography variant="h6" fontWeight={800} sx={{ mt: 3, mb: 1 }}>
        Data deletion
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        Users may request deletion of their account and related personal data by emailing us at{" "}
        <Link href={`mailto:${supportEmail}`} underline="hover">
          {supportEmail}
        </Link>{" "}
        with the subject <b>“Data Deletion Request”</b>. We may ask for verification details before
        processing the request.
      </Typography>

      <Typography variant="h6" fontWeight={800} sx={{ mt: 3, mb: 1 }}>
        Security
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        We use reasonable technical and organizational measures to protect user data, including
        controlled access, authentication, and secure transmission where applicable. However, no
        method of electronic storage or transmission is completely secure, and we cannot guarantee
        absolute security.
      </Typography>

      <Typography variant="h6" fontWeight={800} sx={{ mt: 3, mb: 1 }}>
        Your choices
      </Typography>

      <List dense>
        <ListItem>
          <Typography>
            <b>Access and update:</b> You may update your profile information where this option is
            available in the application.
          </Typography>
        </ListItem>

        <ListItem>
          <Typography>
            <b>Complaint content:</b> You are responsible for the accuracy of complaint details and
            attachments submitted through the application.
          </Typography>
        </ListItem>

        <ListItem>
          <Typography>
            <b>Deletion:</b> You may request account or data deletion by contacting us at{" "}
            <Link href={`mailto:${supportEmail}`} underline="hover">
              {supportEmail}
            </Link>
            .
          </Typography>
        </ListItem>
      </List>

      <Typography variant="h6" fontWeight={800} sx={{ mt: 3, mb: 1 }}>
        Children’s privacy
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        This application is intended for users aged 18 and above. We do not knowingly collect
        personal data from children under 18. If we become aware that data from a child has been
        collected, we will take reasonable steps to delete it.
      </Typography>

      <Typography variant="h6" fontWeight={800} sx={{ mt: 3, mb: 1 }}>
        Changes to this policy
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        We may update this Privacy Policy from time to time. Updates will be posted on this page
        with a revised “Last updated” date.
      </Typography>

      <Typography variant="h6" fontWeight={800} sx={{ mt: 3, mb: 1 }}>
        Contact us
      </Typography>

      <Typography variant="body1">
        For privacy questions, support requests, or data deletion requests, contact us at{" "}
        <Link href={`mailto:${supportEmail}`} underline="hover">
          {supportEmail}
        </Link>
        .
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Typography variant="caption" color="text.secondary">
          This policy should be kept consistent with the actual app permissions, SDKs, and data
          collection practices used in production.
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;