import React from 'react';
import AppAppBar from "./AppAppBar.jsx";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const ResponsiveLayout = () => {
    return (
        <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            minHeight: '100vh', 
            width: '100vw',
            maxWidth: '100%',
            overflow: 'hidden',
        }}>
            <AppAppBar />
            
            {/* 大海报区域 */}
            {/* 原有的内容区域 */}
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' }, gap: 2, p: 2 }}>
                    {/* Main Content */}
                    <Box sx={{ backgroundColor: 'blue', p: 2 }}>
                        <Typography variant="h5">主要内容</Typography>
                        <Typography>
                            这是主要内容区域。在小屏幕上它会占据100%宽度，在中等及更大的屏幕上会占据2/3的宽度。
                        </Typography>
                    </Box>

                    {/* Sidebar */}
                    <Box sx={{ backgroundColor: 'darkred', p: 2 }}>
                        <Typography variant="h5">侧边栏</Typography>
                        <Typography>
                            这是侧边栏区域。在小屏幕上它会占据100%宽度，在中等及更大的屏幕上会占据1/3的宽度。
                        </Typography>
                    </Box>
                </Box>
            </Box>

            {/* Footer */}
            <Box sx={{ backgroundColor: 'gray', width: '100%', p: 2 }}>
                <Typography variant="h6">页脚</Typography>
                <Button variant="contained" color="primary">
                    操作
                </Button>
            </Box>
        </Box>
    );
};

export default ResponsiveLayout;