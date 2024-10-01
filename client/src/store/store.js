import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import authReducer from './slice/authSlice';
import adminProductSlice from './slice/admin/adminProductSlice'
import shoppingProductsSlice from './slice/shop/shoppingProductsSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedAdminProductReducer = persistReducer(persistConfig, adminProductSlice); 
const persistedShoppingProductReducer = persistReducer(persistConfig, shoppingProductsSlice); 

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    adminProducts: persistedAdminProductReducer,

    shopProducts: persistedShoppingProductReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'persist/PERSIST',
          'persist/REHYDRATE',
        ],
        ignoredPaths: ['auth.register'], // Adjust this based on your state structure
      },
    }),
});

export const persistor = persistStore(store);
export default store;
