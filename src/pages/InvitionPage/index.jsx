import React from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import { useLocation } from "react-router-dom";

const InvitationPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const groupId = queryParams.get("groupId");

    const handleDownload = () => {
        window.location.href = "/cost_share.apk";
    };

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
                You're Invited to Join a Group!
            </Typography>
            <Typography variant="h6" component="p" gutterBottom>
                Group ID: {groupId}
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
                Join the group to start sharing expenses effortlessly.
            </Typography>
            <Box mt={4}>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={handleDownload}
                >
                    Download App
                </Button>
            </Box>
            <Box mt={2}>
                <Typography variant="body2" component="p">
                    Or preview the group details below:
                </Typography>
                <TextField
                    label="Group ID"
                    value={groupId}
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                {/* Add more group details here if needed */}
            </Box>
        </Box>
    );
};

export default InvitationPage;