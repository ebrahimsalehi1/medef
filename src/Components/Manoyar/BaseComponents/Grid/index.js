import React from 'react';
import Grid from '@material-ui/core/Grid';
import { elementAcceptingRef } from '@material-ui/utils';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';


export default function EBGrid(props) {
  return <Grid {...props} />;
}

EBGrid.propTypes = {

};
