import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { LoaderProvider, Puff } from '@agney/react-loading';
import { store, persistor } from './redux/store';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import App from './App';
import reportWebVitals from './reportWebVitals';

Axios.defaults.baseURL = 'https://writevia-backend.herokuapp.com';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<PersistGate persistor={persistor}>
					<LoaderProvider indicator={<Puff width='50' />}>
						<App />
					</LoaderProvider>
				</PersistGate>
			</Router>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
