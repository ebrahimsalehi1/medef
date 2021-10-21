import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => createStyles({
  '@global': {
    '*': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
      fontFamily:'IRANSans-web',
      fontSize:'12px',
      fontWeight: 100
    },
    html: {
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      height: '100%',
      width: '100%',
      fontFamily:'IRANSans-web',
    },
    body: {
      height: '100%',
      width: '100%',
      fontFamily:'IRANSans-web',
    },
    '#root': {
      height: '100%',
      width: '100%',
      fontFamily:'IRANSans-web',
    }
  }
}));

const GlobalStyles = () => {
  useStyles();

  return null;
};

export default GlobalStyles;
