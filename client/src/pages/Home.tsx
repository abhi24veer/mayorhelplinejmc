import React, { useMemo } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
  Divider,
  List,
  ListItem,
  Link,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import ManageSearchOutlinedIcon from "@mui/icons-material/ManageSearchOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";
import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import PrivacyTipOutlinedIcon from "@mui/icons-material/PrivacyTipOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import LaunchIcon from "@mui/icons-material/Launch";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import MemoryOutlinedIcon from "@mui/icons-material/MemoryOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import ApiOutlinedIcon from "@mui/icons-material/ApiOutlined";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ChildCareOutlinedIcon from "@mui/icons-material/ChildCareOutlined";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";

const SUPPORT_EMAIL = "majorhelplinejmc24@gmail.com";
const LAST_UPDATED = "2026-02-28";

const Home: React.FC = () => {
  const modules = useMemo(
    () => [
      {
        icon: <PublicOutlinedIcon />,
        title: "Citizen App",
        desc: "Create complaints, attach evidence, and track updates.",
      },
      {
        icon: <VerifiedUserOutlinedIcon />,
        title: "Officer Console",
        desc: "Triage complaints, add remarks, update status, escalate, and transfer.",
      },
      {
        icon: <AdminPanelSettingsOutlinedIcon />,
        title: "Admin Oversight",
        desc: "Monitor workflows, manage users, and oversee complaint operations.",
      },
    ],
    []
  );

  const workflow = useMemo(
    () => [
      {
        icon: <AssignmentTurnedInOutlinedIcon />,
        title: "Register",
        desc: "Complaint details, category, location, notes, and optional evidence.",
      },
      {
        icon: <ManageSearchOutlinedIcon />,
        title: "Assign & Verify",
        desc: "Department handling and field verification where required.",
      },
      {
        icon: <TimelineOutlinedIcon />,
        title: "Track & Audit",
        desc: "Status history, remarks, and action logs for accountability.",
      },
      {
        icon: <SwapHorizOutlinedIcon />,
        title: "Escalate / Transfer",
        desc: "Route complaints across levels or departments when required.",
      },
      {
        icon: <PhotoCameraOutlinedIcon />,
        title: "Evidence",
        desc: "Optional photo or media attachments for faster review.",
      },
    ],
    []
  );

  const tech = useMemo(
    () => [
      {
        icon: <MemoryOutlinedIcon />,
        title: "Mobile",
        desc: "React Native / Expo Android app.",
      },
      {
        icon: <ApiOutlinedIcon />,
        title: "Backend",
        desc: "Node.js and Express API for complaints, accounts, and actions.",
      },
      {
        icon: <StorageOutlinedIcon />,
        title: "Database & Media",
        desc: "MongoDB and cloud storage for complaint records and attachments.",
      },
    ],
    []
  );

  const faqs = useMemo(
    () => [
      {
        q: "Is this the actual app?",
        a: "No. This is a public showcase and policy website. The actual product is the Android application.",
      },
      {
        q: "Why are these policy pages included?",
        a: "Google Play requires public URLs for privacy policy, support, terms, and data deletion disclosures.",
      },
      {
        q: "What should reviewers see?",
        a: "A working complaint flow with citizen, officer, and admin functionality, plus test credentials if login is required.",
      },
    ],
    []
  );

  const privacySections = useMemo(
    () => [
      {
        icon: <InfoOutlinedIcon />,
        title: "Information We Collect",
        items: [
          "Account information: name, phone number, email address, login credentials, and user role (Citizen, Officer, or Admin).",
          "Complaint information: description, category, location, timestamps, remarks, department, status history, and action logs.",
          "Attachments: photos, videos, or documents uploaded as supporting evidence.",
          "Device and usage information: app activity, error logs, and device info where applicable.",
        ],
      },
      {
        icon: <GppGoodOutlinedIcon />,
        title: "How We Use Information",
        items: [
          "To allow users to create, submit, view, and track municipal complaints.",
          "To allow authorized officers and admins to review, assign, update, escalate, transfer, and resolve complaints.",
          "To verify users, prevent misuse, maintain accountability, and protect the platform.",
          "To send complaint-related updates, notifications, or service messages.",
          "To improve application performance, reliability, security, and user experience.",
        ],
      },
      {
        icon: <LocationOnOutlinedIcon />,
        title: "Location Information",
        items: [
          "The application may collect or allow users to provide location-related information to identify where a complaint or service issue occurred.",
          "Location information is used only for complaint handling, verification, assignment, and resolution workflows.",
        ],
      },
      {
        icon: <AttachFileOutlinedIcon />,
        title: "Media & File Uploads",
        items: [
          "Users may upload photos, videos, or other supporting files as complaint evidence.",
          "These files are used only to support complaint review, verification, and resolution.",
          "Users should avoid uploading sensitive personal information unless necessary for the complaint.",
        ],
      },
      {
        icon: <ShareOutlinedIcon />,
        title: "Sharing of Information",
        items: [
          "Complaint-related information may be shared with authorized officers, administrators, relevant departments, service providers, or technical personnel only as needed.",
          "We do not sell personal data.",
        ],
      },
      {
        icon: <LockOutlinedIcon />,
        title: "Security",
        items: [
          "We use reasonable technical and organizational measures to protect user data, including controlled access, authentication, and secure transmission.",
          "No method of electronic storage or transmission is completely secure, and we cannot guarantee absolute security.",
        ],
      },
      {
        icon: <DeleteOutlineOutlinedIcon />,
        title: "Data Deletion",
        items: [
          `Users may request deletion of their account and related personal data by emailing ${SUPPORT_EMAIL} with the subject "Data Deletion Request".`,
          "We may ask for verification details before processing the request.",
          "Some complaint records may be retained after account deletion where required for legal or audit purposes.",
        ],
      },
      {
        icon: <ChildCareOutlinedIcon />,
        title: "Children's Privacy",
        items: [
          "This application is intended for users aged 18 and above.",
          "We do not knowingly collect personal data from children under 18. If we become aware that data from a child has been collected, we will take reasonable steps to delete it.",
        ],
      },
      {
        icon: <UpdateOutlinedIcon />,
        title: "Changes to This Policy",
        items: [
          "We may update this Privacy Policy from time to time.",
          `Updates will be posted on this page with a revised "Last updated" date. Last updated: ${LAST_UPDATED}.`,
        ],
      },
      {
        icon: <ContactMailOutlinedIcon />,
        title: "Contact Us",
        items: [
          `For privacy questions, support requests, or data deletion requests, contact us at ${SUPPORT_EMAIL}.`,
        ],
        email: SUPPORT_EMAIL,
      },
    ],
    []
  );

  const cardSx = {
    borderRadius: 4,
    border: (t: any) => `1px solid ${t.palette.divider}`,
    boxShadow: 0,
    backgroundImage: "none",
    height: "100%",
  };

  return (
    <Box sx={{ bgcolor: "background.default" }}>
      {/* ── Hero ── */}
      <Box
        id="overview"
        sx={{
          py: { xs: 7, md: 10 },
          bgcolor: "background.paper",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Stack spacing={2}>
                <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1 }}>
                  <Chip label="Project Showcase" variant="outlined" />
                  <Chip label="Mayor Helpline" color="primary" variant="outlined" />
                  <Chip label="Jabalpur Municipal Corporation" variant="outlined" />
                </Stack>

                <Typography
                  variant="h2"
                  sx={{ fontWeight: 1000, letterSpacing: -0.8, lineHeight: 1.05 }}
                >
                  Municipal grievances, tracked end-to-end.
                </Typography>

                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{ maxWidth: 760, lineHeight: 1.6 }}
                >
                  This website showcases the Mayor Helpline JMC app project and hosts the public
                  privacy, terms, support, and data deletion pages used for Google Play submission.
                </Typography>

                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={1.5}
                  sx={{ pt: 1, flexWrap: "wrap" }}
                >
                  <Button
                    component="a"
                    href="https://play.google.com/store"
                    target="_blank"
                    rel="noreferrer"
                    variant="contained"
                    endIcon={<LaunchIcon />}
                    sx={{ borderRadius: 3, fontWeight: 950, px: 2.5, py: 1.1 }}
                  >
                    View on Google Play
                  </Button>

                  <Button
                    component={RouterLink}
                    to="/support"
                    variant="outlined"
                    startIcon={<SupportAgentOutlinedIcon />}
                    sx={{ borderRadius: 3, fontWeight: 900, px: 2.5, py: 1.1 }}
                  >
                    Support
                  </Button>

                  <Button
                    component="a"
                    href="#privacy"
                    variant="text"
                    startIcon={<PrivacyTipOutlinedIcon />}
                    sx={{ borderRadius: 3, fontWeight: 900, px: 2.2, py: 1.1 }}
                  >
                    Privacy
                  </Button>
                </Stack>
              </Stack>
            </Grid>

            <Grid item xs={12} md={5}>
              <Card sx={{ ...cardSx, borderRadius: 5 }}>
                <CardContent sx={{ p: { xs: 3, md: 3.5 } }}>
                  <Typography sx={{ fontWeight: 950, mb: 1.5 }}>At a glance</Typography>

                  <Stack spacing={1.2}>
                    {[
                      { label: "Primary goal", value: "Complaint resolution" },
                      { label: "Users", value: "Citizen • Officer • Admin" },
                      { label: "Key capability", value: "Status tracking + audit" },
                      { label: "Evidence", value: "Optional photos" },
                    ].map(({ label, value }) => (
                      <Box
                        key={label}
                        sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}
                      >
                        <Typography color="text.secondary">{label}</Typography>
                        <Typography sx={{ fontWeight: 900, textAlign: "right" }}>{value}</Typography>
                      </Box>
                    ))}
                  </Stack>

                  <Box sx={{ mt: 2.5, p: 1.5, borderRadius: 3, bgcolor: "action.hover" }}>
                    <Typography variant="body2" color="text.secondary">
                      Note: This website is informational. Complaints are filed in the mobile app.
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── Modules ── */}
      <Box id="modules" sx={{ py: { xs: 7, md: 9 } }}>
        <Container maxWidth="lg">
          <Stack spacing={1} sx={{ mb: 4 }}>
            <Typography variant="h3" sx={{ fontWeight: 1000, letterSpacing: -0.6 }}>
              Modules
            </Typography>
            <Typography color="text.secondary" sx={{ maxWidth: 820 }}>
              Three role-focused experiences designed for municipal grievance operations.
            </Typography>
          </Stack>

          <Grid container spacing={3}>
            {modules.map((m) => (
              <Grid item xs={12} sm={6} md={4} key={m.title}>
                <Card sx={cardSx}>
                  <CardContent sx={{ p: { xs: 3, md: 3.5 } }}>
                    <Box sx={{ fontSize: 34, mb: 1, color: "primary.main" }}>{m.icon}</Box>
                    <Typography variant="h6" sx={{ fontWeight: 950, mb: 0.75 }}>
                      {m.title}
                    </Typography>
                    <Typography color="text.secondary">{m.desc}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── Workflow ── */}
      <Box
        id="workflow"
        sx={{
          py: { xs: 7, md: 9 },
          bgcolor: "background.paper",
          borderTop: (t) => `1px solid ${t.palette.divider}`,
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={1} sx={{ mb: 4 }}>
            <Typography variant="h3" sx={{ fontWeight: 1000, letterSpacing: -0.6 }}>
              Workflow
            </Typography>
            <Typography color="text.secondary" sx={{ maxWidth: 820 }}>
              Simple flow, structured actions, clear audit trail.
            </Typography>
          </Stack>

          <Grid container spacing={3}>
            {workflow.map((w) => (
              <Grid item xs={12} sm={6} md={4} key={w.title}>
                <Card sx={cardSx}>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ fontSize: 30, mb: 1, color: "primary.main" }}>{w.icon}</Box>
                    <Typography sx={{ fontWeight: 950 }}>{w.title}</Typography>
                    <Typography color="text.secondary" variant="body2" sx={{ mt: 0.5 }}>
                      {w.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── Screens ── */}
      <Box id="screens" sx={{ py: { xs: 7, md: 9 } }}>
        <Container maxWidth="lg">
          <Stack spacing={1} sx={{ mb: 4 }}>
            <Typography variant="h3" sx={{ fontWeight: 1000, letterSpacing: -0.6 }}>
              Screens
            </Typography>
            <Typography color="text.secondary">
              Add real screenshots in <b>/public</b> and they will appear here.
            </Typography>
          </Stack>

          <Grid container spacing={3}>
            {[
              { file: "screen-home.png", label: "Home / Role selection" },
              { file: "screen-create.png", label: "Create complaint" },
              { file: "screen-track.png", label: "Track complaints" },
              { file: "screen-admin.png", label: "Admin dashboard" },
            ].map((s) => (
              <Grid item xs={12} sm={6} md={3} key={s.file}>
                <Card sx={{ ...cardSx, overflow: "hidden" }}>
                  <Box
                    component="img"
                    src={`${process.env.PUBLIC_URL || ""}/${s.file}`}
                    alt={s.label}
                    sx={{
                      width: "100%",
                      height: 220,
                      objectFit: "cover",
                      bgcolor: "grey.100",
                      display: "block",
                    }}
                    onError={(e: any) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <CardContent sx={{ p: 2.5 }}>
                    <Typography sx={{ fontWeight: 950 }}>{s.label}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {s.file}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── Tech Stack ── */}
      <Box
        id="tech"
        sx={{
          py: { xs: 7, md: 9 },
          bgcolor: "background.paper",
          borderTop: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={1} sx={{ mb: 4 }}>
            <Typography variant="h3" sx={{ fontWeight: 1000, letterSpacing: -0.6 }}>
              Tech Stack
            </Typography>
            <Typography color="text.secondary" sx={{ maxWidth: 820 }}>
              High-level architecture summary for reviewers and stakeholders.
            </Typography>
          </Stack>

          <Grid container spacing={3}>
            {tech.map((t) => (
              <Grid item xs={12} sm={6} md={4} key={t.title}>
                <Card sx={cardSx}>
                  <CardContent sx={{ p: { xs: 3, md: 3.5 } }}>
                    <Box sx={{ fontSize: 30, mb: 1, color: "primary.main" }}>{t.icon}</Box>
                    <Typography sx={{ fontWeight: 950 }}>{t.title}</Typography>
                    <Typography color="text.secondary" variant="body2" sx={{ mt: 0.5 }}>
                      {t.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── FAQ ── */}
      <Box id="faq" sx={{ py: { xs: 7, md: 9 } }}>
        <Container maxWidth="lg">
          <Stack spacing={1} sx={{ mb: 4 }}>
            <Typography variant="h3" sx={{ fontWeight: 1000, letterSpacing: -0.6 }}>
              FAQ
            </Typography>
            <Typography color="text.secondary">
              Common questions for Play Console reviewers.
            </Typography>
          </Stack>

          <Grid container spacing={3}>
            {faqs.map((f) => (
              <Grid item xs={12} md={4} key={f.q}>
                <Card sx={cardSx}>
                  <CardContent sx={{ p: { xs: 3, md: 3.5 } }}>
                    <Box sx={{ fontSize: 28, mb: 1, color: "primary.main" }}>
                      <QuestionAnswerOutlinedIcon />
                    </Box>
                    <Typography sx={{ fontWeight: 950, mb: 0.75 }}>{f.q}</Typography>
                    <Typography color="text.secondary" variant="body2">
                      {f.a}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
            sx={{ mt: 4, flexWrap: "wrap" }}
          >
            <Button
              component="a"
              href="#privacy"
              variant="outlined"
              startIcon={<PrivacyTipOutlinedIcon />}
              sx={{ borderRadius: 3, fontWeight: 950, px: 2.5, py: 1.1 }}
            >
              Privacy Policy
            </Button>

            <Button
              component={RouterLink}
              to="/support"
              variant="contained"
              startIcon={<SupportAgentOutlinedIcon />}
              sx={{ borderRadius: 3, fontWeight: 950, px: 2.5, py: 1.1 }}
            >
              Contact Support
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* ── Privacy Policy ── */}
      <Box
        id="privacy"
        sx={{
          py: { xs: 7, md: 10 },
          bgcolor: "background.paper",
          borderTop: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Container maxWidth="lg">
          {/* Section header */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems={{ xs: "flex-start", sm: "center" }}
            justifyContent="space-between"
            spacing={2}
            sx={{ mb: 1 }}
          >
            <Stack spacing={0.5}>
              <Stack direction="row" spacing={1} alignItems="center">
                <PrivacyTipOutlinedIcon color="primary" sx={{ fontSize: 28 }} />
                <Typography variant="h3" sx={{ fontWeight: 1000, letterSpacing: -0.6 }}>
                  Privacy Policy
                </Typography>
              </Stack>
              <Typography color="text.secondary" sx={{ maxWidth: 680 }}>
                How Mayor Helpline JMC collects, uses, and protects your data.
              </Typography>
            </Stack>

            <Chip
              label={`Last updated: ${LAST_UPDATED}`}
              variant="outlined"
              size="small"
              sx={{ flexShrink: 0, fontWeight: 700 }}
            />
          </Stack>

          <Divider sx={{ mb: 4 }} />

          {/* Intro */}
          <Box
            sx={{
              mb: 4,
              p: { xs: 2.5, md: 3 },
              borderRadius: 4,
              bgcolor: "action.hover",
              border: (t) => `1px solid ${t.palette.divider}`,
            }}
          >
            <Typography variant="body1" sx={{ lineHeight: 1.75 }}>
              Mayor Helpline JMC is a municipal grievance support application designed to help
              citizens submit complaints, attach supporting evidence, and track complaint status
              updates. By using the application, you agree to the collection and use of information
              as described in this Privacy Policy.
            </Typography>
          </Box>

          {/* Policy cards */}
          <Grid container spacing={3}>
            {privacySections.map((section) => (
              <Grid item xs={12} sm={6} md={4} key={section.title}>
                <Card sx={{ ...cardSx, display: "flex", flexDirection: "column" }}>
                  <CardContent
                    sx={{ p: { xs: 3, md: 3.5 }, display: "flex", flexDirection: "column", flex: 1 }}
                  >
                    <Box sx={{ fontSize: 28, mb: 1, color: "primary.main" }}>{section.icon}</Box>
                    <Typography sx={{ fontWeight: 950, mb: 1.5 }}>{section.title}</Typography>

                    <List dense disablePadding sx={{ flex: 1 }}>
                      {section.items.map((item, idx) => (
                        <ListItem
                          key={idx}
                          disableGutters
                          sx={{ alignItems: "flex-start", py: 0.4 }}
                        >
                          <Box
                            component="span"
                            sx={{
                              display: "inline-block",
                              width: 5,
                              height: 5,
                              borderRadius: "50%",
                              bgcolor: "primary.main",
                              mt: "8px",
                              mr: 1.25,
                              flexShrink: 0,
                            }}
                          />
                          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65 }}>
                            {section.email ? (
                              <>
                                For privacy questions, support requests, or data deletion requests,
                                contact us at{" "}
                                <Link
                                  href={`mailto:${section.email}`}
                                  underline="hover"
                                  color="primary"
                                >
                                  {section.email}
                                </Link>
                                .
                              </>
                            ) : (
                              item
                            )}
                          </Typography>
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Footer note + CTA */}
          <Box
            sx={{
              mt: 4,
              p: { xs: 2.5, md: 3 },
              borderRadius: 4,
              border: (t) => `1px solid ${t.palette.divider}`,
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "flex-start", sm: "center" },
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 560 }}>
              This policy should be kept consistent with the actual app permissions, SDKs, and data
              collection practices used in production. Questions? Email{" "}
              <Link href={`mailto:${SUPPORT_EMAIL}`} underline="hover" color="primary">
                {SUPPORT_EMAIL}
              </Link>
              .
            </Typography>

            <Button
              component="a"
              href={`mailto:${SUPPORT_EMAIL}?subject=Data%20Deletion%20Request`}
              variant="outlined"
              startIcon={<DeleteOutlineOutlinedIcon />}
              sx={{ borderRadius: 3, fontWeight: 950, px: 2.5, py: 1.1, flexShrink: 0 }}
            >
              Request Data Deletion
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;