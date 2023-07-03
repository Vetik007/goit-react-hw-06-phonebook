import React from 'react';
import ReactDOM from 'react-dom/client';
import { store, persistor } from 'redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import App from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Передаємо store в Provider */}
    <Provider store={store}>
      {/* показуємо спінер поки не завантажиться стор */}
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// ===================================
// poho
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
// import { store, persistor } from 'redux/store';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/es/integration/react';
// // import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <App />
//       </PersistGate>
//     </Provider>
//   </React.StrictMode>
// );

// =====================================
// berest
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react'; // це для того щоб після перезавантаження стора не втрачались дані
// import { store, persistor } from './redux/store';
// import { App } from 'components/App';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     {/* Передаємо store в Provider */}
//     <Provider store={store}>
//       {/* показуємо спінер поки не завантажиться стор */}
//       <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
//         <App />
//       </PersistGate>
//     </Provider>
//   </React.StrictMode>
// );
