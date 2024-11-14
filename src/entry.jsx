/*
  http://bit.ly/2DTXGpe - `@babel/polyfill` has been deprecated.
  If you need to polyfill certain JS features, uncomment the two imports below.
*/
// import 'core-js/stable'
// import 'regenerator-runtime/runtime' // Needed to polyfill async / await.

/*
  Import our top-level scss file.
  All other scss files should be imported in `styles.scss`.
*/
import './styles/styles.scss'

// Import React.
import React from 'react'
import ReactDOM from 'react-dom'

// Import our top-level component.


const theme = createTheme({
  palette: {
    primary: {
      main: '#0a3d62', // Dark blue for a professional banking feel
    },
    secondary: {
      main: '#82ccdd', // Light blue for highlights
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});
import App from 'components/App'
import { createTheme, ThemeProvider } from '@mui/material';
// Mount our app.
ReactDOM.render(
  <React.StrictMode>
  

    <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  </React.StrictMode>,
  document.getElementById('myElement1'),
)


