import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Box, Snackbar, Alert, Typography } from '@mui/material';
import Header from './components/Header';
import UserInfo from './components/UserInfo';
import ActionButtons from './components/ActionButtons';
import QuestionGrid from './components/QuestionGrid';
import { questions } from './data/questions';

// Create Material-UI theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#667eea',
    },
    secondary: {
      main: '#764ba2',
    },
    background: {
      default: '#f8f9fa',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

function App() {
  // State variables for the app
  const [name, setName] = useState('');
  const [score, setScore] = useState('');
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [resetDialogOpen, setResetDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Function to handle answer selection
  const handleAnswerSelect = (questionId, optionIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  // Function to reset the form
  const handleReset = () => {
    setName('');
    setScore('');
    setSelectedAnswers({});
    setIncorrectAnswers([]);
    setIsSubmitted(false);
    setSnackbarMessage('Form has been reset successfully!');
    setSnackbarSeverity('info');
    setSnackbarOpen(true);
  };

  // Function to submit and calculate score
  const handleSubmit = () => {
    // Check if name is entered
    if (!name.trim()) {
      setSnackbarMessage('Please enter your name before submitting!');
      setSnackbarSeverity('warning');
      setSnackbarOpen(true);
      return;
    }

    // Check if all questions are answered
    const answeredQuestions = Object.keys(selectedAnswers).length;
    if (answeredQuestions < questions.length) {
      setSnackbarMessage(`Please answer all questions. You have answered ${answeredQuestions} out of ${questions.length} questions.`);
      setSnackbarSeverity('warning');
      setSnackbarOpen(true);
      return;
    }

    // Calculate score and identify incorrect answers
    let correctCount = 0;
    const wrongAnswers = [];
    
    questions.forEach(question => {
      if (selectedAnswers[question.id] === question.correct) {
        correctCount++;
      } else {
        wrongAnswers.push(question.id);
      }
    });

    const scoreText = `${correctCount}/12`;
    setScore(scoreText);
    setIncorrectAnswers(wrongAnswers);
    setIsSubmitted(true);
    
    // Show result message
    const percentage = Math.round((correctCount / 12) * 100);
    let message = `Congratulations ${name}! Your score: ${scoreText} (${percentage}%)`;
    let severity = 'success';
    
    if (percentage < 50) {
      message = `${name}, your score: ${scoreText} (${percentage}%). Keep practicing!`;
      severity = 'error';
    } else if (percentage < 75) {
      message = `Good job ${name}! Your score: ${scoreText} (${percentage}%). You can do better!`;
      severity = 'warning';
    }

    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        pb: 4
      }}>
        <Header />
        
        <Box sx={{ px: 2 }}>
          <UserInfo 
            name={name} 
            setName={setName} 
            score={score} 
          />
          
          <ActionButtons 
            onReset={handleReset}
            onSubmit={handleSubmit}
            resetDialogOpen={resetDialogOpen}
            setResetDialogOpen={setResetDialogOpen}
            selectedAnswersCount={Object.keys(selectedAnswers).length}
          />
          
          <QuestionGrid 
            questions={questions}
            selectedAnswers={selectedAnswers}
            onAnswerSelect={handleAnswerSelect}
            incorrectAnswers={incorrectAnswers}
            isSubmitted={isSubmitted}
          />
        </Box>

        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert 
            onClose={handleSnackbarClose} 
            severity={snackbarSeverity}
            sx={{ 
              width: '100%',
              borderRadius: 2,
              fontWeight: 'bold'
            }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>

        {/* Copyright Footer */}
        <Box sx={{ 
          textAlign: 'center', 
          mt: 4, 
          py: 2,
          borderTop: '1px solid #e0e0e0',
          backgroundColor: 'rgba(255, 255, 255, 0.8)'
        }}>
          <Typography 
            variant="body2" 
            sx={{ 
              color: '#666',
              fontSize: '0.9rem'
            }}
          >
            Copyright: www.mathinenglish.com
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
