import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import { elementAcceptingRef } from '@material-ui/utils';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';


export default function EBTooltip(props) {
  return <Tooltip {...props} />;
}

EBTooltip.propTypes = {

};
