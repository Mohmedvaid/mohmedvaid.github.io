import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const styles = {
  root: { p: 2, display: "flex", alignItems: "center", gap: 2 },
};

const ItemWithIcon = ({ icon, label, content }) => (
  <Paper elevation={3} sx={styles.root}>
    {icon}
    <Box>
      <Typography variant="subtitle1">{label}</Typography>
      <Typography variant="body1">{content}</Typography>
    </Box>
  </Paper>
);

export default ItemWithIcon;
