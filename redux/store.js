import {combineReducers} from '@reduxjs/toolkit';
import {configureStore} from '@reduxjs/toolkit';
import User from './reducers/User';
import Category from './reducers/Category';
import Donation from './reducers/Donation';
import Profile from './reducers/Profile';

const rootReducer = combineReducers({
  user: User,
  category: Category,
  donation: Donation,
  profile: Profile,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;
