import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import appReducer from './app/app.reducer';
import userReducer from './user/user.reducer';
import categoriesReducer from './categories/categories.reducer';
import postReducer from './post/post.reducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['app', 'categoriesReducer']
};

const rootReducer = combineReducers({
	app: appReducer,
	user: userReducer,
	categories: categoriesReducer,
	post: postReducer
});

export default persistReducer(persistConfig, rootReducer);
