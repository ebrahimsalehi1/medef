import React from 'react';
import { Form } from 'formik';
import { makeStyles, Box, FormHelperText } from '@mui/material';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {},
  errorText: {
    backgroundColor: 'red',
    color: 'white !important',
    textAlign: 'center',
    padding: '15px',
    fontSize: '12px !important',
    borderRadius: '5px'
  },
  submitText: {
    backgroundColor: 'green',
    color: 'white !important',
    textAlign: 'center',
    padding: '15px',
    fontSize: '12px !important',
    borderRadius: '5px'
  }
}));

export default function BaseForm(props) {
  const { message, status } = props;
  const classes = useStyles();

  return (
    <Form {...props}>
      {message && status && (
        <Box mt={2} mb={2}>
          <FormHelperText
            className={
              status.success && message.submit
                ? classes.submitText
                : status.success == false && message.error
                ? classes.errorText
                : ''
            }
          >
            {status.success === true ? message.submit : message.error}
          </FormHelperText>
        </Box>
      )}
      {props.children}
    </Form>
  );
}

BaseForm.propTypes = {
  /**
   * The content of the button.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * status of message
   * true: submit
   * false: error
   */
  status: PropTypes.bool,
  /**
   * message content
   * message.submit:  message of submit condition
   * message.error: message of error condition
   */
  message: PropTypes.object
};
