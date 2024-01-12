// src/pages/ContactPage.jsx
import React from "react";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from "@mui/icons-material/Description";

import CardWithIcon from "../components/CardWithIcon";
import FadeInAnimation from "../components/Animations/FadeInAnimation";
import SlideInAnimation from "../components/Animations/SlideInAnimation";
import ZoomInAnimation from "../components/Animations/ZoomInAnimation";

import { title, contact } from "../data/contact";

const email = contact.email;
const emailHref = `mailto:${email}`;
const linkedIn = contact.linkedIn;
const github = contact.github;
const resumeDoc = contact.resumeDoc;
const resumePDF = contact.resumePDF;

const Contact = () => (
  <>
    <FadeInAnimation>
      <Typography variant="h1" textAlign="center" gutterBottom>
        {title}
      </Typography>
    </FadeInAnimation>

    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} md={6} lg={4}>
        <ZoomInAnimation>
          <CardWithIcon
            icon={<EmailIcon fontSize="large" />}
            label="Email"
            content={<Link href={emailHref}>{email}</Link>}
          />
        </ZoomInAnimation>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <SlideInAnimation direction="right">
          <CardWithIcon
            icon={<DescriptionIcon fontSize="large" />}
            label="PDF Resume (Open In Browser)"
            content={
              <Link href={resumePDF} target="_blank" rel="noreferrer">
                Open
              </Link>
            }
          />
        </SlideInAnimation>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <FadeInAnimation>
          <CardWithIcon
            icon={<DescriptionIcon fontSize="large" />}
            label="Word Doc Resume (Download)"
            content={
              <Link href={resumeDoc} download>
                Download
              </Link>
            }
          />
        </FadeInAnimation>
      </Grid>
    </Grid>

    <Box textAlign="center" sx={{ mt: 4 }}>
      <FadeInAnimation>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Social Media
        </Typography>
        <IconButton
          href={linkedIn}
          target="_blank"
          rel="noreferrer"
          color="primary"
        >
          <LinkedInIcon fontSize="large" />
        </IconButton>
        <IconButton
          href={github}
          target="_blank"
          rel="noreferrer"
          color="inherit"
        >
          <GitHubIcon fontSize="large" />
        </IconButton>
      </FadeInAnimation>
    </Box>
  </>
);

export default Contact;
