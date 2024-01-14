import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import HandGesture from "../components/HandGesture";
import { funActiviyPrivacyNotice } from "../config/fun";

const styles = {
  root: {
    height: "100vh",
  },
  // move the info icon top right
  infoIcon: {
    position: "absolute",
    top: "12%",
    right: 0,
  },
};

const FunPage = () => {
  const [open, setOpen] = useState(true);

  const handleToggleDialog = () => setOpen(!open);

  return (
    <Box sx={styles.root} component="section" id="fun">
      <IconButton onClick={handleToggleDialog} sx={styles.infoIcon}>
        <InfoIcon />
      </IconButton>
      <Dialog open={open} onClose={handleToggleDialog}>
        <DialogTitle>{"Hand Gesture Detection"}</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ color: "#e5e5e5" }}>
            {funActiviyPrivacyNotice}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleToggleDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <HandGesture />
    </Box>
  );
};

export default FunPage;
