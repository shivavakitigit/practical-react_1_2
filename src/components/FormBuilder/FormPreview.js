import React from 'react';
import { TextField, Box } from '@mui/material';

function FormPreview({ elements, formData, onChange }) {
  return (
    <Box>
      {elements.map((element, index) => (
        <TextField
          key={element.id}
          label={element.label}
          variant="outlined"
          fullWidth
          margin="normal"
          type={element.type}
          value={formData[element.id] || ''}
          onChange={(e) => onChange(e, element.id)}
        />
      ))}
    </Box>
  );
}

export default FormPreview;
