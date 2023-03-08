import './index.css';

import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './components/App/App';
import { configureStore } from './configureStore';
import * as serviceWorker from './serviceWorker';
import { StrictMode } from 'react';

// ReactDOM.render(
//   <StrictMode>
//     <Provider store={configureStore()}>
//       <App />
//     </Provider>
//   </StrictMode>,
//   document.getElementById('root'),
// );

// React 18
const root = createRoot(document.getElementById('root'));
root.render(
  // <StrictMode>
    <Provider store={configureStore()}>
      <App />
    </Provider>
  // </StrictMode>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
