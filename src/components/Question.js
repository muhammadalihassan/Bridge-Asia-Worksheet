import React from 'react';
import { Paper, Typography, Box, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { HelpOutline } from '@mui/icons-material';

const Question = ({ question, questionNumber, selectedAnswer, onAnswerSelect, isIncorrect, isSubmitted }) => {
  // Handle option selection
  const handleChange = (event) => {
    onAnswerSelect(question.id, parseInt(event.target.value));
  };

  return (
    <Paper 
      elevation={2}
      sx={{ 
        p: 3, 
        mb: 3,
        borderRadius: 3,
        background: 'linear-gradient(145deg, #ffffff, #f8f9fa)',
        border: isSubmitted && isIncorrect ? '3px solid #f44336' : '1px solid #e9ecef',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-3px)',
          boxShadow: '0 8px 25px rgba(0,0,0,0.12)',
          borderColor: isSubmitted && isIncorrect ? '#f44336' : '#667eea'
        },
        ...(isSubmitted && isIncorrect && {
          backgroundColor: '#ffebee',
          boxShadow: '0 4px 15px rgba(244, 67, 54, 0.2)'
        })
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          width: 35,
          height: 35,
          borderRadius: '50%',
          background: isSubmitted && isIncorrect 
            ? 'linear-gradient(135deg, #f44336 0%, #d32f2f 100%)' 
            : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '0.9rem',
          flexShrink: 0
        }}>
          Q{questionNumber}
        </Box>
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 600,
            color: '#2c3e50',
            lineHeight: 1.4,
            flex: 1
          }}
        >
          {question.question}
        </Typography>
        <HelpOutline sx={{ color: '#667eea', mt: 0.5 }} />
      </Box>
      
      <RadioGroup
        value={selectedAnswer !== undefined ? selectedAnswer.toString() : ''}
        onChange={handleChange}
        sx={{ ml: 2 }}
      >
        {question.options.map((option, index) => (
          <FormControlLabel
            key={index}
            value={index.toString()}
            control={
              <Radio 
                sx={{
                  color: '#667eea',
                  '&.Mui-checked': {
                    color: '#667eea',
                  },
                  '& .MuiSvgIcon-root': {
                    fontSize: 20,
                  }
                }}
              />
            }
            label={
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography 
                  component="span" 
                  sx={{ 
                    fontWeight: 'bold',
                    color: '#667eea',
                    minWidth: 20
                  }}
                >
                  {String.fromCharCode(65 + index)}.
                </Typography>
                <Typography 
                  component="span"
                  sx={{ 
                    fontSize: '1rem',
                    color: '#2c3e50'
                  }}
                >
                  {option}
                </Typography>
              </Box>
            }
            sx={{
              margin: '8px 0',
              padding: '8px 12px',
              borderRadius: 2,
              transition: 'all 0.2s ease',
              '&:hover': {
                backgroundColor: '#f8f9ff',
                transform: 'translateX(5px)'
              },
              ...(selectedAnswer === index && {
                backgroundColor: '#e8f2ff',
                borderLeft: '4px solid #667eea',
                transform: 'translateX(8px)'
              })
            }}
          />
        ))}
      </RadioGroup>
    </Paper>
  );
};

export default Question;
