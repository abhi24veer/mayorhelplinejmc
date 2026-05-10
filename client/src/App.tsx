import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import DataDeletion from "./pages/DataDeletion";
import Support from "./pages/Support";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          bgcolor: "background.default",
        }}
      >
        <Header />

        <Box component="main" sx={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/data-deletion" element={<DataDeletion />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </Box>

        <Footer />
      </Box>
    </BrowserRouter>
  );
};

export default App;