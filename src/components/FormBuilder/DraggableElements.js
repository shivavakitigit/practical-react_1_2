import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Card, CardContent, Typography } from '@mui/material';

const ELEMENTS = [
  { id: 'name', label: 'Full Name', type: 'text' },
  { id: 'email', label: 'Email', type: 'email' },
  { id: 'password', label: 'Password', type: 'password' },
  { id: 'address', label: 'Address', type: 'text' },
  { id: 'phone', label: 'Phone Number', type: 'tel' },
];

function DraggableElements() {
  return (
    <>
      {ELEMENTS.map((element, index) => (
        <Draggable key={element.id} draggableId={element.id} index={index}>
          {(provided) => (
            <Card
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              sx={{ mb: 1 }}
            >
              <CardContent>
                <Typography variant="body1">{element.label}</Typography>
              </CardContent>
            </Card>
          )}
        </Draggable>
      ))}
    </>
  );
}

export default DraggableElements;
