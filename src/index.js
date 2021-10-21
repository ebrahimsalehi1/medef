import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'react-quill/dist/quill.snow.css';
import 'prismjs/prism';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'nprogress/nprogress.css';
//import 'src/__mocks__';
// import 'src/assets/css/prism.css';
// import 'src/assets/fonts/iranSans/IRANSans-Bold-web.ttf';
// import 'src/mixins/chartjs';
import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import { enableES5 } from 'immer';
// import * as serviceWorker from 'src/serviceWorker';
// import store from 'src/store';
//import { SettingsProvider } from 'src/contexts/SettingsContext';
import App from './App';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
// import './i18n';
import './index.css';
import reportWebVitals from './reportWebVitals';

const history = createBrowserHistory();

enableES5();
{/* <Provider store={store}> */}
{/* <SettingsProvider> */}
// </SettingsProvider>
// </Provider>

const Index = ()=> (
  <Router history={history}>
    <App />
  </Router>
);

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <Index/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
