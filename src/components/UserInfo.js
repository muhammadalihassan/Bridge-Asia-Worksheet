import React from 'react';
import { Paper, TextField, Box, Typography } from '@mui/material';
import { Person, EmojiEvents } from '@mui/icons-material';

const UserInfo = ({ name, setName, score }) => {
  return (
    <Paper 
      elevation={3} 
      sx={{ 
        p: { xs: 2, sm: 3 }, 
        mb: 3, 
        mx: { xs: 1, sm: 0 },
        background: 'linear-gradient(145deg, #f0f2f5, #ffffff)',
        borderRadius: 3,
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
        }
      }}
    >
      <Typography 
        variant="h6" 
        sx={{ 
          mb: { xs: 1.5, sm: 2 }, 
          color: '#333',
          fontWeight: 'bold',
          textAlign: 'center',
          fontSize: { xs: '1.1rem', sm: '1.25rem' }
        }}
      >
        Student Information
      </Typography>
      <Box sx={{ 
        display: 'flex', 
        gap: { xs: 2, sm: 3 }, 
        justifyContent: 'center', 
        alignItems: { xs: 'stretch', sm: 'center' },
        flexDirection: { xs: 'column', sm: 'row' }
      }}>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 1,
          justifyContent: { xs: 'center', sm: 'flex-start' }
        }}>
          <Person sx={{ 
            color: '#667eea',
            fontSize: { xs: 20, sm: 24 }
          }} />
          <TextField
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            fullWidth
            sx={{
              minWidth: { xs: 'auto', sm: 200 },
              maxWidth: { xs: '280px', sm: 'none' },
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
                transition: 'all 0.3s ease',
                fontSize: { xs: '0.9rem', sm: '1rem' },
                '&:hover': {
                  '& > fieldset': {
                    borderColor: '#667eea',
                  }
                }
              },
              '& .MuiInputLabel-root': {
                fontSize: { xs: '0.9rem', sm: '1rem' }
              }
            }}
          />
        </Box>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 1,
          justifyContent: { xs: 'center', sm: 'flex-start' }
        }}>
          <EmojiEvents sx={{ 
            color: '#ffd700',
            fontSize: { xs: 20, sm: 24 }
          }} />
          <TextField
            label="Score"
            variant="outlined"
            value={score}
            InputProps={{ readOnly: true }}
            placeholder="Score will appear here"
            fullWidth
            sx={{
              minWidth: { xs: 'auto', sm: 150 },
              maxWidth: { xs: '280px', sm: 'none' },
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
                backgroundColor: '#f8f9fa',
                fontSize: { xs: '0.9rem', sm: '1rem' }
              },
              '& .MuiInputLabel-root': {
                fontSize: { xs: '0.9rem', sm: '1rem' }
              }
            }}
          />
        </Box>
      </Box>
    </Paper>
  );
};

export default UserInfo;
