import React from "react";
import { Container, Typography, Divider, List, ListItem } from "@mui/material";

const Terms: React.FC = () => {
  const lastUpdated = "2026-02-28";

  return (
    <Container sx={{ py: { xs: 6, md: 8 }, maxWidth: "md" }}>
      <Typography variant="h3" fontWeight={900} gutterBottom>
        Terms of Service
      </Typography>
      <Typography color="text.secondary">Last updated: {lastUpdated}</Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="body1" sx={{ mb: 2 }}>
        Mayor Helpline helps citizens submit municipal complaints and track their resolution. By using the service,
        you agree to these terms.
      </Typography>

      <Typography variant="h6" fontWeight={800} sx={{ mt: 3, mb: 1 }}>
        Acceptable use
      </Typography>
      <List dense>
        <ListItem><Typography>No false complaints, harassment, hate speech, or illegal content.</Typography></ListItem>
        <ListItem><Typography>Do not upload sensitive personal content unless necessary for the complaint.</Typography></ListItem>
        <ListItem><Typography>Do not attempt to access other users’ data.</Typography></ListItem>
      </List>

      <Typography variant="h6" fontWeight={800} sx={{ mt: 3, mb: 1 }}>
        Service limitations
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Resolution timelines depend on department workload and field conditions. We do not guarantee specific resolution times.
      </Typography>

      <Typography variant="h6" fontWeight={800} sx={{ mt: 3, mb: 1 }}>
        Termination
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        We may suspend accounts that violate these terms or misuse the system.
      </Typography>

      <Typography variant="h6" fontWeight={800} sx={{ mt: 3, mb: 1 }}>
        Contact
      </Typography>
      <Typography variant="body1">
        For support or complaints: use the Support page in this site/app.
      </Typography>
    </Container>
  );
};

export default Terms;