import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Quiz } from '@mui/icons-material';

const Header = () => {
  return (
    <AppBar 
      position="static" 
      sx={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        mb: 3
      }}
    >
      <Toolbar sx={{ justifyContent: 'center', py: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Quiz sx={{ fontSize: 40, color: 'white' }} />
          <Typography 
            variant="h3" 
            component="h1" 
            sx={{ 
              fontWeight: 'bold',
              color: 'white',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              letterSpacing: '1px'
            }}
          >
            Rounding Off to Nearest 10
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
