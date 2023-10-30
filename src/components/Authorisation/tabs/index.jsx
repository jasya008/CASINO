import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import s from './index.module.scss'
import { LoginContent } from '../content_authorisation/LoginContent';
import { RegistrationContent } from '../content_authorisation/RegistrationContent';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '70%', display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Box >
        <Tabs value={value} onChange={handleChange} >
          <Tab className={s.tab} label="Вход" {...a11yProps(0)} />
          <Tab className={s.tab} label="Регистрация" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <LoginContent />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <RegistrationContent />
      </CustomTabPanel>

    </Box>
  );
}
