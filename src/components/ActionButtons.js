import React from 'react';
import { Box, Button, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText } from '@mui/material';
import { RestartAlt, Send } from '@mui/icons-material';

const ActionButtons = ({ onReset, onSubmit, resetDialogOpen, setResetDialogOpen, selectedAnswersCount }) => {
  // Function to show reset dialog
  const handleResetClick = () => {
    setResetDialogOpen(true);
  };

  // Function to confirm reset
  const handleResetConfirm = () => {
    onReset();
    setResetDialogOpen(false);
  };

  // Function to cancel reset
  const handleResetCancel = () => {
    setResetDialogOpen(false);
  };

  return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      gap: 3, 
      mb: 4 
    }}>
      <Button
        variant="outlined"
        size="large"
        startIcon={<RestartAlt />}
        onClick={handleResetClick}
        disabled={selectedAnswersCount === 0}
        sx={{
          px: 4,
          py: 1.5,
          borderRadius: 3,
          borderColor: '#ff6b6b',
          color: '#ff6b6b',
          fontWeight: 'bold',
          textTransform: 'none',
          fontSize: '1.1rem',
          transition: 'all 0.3s ease',
          '&:hover': {
            borderColor: '#ff5252',
            backgroundColor: '#ff6b6b',
            color: 'white',
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 20px rgba(255, 107, 107, 0.3)'
          },
          '&:disabled': {
            borderColor: '#ccc',
            color: '#999',
            cursor: 'not-allowed'
          }
        }}
      >
        Reset
      </Button>
      
      <Button
        variant="contained"
        size="large"
        startIcon={<Send />}
        onClick={onSubmit}
        sx={{
          px: 4,
          py: 1.5,
          borderRadius: 3,
          background: 'linear-gradient(135deg, #4caf50 0%, #45a049 100%)',
          fontWeight: 'bold',
          textTransform: 'none',
          fontSize: '1.1rem',
          transition: 'all 0.3s ease',
          '&:hover': {
            background: 'linear-gradient(135deg, #45a049 0%, #3d8b40 100%)',
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 20px rgba(76, 175, 80, 0.4)'
          }
        }}
      >
        Submit
      </Button>

      <Dialog
        open={resetDialogOpen}
        onClose={handleResetCancel}
        PaperProps={{
          sx: {
            borderRadius: 3,
            p: 1
          }
        }}
      >
        <DialogTitle sx={{ fontWeight: 'bold', color: '#333' }}>
          Reset Confirmation
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ fontSize: '1.1rem' }}>
            Are you sure you want to reset the form? This will clear all your answers and cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ p: 2, gap: 1 }}>
          <Button 
            onClick={handleResetCancel}
            sx={{ 
              borderRadius: 2,
              textTransform: 'none',
              fontWeight: 'bold'
            }}
          >
            Cancel
          </Button>
          <Button 
            onClick={handleResetConfirm} 
            variant="contained"
            color="error"
            sx={{ 
              borderRadius: 2,
              textTransform: 'none',
              fontWeight: 'bold'
            }}
          >
            Yes, Reset
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ActionButtons;
