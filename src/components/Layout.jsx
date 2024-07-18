import React from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';

const ResponsiveLayout = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                {/* Header */}
                <Grid item xs={12}>
                    <Box sx={{ backgroundColor: 'primary.main', color: 'white', p: 2 }}>
                        <Typography variant="h4">Header</Typography>
                    </Box>
                </Grid>

                {/* Main Content */}
                <Grid item xs={12} md={8}>
                    <Box sx={{ backgroundColor: 'secondary.main', color: 'white', p: 2 }}>
                        <Typography variant="h5">Main Content</Typography>
                        <Typography>
                            This is the main content area. It will take 100% width on small screens and 8/12 (two-thirds) on medium and larger screens.
                        </Typography>
                    </Box>
                </Grid>

                {/* Sidebar */}
                <Grid item xs={12} md={4}>
                    <Box sx={{ backgroundColor: 'error.main', color: 'white', p: 2 }}>
                        <Typography variant="h5">Sidebar</Typography>
                        <Typography>
                            This is the sidebar area. It will take 100% width on small screens and 4/12 (one-third) on medium and larger screens.
                        </Typography>
                    </Box>
                </Grid>

                {/* Footer */}
                <Grid item xs={12}>
                    <Box sx={{ backgroundColor: 'text.secondary', color: 'white', p: 2 }}>
                        <Typography variant="h6">Footer</Typography>
                        <Button variant="contained" color="primary">
                            Action
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ResponsiveLayout;