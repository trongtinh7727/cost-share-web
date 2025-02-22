import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100vh"
            textAlign="center"
            p={2}
        >
            <Typography variant="h2" component="h1" gutterBottom>
                Welcome to Expense Tracker
            </Typography>
            <Typography variant="h6" component="p" gutterBottom>
                Track your expenses effortlessly and efficiently.
            </Typography>
            <Box mt={4}>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    component={Link}
                    to="/cost_share.apk"
                >
                    Get Started
                </Button>
            </Box>
        </Box>
    );
};

export default LandingPage;