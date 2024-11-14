import React, { useState, useRef } from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  TextField, 
  Select, 
  MenuItem, 
  FormControl, 
  InputLabel,
  Grid,
  IconButton,
  Snackbar
} from '@mui/material';
import { 
  DragIndicator as DragIcon, 
  Delete as DeleteIcon,
  Add as AddIcon
} from '@mui/icons-material';

const fieldTypes = [
  { type: 'text', label: 'Text Input' },
  { type: 'email', label: 'Email Input' },
  { type: 'number', label: 'Number Input' },
  { type: 'select', label: 'Select Dropdown' },
];

export default function MUIAccountFormBuilder() {
  const [fields, setFields] = useState([]);
  const [draggingField, setDraggingField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const dragOverItem = useRef();

  const onDragStart = (e, field) => {
    setDraggingField(field);
  };

  const onDragEnter = (e, position) => {
    dragOverItem.current = position;
  };

  const onDragEnd = (e) => {
    const newFields = [...fields];
    if (draggingField && !fields.find(f => f.id === draggingField.id)) {
      const newField = {
        ...draggingField,
        id: `field-${Date.now()}`,
        label: `New ${draggingField.type} field`,
        options: draggingField.type === 'select' ? ['Option 1', 'Option 2'] : undefined
      };
      newFields.splice(dragOverItem.current, 0, newField);
    } else if (draggingField) {
      const dragItemIndex = newFields.findIndex(f => f.id === draggingField.id);
      newFields.splice(dragItemIndex, 1);
      newFields.splice(dragOverItem.current, 0, draggingField);
    }
    setFields(newFields);
    setDraggingField(null);
    dragOverItem.current = null;
  };

  const removeField = (id) => {
    setFields(fields.filter(field => field.id !== id));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulating a server request
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the form structure to your backend
      console.log('Form submitted with fields:', fields);
      
      setSnackbarMessage('Form submitted successfully');
      setSnackbarOpen(true);
    } catch (error) {
      setSnackbarMessage('Error submitting form. Please try again.');
      setSnackbarOpen(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderField = (field) => {
    switch (field.type) {
      case 'text':
      case 'email':
      case 'number':
        return (
          <TextField
            fullWidth
            type={field.type}
            label={field.label}
            variant="outlined"
            margin="normal"
          />
        );
      case 'select':
        return (
          <FormControl fullWidth margin="normal">
            <InputLabel>{field.label}</InputLabel>
            <Select label={field.label}>
              {field.options.map((option, index) => (
                <MenuItem key={index} value={option}>{option}</MenuItem>
              ))}
            </Select>
          </FormControl>
        );
      default:
        return null;
    }
  };

  return (
    <Box sx={{ maxWidth: 800, margin: 'auto', padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Account Form Builder
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Field Palette
              </Typography>
              {fieldTypes.map((fieldType) => (
                <Box
                  key={fieldType.type}
                  draggable
                  onDragStart={(e) => onDragStart(e, fieldType)}
                  sx={{
                    padding: 1,
                    marginBottom: 1,
                    border: '1px dashed grey',
                    cursor: 'move',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <DragIcon sx={{ marginRight: 1 }} />
                  <Typography>{fieldType.label}</Typography>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Form Preview
              </Typography>
              <form onSubmit={handleSubmit}>
                {fields.map((field, index) => (
                  <Box
                    key={field.id}
                    draggable
                    onDragStart={(e) => onDragStart(e, field)}
                    onDragEnter={(e) => onDragEnter(e, index)}
                    onDragEnd={onDragEnd}
                    sx={{
                      padding: 2,
                      marginBottom: 2,
                      border: '1px solid #e0e0e0',
                      borderRadius: 1,
                    }}
                  >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <DragIcon sx={{ marginRight: 1, cursor: 'move' }} />
                        <Typography>{field.label}</Typography>
                      </Box>
                      <IconButton onClick={() => removeField(field.id)} size="small">
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                    {renderField(field)}
                  </Box>
                ))}
                {fields.length > 0 && (
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                    startIcon={isSubmitting ? <AddIcon /> : null}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Form'}
                  </Button>
                )}
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        message={snackbarMessage}
      />
    </Box>
  );
}