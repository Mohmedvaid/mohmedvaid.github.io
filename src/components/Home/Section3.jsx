import React from "react";
import { Link } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Section from "../Section";
import CardComponent from "../CardComponent";
import projects from "../../data/portfolio";

const fewProjects = projects.slice(0, 3); //  3 projects

const Section3 = () => (
  <Section>
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={12}>
        <Typography variant="h2" textAlign="center" gutterBottom>
          Portfolio
        </Typography>
      </Grid>

      {fewProjects.map((project, index) => (
        <Grid item sm={12} md={6} lg={4} key={project.id || index}>
          <CardComponent
            title={project.name}
            content={project.description}
            image={project.image}
            repoLink={project.repoLink}
          />
        </Grid>
      ))}

      <Grid item xs={12} sx={{ textAlign: "center" }}>
        <Button variant="contained" component={Link} to="/portfolio">
          View More
        </Button>
      </Grid>
    </Grid>
  </Section>
);

export default Section3;
