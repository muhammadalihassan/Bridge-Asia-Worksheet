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
      <Toolbar 
        sx={{ 
          justifyContent: 'center', 
          py: { xs: 1, sm: 2 },
          px: { xs: 1, sm: 3 },
          minHeight: { xs: '56px', sm: '64px' }
        }}
      >
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: { xs: 1, sm: 2 },
          textAlign: 'center',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <Quiz sx={{ 
            fontSize: { xs: 28, sm: 35, md: 40 }, 
            color: 'white',
            flexShrink: 0
          }} />
          <Typography 
            variant="h3" 
            component="h1" 
            sx={{ 
              fontWeight: 'bold',
              color: 'white',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              letterSpacing: { xs: '0.5px', sm: '1px' },
              fontSize: { 
                xs: '1.5rem',    // 24px on mobile
                sm: '2rem',      // 32px on small tablets
                md: '2.5rem',    // 40px on medium screens
                lg: '3rem'       // 48px on large screens
              },
              lineHeight: 1.2,
              wordBreak: 'break-word',
              hyphens: 'auto'
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
