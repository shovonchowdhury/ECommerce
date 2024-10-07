import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './slice/authSlice';
import adminProductSlice from './slice/admin/adminProductSlice';
import shoppingProductSlice from './slice/shop/shoppingProductsSlice';
import shoppingCartSlice from './slice/shop/shoppingCartSlice';
import shoppingAddressSlice from './slice/shop/shoppingAddressSlice';
import shoppingOrderSlice from './slice/shop/shoppingOrderSlice'

// Persist config for shoppingProductsSlice to exclude productDetails
const shoppingProductsPersistConfig = {
  key: 'shoppingProducts',
  storage,
  blacklist: ['productDetails'], // Exclude productDetails from persistence
};


const shoppingOrderPersistConfig = {
  key: 'shoppingOrder',
  storage,
  blacklist: ['approvalURL'], // Exclude productDetails from persistence
};
// General persist config for authReducer and adminProductSlice
const persistConfig = {
  key: 'root',
  storage,
};

// Create persisted reducers
const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedAdminProductReducer = persistReducer(persistConfig, adminProductSlice);
const persistedShoppingProductReducer = persistReducer(shoppingProductsPersistConfig, shoppingProductSlice);
const persistedShoppingCartReducer = persistReducer(persistConfig, shoppingCartSlice);
const persistedShoppingAddressReducer = persistReducer(persistConfig, shoppingAddressSlice);
const persistedShoppingOrderReducer = persistReducer(shoppingOrderPersistConfig, shoppingOrderSlice);


const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    adminProducts: persistedAdminProductReducer,
    shopProducts: persistedShoppingProductReducer, // Excluding productDetails
    shopCart: persistedShoppingCartReducer,
    shopAddress: persistedShoppingAddressReducer,
    shopOrder: persistedShoppingOrderReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
