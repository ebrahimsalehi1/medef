import React from 'react';
import Switch from '@mui/material/Switch';
import { makeStyles } from '@mui/material';
import PropTypes from 'prop-types';
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiOutlinedInput-root': {
      backgroundColor: theme.palette.background.default
    }
  }
}));


export default function EBSwitch(props) {
  const classes = useStyles();
  const {label} = props;

//<Switch className={classes.root} {...props} variant="outlined" />
  return (
    <FormGroup>
      <FormControlLabel disabled control={<Switch className={classes.root} {...props} variant="outlined"/>} label={label} />
    </FormGroup>
  );

}

EBSwitch.propTypes = {

};
