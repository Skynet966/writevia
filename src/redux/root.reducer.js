import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import appReducer from './app/app.reducer';
import userReducer from './user/user.reducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['app']
};

const rootReducer = combineReducers({
	app: appReducer,
	user: userReducer
});

export default persistReducer(persistConfig, rootReducer);
