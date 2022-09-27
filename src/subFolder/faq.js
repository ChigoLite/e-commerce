import { Box, Typography,Accordion,AccordionSummary,AccordionDetails } from '@mui/material';
import React from 'react';
import Nav from '../Components/nav';
import { FaArrowDown } from 'react-icons/fa';

const Faq = () => {
    return (
        <>
            <Nav />
            <br/>
      <Box>
      <Typography sx={{textAlign:'center'}}>Frequent Asked Question.</Typography>
    </Box>

        <Box>
            <Accordion>
        <AccordionSummary
          expandIcon={<FaArrowDown />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Should I sign in always?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<FaArrowDown />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Is the delivery free?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<FaArrowDown />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Can I reach a premium level?</Typography>
            </AccordionSummary>
             <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
      </>
  );
}

export default Faq;
