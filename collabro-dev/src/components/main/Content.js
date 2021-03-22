import { Tab, Tabs } from '@material-ui/core';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import React from 'react';
import { StylesContext } from '../../styles/Styles';
import { ScienceComponent } from '../science_components/ScienceComponent';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      style={{width:"100%"}}
      {...other}
    >
      {value === index && (
        <Container fluid="md">
          {children}
        </Container>
      )}
    </div>
  );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
  }

export const ContentComponent = () => {

    const classes = React.useContext(StylesContext);
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    return(
        <>
            <div className={classes.contentTabPanel}>
                <Tabs orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        className={classes.tabs}>
                <Tab label="Science" {...a11yProps(0)} />
                <Tab label="Watch This Space!!" {...a11yProps(1)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <ScienceComponent/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Watch this space !!!
                </TabPanel>
            </div>
        </>
    )
}