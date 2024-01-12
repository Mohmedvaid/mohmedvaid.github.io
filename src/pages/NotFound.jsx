import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(5); // Start countdown from 5

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => {
        if (currentCount === 1) {
          clearInterval(interval); // Clear interval when count reaches 1
          navigate("/"); // Redirect when countdown finishes
        }
        return currentCount - 1;
      });
    }, 1000);

    return () => clearInterval(interval); // Clean up interval
  }, [navigate]);

  // Handle button click
  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <Box sx={{ height: "100vh" }} component="section" id="not-found">
      <Typography variant="h3" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="subtitle1">
        You will be redirected to the homepage in {count} seconds.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleBackHome}
        style={{ marginTop: "20px" }}
      >
        Back to Home
      </Button>
    </Box>
  );
};

export default NotFoundPage;
