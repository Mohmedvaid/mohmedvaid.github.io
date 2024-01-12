// frontend/src/App.jsx
import React, { useState, useEffect, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import WebFont from "webfontloader";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ghostCursor } from "cursor-effects";

import theme, { fontList } from "./config/theme";
import Layout from "./components/Layout";
import Loader from "./components/Loader";
import menuItems from "./data/menu";
import "./global/styles.css"; // bg gradient

// lazy load pages
const HomePage = React.lazy(() => import("./pages/HomePage"));
const PortfolioPage = React.lazy(() => import("./pages/PortfolioPage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));
const Fun = React.lazy(() => import("./pages/Fun"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    WebFont.load({
      google: {
        families: fontList,
      },
      fontactive: () => setFontLoaded(true),
    });

    // add ghost cursor
    new ghostCursor();
  }, []);

  if (!fontLoaded) return <Loader />;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={
              <Layout menuItems={menuItems}>
                <HomePage />
              </Layout>
            }
          />
          <Route
            path="portfolio"
            element={
              <Layout menuItems={menuItems}>
                <PortfolioPage />
              </Layout>
            }
          />
          <Route
            path="contact"
            element={
              <Layout menuItems={menuItems}>
                <ContactPage />
              </Layout>
            }
          />
          <Route
            path="fun"
            element={
              <Layout menuItems={menuItems}>
                <Fun />
              </Layout>
            }
          />
          <Route
            path="*"
            element={
              <Layout menuItems={menuItems}>
                <NotFound />
              </Layout>
            }
          />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
};
export default App;
