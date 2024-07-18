import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
const ResponsiveLayout = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: 1, backgroundColor: 'black' }}>
            {/* Header */}
            <Box sx={{ backgroundColor: 'primary.main', color: 'white', p: 2, width: '100%' }}>
                <Typography variant="h4">Header</Typography>
            </Box>

            {/* Main Content and Sidebar */}
            <Box sx={{ flex: '1 0 auto', display: 'flex', flexDirection: 'column' }}>
                <Grid container spacing={2} sx={{ flex: '1 0 auto', mx: 0, width: '100%' }}>
                    {/* Main Content */}
                    <Grid item xs={12} md={8} sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ backgroundColor: 'secondary.main', color: 'white', p: 2, flex: '1 0 auto' }}>
                            <Typography variant="h5">Main Content</Typography>
                            <Typography>
                                This is the main content area. It will take 100% width on small screens and 8/12 (two-thirds) on medium and larger screens.
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Sidebar */}
                    <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ backgroundColor: 'error.main', color: 'white', p: 2, flex: '1 0 auto' }}>
                            <Typography variant="h5">Sidebar</Typography>
                            <Typography>
                                This is the sidebar area. It will take 100% width on small screens and 4/12 (one-third) on medium and larger screens.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            {/* Footer */}
            <Box sx={{ backgroundColor: 'text.secondary', color: 'white', p: 2 }}>
                <Typography variant="h6">Footer</Typography>
                <Button variant="contained" color="primary">
                    Action
                </Button>
            </Box>
        </Box>
    );
};


export default ResponsiveLayout;