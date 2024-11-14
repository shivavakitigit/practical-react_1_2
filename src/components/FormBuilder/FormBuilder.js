import React, { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import FormTemplates from './FormTemplates';
import { FORM_FIELDS } from './FormFields';
import { TextField, Paper, Box, Typography, Button } from '@mui/material';

function FormBuilder() {
  const [formInstances, setFormInstances] = useState([]);

  const onDragEnd = (result) => {
    const { destination, draggableId } = result;
    if (!destination) return;

    const newFormInstance = {
      id: `${draggableId}-${Date.now()}`, // Unique ID for each instance
      type: draggableId,
      fields: FORM_FIELDS[draggableId].map((field) => ({ ...field, value: '' })),
    };

    setFormInstances((prev) => [...prev, newFormInstance]);
  };

  const handleFieldChange = (e, formId, fieldId) => {
    setFormInstances((prev) =>
      prev.map((form) =>
        form.id === formId
          ? {
              ...form,
              fields: form.fields.map((field) =>
                field.id === fieldId ? { ...field, value: e.target.value } : field
              ),
            }
          : form
      )
    );
  };

  const handleSubmit = (formId) => {
    const formData = formInstances.find((form) => form.id === formId);
    console.log("Submitted Data:", formData);
    alert(`Form ${formId} submitted! Check console for data.`);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Box display="flex" justifyContent="space-between" p={3} bgcolor="#f1f8e9">
        {/* Left Side: Form Templates */}
        <Paper
          elevation={3}
          sx={{
            width: '30%',
            padding: 2,
            // bgcolor: '#fff3e0',
            borderRadius: 2,
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Typography variant="h6" gutterBottom>
            Form Templates
          </Typography>
          <Droppable droppableId="templates">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <FormTemplates />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </Paper>

        {/* Right Side: Workspace */}
        <Paper
          elevation={3}
          sx={{
            width: '65%',
            padding: 3,
            bgcolor: '#ffffff',
            borderRadius: 2,
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Typography variant="h6" gutterBottom>
            Workspace
          </Typography>
          <Droppable droppableId="workspace">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {formInstances.map((form) => (
                  <Box key={form.id} mb={3} p={2} border="1px solid #ddd" borderRadius={2}>
                    <Typography variant="h6">{form.type.replace(/([A-Z])/g, ' $1')} Form</Typography>
                    {form.fields.map((field) => (
                      <Box key={field.id} mt={1}>
                        <TextField
                          label={field.label}
                          type={field.type}
                          value={field.value}
                          onChange={(e) => handleFieldChange(e, form.id, field.id)}
                          fullWidth
                          variant="outlined"
                          margin="normal"
                        />
                      </Box>
                    ))}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleSubmit(form.id)}
                      sx={{ mt: 2 }}
                    >
                      Submit {form.type.replace(/([A-Z])/g, ' $1')} Form
                    </Button>
                  </Box>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </Paper>
      </Box>
    </DragDropContext>
  );
}

export default FormBuilder;
