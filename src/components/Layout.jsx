import React from 'react';
import {Box, Container, Typography, Button, Divider} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import AppAppBar from "./AppAppBar.jsx";
const ResponsiveLayout = () => {
    return (
        <Container maxWidth={false} sx={{
            display: 'flex',
            flexDirection: 'column',
            maxHeight: '100vh',
            minWidth: '100%',
            backgroundColor: 'red',
            color:'white',
        }}>
            < AppAppBar/>
            {/* Main Content and Sidebar */}
            <Divider />
            <Box sx={{ flex: '1 0 auto', display: 'flex', flexDirection: 'column', width: '100%', mx: 0 }}>
                <Grid container spacing={2} sx={{ flex: '1 0 auto', width: '100%', mx: 0 }}>
                    {/* Main Content */}
                    <Grid item xs={12} md={8} sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ backgroundColor: 'secondary.main', color: 'white', p: 2, flex: '1 0 auto', mx: 0 }}>
                            <Typography variant="h5">Main Content</Typography>
                            <Typography>
                                This is the main content area. It will take 100% width on small screens and 8/12 (two-thirds) on medium and larger screens.
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Sidebar */}
                    <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ backgroundColor: 'error.main', color: 'white', p: 2, flex: '1 0 auto', mx: 0 }}>
                            <Typography variant="h5">Sidebar</Typography>
                            <Typography>
                                This is the sidebar area. It will take 100% width on small screens and 4/12 (one-third) on medium and larger screens.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            {/* Footer */}
            <Box sx={{ backgroundColor: 'text.secondary', color: 'white', p: 2, width: '100%', mx: 0 }}>
                <Typography variant="h6">Footer</Typography>
                <Button variant="contained" color="primary">
                    Action
                </Button>
            </Box>
        </Container>
    );
};

export default ResponsiveLayout;