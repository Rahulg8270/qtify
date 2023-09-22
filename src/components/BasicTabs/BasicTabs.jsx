import * as React from 'react'
import { PropTypes } from 'prop-types'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import styles from "./BasicTabs.module.css"

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

CustomTabPanel.prototype = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function allyProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
export default function BasicTabs({ filteredData }) {
    const [value, setValue] = React.useState(0)

    const handleChange = (event, newValue) => {
        filteredData(newValue)
        setValue(newValue)
        //     console.log('new value is ' + newValue)
    }
    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label='basic tabs' TabIndicatorProps={{
                    style: { backgroundColor: "#34c94b" }
                }} textColor='#34c94b' className={styles.tabs}>
                    <Tab label="all" {...allyProps(0)} />
                    <Tab label="rock" {...allyProps(1)} />
                    <Tab label="pop" {...allyProps(2)} />
                    <Tab label="jazz" {...allyProps(3)} />
                    <Tab label="blues" {...allyProps(4)} />
                </Tabs>
                {/* <CustomTabPanel value={value} index={0}>
                        All
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        Rock
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>
                        Pop
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={3}>
                        Jazz
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={4}>
                        Blues
                    </CustomTabPanel> */}
            </Box>
        </Box>
    )
}