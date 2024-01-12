// src/components/CardComponent.jsx
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const styles = {
  wrapper: {
    maxWidth: "100%",
    borderRadius: "16px",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    "&:hover": {
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
    },
  },
  media: {
    height: 300,
    objectFit: "cover", // Cover the area without stretching the image
  },
};

const CardComponent = ({ title, content, image, repoLink }) => {
  return (
    <Card sx={styles.wrapper}>
      {image && (
        <CardMedia
          component="img"
          sx={styles.media}
          image={image}
          alt={title}
        />
      )}
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
        {repoLink && (
          <Button href={repoLink} target="_blank">
            View Repo
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default CardComponent;
