import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import IrisaLogo from '../../../../assets/img/IrisaLogo.svg';
import CustomImageLoader from 'custom-image-loader-react';
import { makeStyles } from '@mui/material';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: 10000,
    backgroundColor: 'rgba(256,256,256, 0.3)',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  wrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    zIndex: 10001,
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: '11px',
    color: '#3f51b5',
    margin: '0px',
    animation: '2s linear 0s infinite normal none running flash',
    textAlign: 'center'
  }
}));



export function useEBLoading() {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const showLoading = () => {
    setOpen(true);
  };

  const hideLoading = () => {
    setOpen(false);
  };

  const loading = ({ text, backdrop, image }) => {
    return (
      <>
        {backdrop && <Backdrop className={classes.backdrop} open={open} />}

        <div className={classes.wrapper}>
          <CustomImageLoader
            image={image ? image : IrisaLogo}
            isLoaded={open}
            circle={false}
            speed={2}
            animationType={'flash'}
          />
          {open && text && <p className={classes.text}>{text}</p>}
        </div>
      </>
    );
  };

  return { loading, showLoading, hideLoading };
}

EBLoading.propTypes = {
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
