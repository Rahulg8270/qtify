
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './Faq.module.css'

const Faq = () => {
    const [expanded, setExpanded] = React.useState(false);
    
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <div className={styles.faqSection}>
            <div className={styles.faqContainer}>
                <header>
                    <h1>FAQs</h1>
                </header>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={{ color: '#34c94b', fontSize: '40' }}/>}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        sx={{ backgroundColor: '#121212;', border: '2px solid #ffffff', borderRadius: '8px' }}
                    >
                        <Typography sx={{ color: '#ffffff;' }}>Is QTify free to use?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        Yes! It is 100% free, and has 0% ads!
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={{ color: '#34c94b', fontSize: '40' }}/>}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                        sx={{ backgroundColor: '#121212;', border: '2px solid #ffffff', borderRadius: '8px' }}
                    >
                        <Typography sx={{ color: '#ffffff;' }}>
                        Can I download and listen to songs offline?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        Sorry, unfortunately we don't provide the service to download any songs.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    )
}

export default Faq