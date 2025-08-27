import React from 'react';
import { Grid, Container, Typography, Box } from '@mui/material';
import Question from './Question';

const QuestionGrid = ({ questions, selectedAnswers, onAnswerSelect, incorrectAnswers, isSubmitted }) => {
  // Split questions into two columns
  const leftColumnQuestions = questions.slice(0, 6);
  const rightColumnQuestions = questions.slice(6, 12);

  return (
    <Container maxWidth="xl" sx={{ px: 2 }}>
      <Box sx={{ mb: 3, textAlign: 'center' }}>
        <Typography 
          variant="h4" 
          sx={{ 
            fontWeight: 'bold',
            color: '#2c3e50',
            mb: 1
          }}
        >
          Questions
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            color: '#6c757d',
            fontSize: '1.1rem'
          }}
        >
          Choose the best answer for each question
        </Typography>
      </Box>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box sx={{ 
            p: 2, 
            borderRadius: 3,
            background: 'linear-gradient(135deg, #f8f9ff 0%, #e8f2ff 100%)',
            border: '1px solid #e3f2fd'
          }}>
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 3, 
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#667eea'
              }}
            >
              Questions 1-6
            </Typography>
            {leftColumnQuestions.map((question, index) => (
              <Question
                key={question.id}
                question={question}
                questionNumber={index + 1}
                selectedAnswer={selectedAnswers[question.id]}
                onAnswerSelect={onAnswerSelect}
                isIncorrect={incorrectAnswers && incorrectAnswers.includes(question.id)}
                isSubmitted={isSubmitted}
              />
            ))}
          </Box>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Box sx={{ 
            p: 2, 
            borderRadius: 3,
            background: 'linear-gradient(135deg, #fff8f0 0%, #ffe8d6 100%)',
            border: '1px solid #ffe0b2'
          }}>
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 3, 
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#ff8a65'
              }}
            >
              Questions 7-12
            </Typography>
            {rightColumnQuestions.map((question, index) => (
              <Question
                key={question.id}
                question={question}
                questionNumber={index + 7}
                selectedAnswer={selectedAnswers[question.id]}
                onAnswerSelect={onAnswerSelect}
                isIncorrect={incorrectAnswers && incorrectAnswers.includes(question.id)}
                isSubmitted={isSubmitted}
              />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default QuestionGrid;
