import React from 'react';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/material';
import PropTypes from 'prop-types';


export default function EBGrid(props) {
  if(props.container)
    return <Grid spacing={2} {...props} />;
  else
  return <Grid {...props} />;
}

EBGrid.propTypes = {

};
