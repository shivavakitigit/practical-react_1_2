import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Card, CardContent, Typography, Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const TEMPLATES = [
  { id: 'accountCreation', label: 'Account Creation Form', icon: <AccountCircleIcon /> },
  { id: 'termination', label: 'Termination Form', icon: <ExitToAppIcon /> },
];

function FormTemplates() {
  return (
    <>
      {TEMPLATES.map((template, index) => (
        <Draggable key={template.id} draggableId={template.id} index={index}>
          {(provided) => (
            <Card
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              sx={{
                mb: 2,
                cursor: 'pointer',
                transition: 'transform 0.2s',
                '&:hover': { transform: 'scale(1.05)' },
                bgcolor: '#e3f2fd',
                color: '#0d47a1',
              }}
            >
              <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                <Box mr={2}>{template.icon}</Box>
                <Typography variant="body1">{template.label}</Typography>
              </CardContent>
            </Card>
          )}
        </Draggable>
      ))}
    </>
  );
}

export default FormTemplates;
