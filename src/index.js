import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { LoaderProvider, Puff } from '@agney/react-loading';

import { store, persistor } from './redux/store';

import App from './App';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<PersistGate persistor={persistor}>
					<LoaderProvider indicator={<Puff width='50' />}>
						<App />
					</LoaderProvider>
				</PersistGate>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
