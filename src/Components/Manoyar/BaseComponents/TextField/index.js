import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiOutlinedInput-root': {
      backgroundColor: theme.palette.background.default
    }
  }
}));


export default function EBTextField(props) {
  const classes = useStyles();

  return <TextField className={classes.root} {...props} variant="outlined" />;
}

EBTextField.propTypes = {
  
};
