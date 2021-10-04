import React from 'react';
import { Typography, makeStyles, Modal } from '@material-ui/core';
import PropTypes from 'prop-types';
import { LoopCircleLoading } from 'react-loadingg';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    padding: theme.spacing.unit * 4,
    outline: 'none',
    top: `40%`,
    left: `50%`,
    backgroundColor: 'transparent'
  },
  title: {
    fontSize: '14px',
    marginBottom: '100px'
  }
}));

/**
 * IrisaLoading
 * @visibleName Irisa Loading
 */
export default function IrisaLoading(props) {
  const classes = useStyles();
  const { title, open } = props;
  const color = localStorage.getItem('settings')
    ? JSON.parse(localStorage.getItem('settings'))['theme'] === 'LIGHT'
      ? '#300dbc'
      : '#a67dff'
    : '#300dbc';

  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={open}
      hideBackdrop={true}
    >
      <div className={classes.paper}>
        <LoopCircleLoading
          color={color}
          size={'large'}
          style={{
            display: 'block',
            marginTop: '30px',
            marginLeft: '20px',
            borderColor: color
          }}
        />
        <Typography
          variant="h6"
          id="modal-title"
          className={classes.title}
          style={{ color: color }}
        >
          {title}
        </Typography>
      </div>
    </Modal>
  );
}

IrisaLoading.propTypes = {
  /**
   * If `true`, the loading is showing.
   * @default false
   */
  open: PropTypes.bool,
  /**
   * The title of loading
   */
  title: PropTypes.string
};
