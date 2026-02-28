// src/pages/Home.tsx  (new design: "product brief" layout, no floating icons / no typewriter)
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
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

// icons
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

const Home: React.FC = () => {
  const modules = useMemo(
    () => [
      { icon: <PublicOutlinedIcon />, title: "Citizen App", desc: "Create complaints, attach evidence, track updates." },
      { icon: <VerifiedUserOutlinedIcon />, title: "Officer Console", desc: "Triage, remarks, status updates, escalation/transfer." },
      { icon: <AdminPanelSettingsOutlinedIcon />, title: "Admin Oversight", desc: "Monitoring, user management, control of flows." },
    ],
    []
  );

  const workflow = useMemo(
    () => [
      { icon: <AssignmentTurnedInOutlinedIcon />, title: "Register", desc: "Complaint + metadata (category, location, notes)." },
      { icon: <ManageSearchOutlinedIcon />, title: "Assign & Verify", desc: "Department handling and field verification if needed." },
      { icon: <TimelineOutlinedIcon />, title: "Track & Audit", desc: "Status history with remarks for accountability." },
      { icon: <SwapHorizOutlinedIcon />, title: "Escalate / Transfer", desc: "Route across levels or departments when required." },
      { icon: <PhotoCameraOutlinedIcon />, title: "Evidence", desc: "Optional photo attachments for faster resolution." },
    ],
    []
  );

  const tech = useMemo(
    () => [
      { icon: <MemoryOutlinedIcon />, title: "Mobile", desc: "React Native (Expo) Android app." },
      { icon: <ApiOutlinedIcon />, title: "Backend", desc: "Node/Express API for complaints and actions." },
      { icon: <StorageOutlinedIcon />, title: "Database & Media", desc: "MongoDB + cloud storage for attachments." },
    ],
    []
  );

  const faqs = useMemo(
    () => [
      { q: "Is this the actual app?", a: "No. This is a showcase site. The real product is the Android application." },
      { q: "Why these policy pages?", a: "Google Play requires public URLs for privacy/support/disclosures." },
      { q: "What should reviewers see?", a: "A working complaint flow + role-based screens (citizen/officer/admin), with test credentials if login is required." },
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
      {/* HERO (split, product-brief style) */}
      <Box id="overview" sx={{ py: { xs: 7, md: 10 }, bgcolor: "background.paper", borderBottom: (t) => `1px solid ${t.palette.divider}` }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Stack spacing={2}>
                <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
                  <Chip label="Project Showcase" variant="outlined" />
                  <Chip label="Mayor Helpline" color="primary" variant="outlined" />
                  <Chip label="Jabalpur Municipal Corporation" variant="outlined" />
                </Stack>

                <Typography variant="h2" sx={{ fontWeight: 1000, letterSpacing: -0.8, lineHeight: 1.05 }}>
                  Municipal grievances, tracked end-to-end.
                </Typography>

                <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 760, lineHeight: 1.6 }}>
                  This website showcases the Mayor Helpline app project and hosts the public policy/support pages used for Google Play submission.
                </Typography>

                <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ pt: 1 }}>
                  <Button
                    component="a"
                    href="https://play.google.com/store" // TODO
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
                    component={RouterLink}
                    to="/privacy"
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
              {/* Clean "spec card" instead of flashy hero */}
              <Card sx={{ ...cardSx, borderRadius: 5 }}>
                <CardContent sx={{ p: { xs: 3, md: 3.5 } }}>
                  <Typography sx={{ fontWeight: 950, mb: 1.5 }}>At a glance</Typography>
                  <Stack spacing={1.2}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
                      <Typography color="text.secondary">Primary goal</Typography>
                      <Typography sx={{ fontWeight: 900, textAlign: "right" }}>Complaint resolution</Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
                      <Typography color="text.secondary">Users</Typography>
                      <Typography sx={{ fontWeight: 900, textAlign: "right" }}>Citizen • Officer • Admin</Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
                      <Typography color="text.secondary">Key capability</Typography>
                      <Typography sx={{ fontWeight: 900, textAlign: "right" }}>Status tracking + audit</Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
                      <Typography color="text.secondary">Evidence</Typography>
                      <Typography sx={{ fontWeight: 900, textAlign: "right" }}>Optional photos</Typography>
                    </Box>
                  </Stack>

                  <Box sx={{ mt: 2.5, p: 1.5, borderRadius: 3, bgcolor: "action.hover" }}>
                    <Typography variant="body2" color="text.secondary">
                      Note: This site is informational; complaints are filed in the mobile app.
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* MODULES */}
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
              <Grid item xs={12} md={4} key={m.title}>
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

      {/* WORKFLOW */}
      <Box id="workflow" sx={{ py: { xs: 7, md: 9 }, bgcolor: "background.paper", borderTop: (t) => `1px solid ${t.palette.divider}`, borderBottom: (t) => `1px solid ${t.palette.divider}` }}>
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

      {/* SCREENS (clean placeholder tiles) */}
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

      {/* TECH */}
      <Box id="tech" sx={{ py: { xs: 7, md: 9 }, bgcolor: "background.paper", borderTop: (t) => `1px solid ${t.palette.divider}` }}>
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
              <Grid item xs={12} md={4} key={t.title}>
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

      {/* FAQ */}
      <Box id="faq" sx={{ py: { xs: 7, md: 9 } }}>
        <Container maxWidth="lg">
          <Stack spacing={1} sx={{ mb: 4 }}>
            <Typography variant="h3" sx={{ fontWeight: 1000, letterSpacing: -0.6 }}>
              FAQ
            </Typography>
            <Typography color="text.secondary">Common questions for Play Console / reviewers.</Typography>
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

          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ mt: 4 }}>
            <Button
              component={RouterLink}
              to="/privacy"
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
    </Box>
  );
};

export default Home;