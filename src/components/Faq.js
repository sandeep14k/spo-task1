import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const FAQItem = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion expanded={expanded} sx={{marginBottom:"2%"}}>
      <AccordionSummary
        expandIcon={expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        onClick={toggleExpansion}
      >
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{answer}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default FAQItem;
