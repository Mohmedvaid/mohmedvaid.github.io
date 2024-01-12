import React from "react";
import Grid from "@mui/material/Grid";

import Description from "../Description";
import ScratchOff from "../ScratchOff";
import Section from "../Section";
import FadeIn from "../Animations/FadeInAnimation";
import { scratchOffRevealCode } from "../../data/home";

import topImage from "../../assets/img/me.jpeg";

const styles = {
  scratchOffSize: {
    width: "100%",
    height: "500px",
  },
  description: {
    display: "flex",
    justifyContent: "center",
    transition: "transform 0.5s ease", // Smooth transition for moving container
    flexDirection: "column",
  },
};

const Section1 = () => (
  <Section>
    <Grid container spacing={2}>
      <Grid item xs={12} md={7} sx={styles.description}>
        <Description />
      </Grid>
      <Grid item xs={12} md={5} sx={styles.scratchOffSize}>
        <FadeIn>
          <ScratchOff
            imageSrc={topImage}
            revealCode={scratchOffRevealCode}
            containerWidth={styles.scratchOffSize.width}
            containerHeight={styles.scratchOffSize.height}
          />
        </FadeIn>
      </Grid>
    </Grid>
  </Section>
);

export default Section1;
