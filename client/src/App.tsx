import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, GlobalStyles, Box } from "@mui/material";

import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import DataDeletion from "./pages/DataDeletion";
import Support from "./pages/Support";

import Header from "./components/Header";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <GlobalStyles
        styles={{
          html: { height: "100%", overflowX: "hidden" },
          body: { minHeight: "100%", overflowX: "hidden", margin: 0, padding: 0 },
          "#root": { minHeight: "100%", display: "flex", flexDirection: "column" },
        }}
      />
      <BrowserRouter>
        <Header />
        <Box component="main" sx={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Play Console / compliance pages */}
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/data-deletion" element={<DataDeletion />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </Box>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;