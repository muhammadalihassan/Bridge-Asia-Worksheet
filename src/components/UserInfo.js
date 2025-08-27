import React from 'react';
import { Paper, TextField, Box, Typography } from '@mui/material';
import { Person, EmojiEvents } from '@mui/icons-material';

const UserInfo = ({ name, setName, score }) => {
  return (
    <Paper 
      elevation={3} 
      sx={{ 
        p: 3, 
        mb: 3, 
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
          mb: 2, 
          color: '#333',
          fontWeight: 'bold',
          textAlign: 'center'
        }}
      >
        Student Information
      </Typography>
      <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Person sx={{ color: '#667eea' }} />
          <TextField
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            sx={{
              minWidth: 200,
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  '& > fieldset': {
                    borderColor: '#667eea',
                  }
                }
              }
            }}
          />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <EmojiEvents sx={{ color: '#ffd700' }} />
          <TextField
            label="Score"
            variant="outlined"
            value={score}
            InputProps={{ readOnly: true }}
            placeholder="Score will appear here"
            sx={{
              minWidth: 150,
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
                backgroundColor: '#f8f9fa'
              }
            }}
          />
        </Box>
      </Box>
    </Paper>
  );
};

export default UserInfo;
