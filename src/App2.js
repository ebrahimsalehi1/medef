import React, { useEffect } from 'react';
import { create } from 'jss';
import rtl from 'jss-rtl';
import MomentUtils from '@date-io/moment';
import { SnackbarProvider } from 'notistack';
import { jssPreset, StylesProvider, ThemeProvider } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import GlobalStyles from 'src/components/GlobalStyles';
import ScrollReset from 'src/components/ScrollReset';
import { AuthProvider } from 'src/contexts/JWTAuthContext';
import useSettings from 'src/hooks/useSettings';
import { createTheme } from 'src/theme';
import routes, { renderRoutes } from 'src/routes';
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';
import getUrlParams from './utils/getUrlParams';
import { withRouter } from 'react-router';
// import AtrDataProvider from './views/irisa/StateManagement/context/index';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function App(props) {
  const { settings, saveSettings } = useSettings();
  localStorage.setItem('accessToken', getUrlParams(props, 'accessToken'));

  useEffect(() => {
    let settings_temp = {
      direction: getUrlParams(props, 'direction'),
      responsiveFontSizes: getUrlParams(props, 'responsiveFontSizes'),
      theme: getUrlParams(props, 'theme')
    };
    saveSettings(settings_temp);
  }, []);

  const theme = createTheme({
    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes,
    theme: settings.theme
  });

  return (
    <ThemeProvider theme={theme}>
      <StylesProvider jss={jss}>
        <CssBaseline />
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <SnackbarProvider dense maxSnack={3}>
            <AuthProvider>
              <GlobalStyles />
              <ScrollReset />
              {/* <AtrDataProvider> */}
              {renderRoutes(routes)}
              {/* </AtrDataProvider> */}
            </AuthProvider>
          </SnackbarProvider>
        </MuiPickersUtilsProvider>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default withRouter(App);
