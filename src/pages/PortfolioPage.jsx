// src/pages/PortfolioPage.jsx
import React from "react";
import Grid from "@mui/material/Grid";

import CardComponent from "../components/CardComponent";
import FadeIn from "../components/Animations/FadeInAnimation";
import projects from "../data/portfolio";

const PortfolioPage = () => (
  <Grid container spacing={2}>
    {projects.map((project, index) => (
      <Grid item sm={12} md={6} lg={4} key={index}>
        <FadeIn>
          <CardComponent
            title={project.name}
            content={project.description}
            image={project.image}
            repoLink={project.repoLink}
          />
        </FadeIn>
      </Grid>
    ))}
  </Grid>
);

export default PortfolioPage;
