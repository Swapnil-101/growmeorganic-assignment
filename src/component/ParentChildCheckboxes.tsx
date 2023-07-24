import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, FormGroup, FormControlLabel, Checkbox, ThemeProvider, createTheme } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Department {
    department: string;
    sub_departments: string[];
}

const departmentData: Department[] = [
    {
        department: 'customer_service',
        sub_departments: ['support', 'customer_success'],
    },
    {
        department: 'design',
        sub_departments: ['graphic_design', 'product_design', 'web_design'],
    },
];

const ParentChildCheckboxes: React.FC = () => {
    const [checkedItems, setCheckedItems] = React.useState<{ [key: string]: boolean }>({});

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckedItems({
            ...checkedItems,
            [event.target.name]: event.target.checked,
        });
    };

    // Custom theme with orange color and top margin
    const theme = createTheme({
        palette: {
            primary: {
                main: '#FFA500', // Orange color
            },
        },
        spacing: 2, // Top margin
    });

    return (
        <ThemeProvider theme={theme}>
            {departmentData.map((department) => (
                <Accordion key={department.department} defaultExpanded>
                    {/* Set defaultExpanded to true */}
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel-${department.department}-content`} id={`panel-${department.department}-header`}>
                        <FormControlLabel
                            control={<Checkbox checked={checkedItems[department.department] || false} onChange={handleCheckboxChange} name={department.department} color="primary" />}
                            label={department.department}
                        />
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormGroup style={{ marginLeft: 30 }}>
                            {department.sub_departments.map((subDept) => (
                                <FormControlLabel
                                    key={subDept}
                                    control={<Checkbox checked={checkedItems[subDept] || false} onChange={handleCheckboxChange} name={subDept} color="primary" />}
                                    label={subDept}
                                />
                            ))}
                        </FormGroup>
                    </AccordionDetails>
                </Accordion>
            ))}
        </ThemeProvider>
    );
};

export default ParentChildCheckboxes;
