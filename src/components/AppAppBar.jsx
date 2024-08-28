import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const AppAppBar = () => {
    return (
        <AppBar position="static" sx={{ width: '100%', backgroundColor: 'blue' }}>
            <Toolbar sx={{ width: '100%', justifyContent: 'space-between' }}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ color: 'red' }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ color: 'red' }}>
                    news
                </Typography>
                <Button color="inherit" sx={{ color: 'red', border: '1px solid red', '&:hover': { backgroundColor: 'rgba(255, 0, 0, 0.1)' } }}>
                    login
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default AppAppBar;
