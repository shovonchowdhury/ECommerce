import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './slice/authSlice';
import adminProductSlice from './slice/admin/adminProductSlice';
import adminOrderSlice from './slice/admin/adminOrderSlice';
import shoppingProductSlice from './slice/shop/shoppingProductsSlice';
import shoppingCartSlice from './slice/shop/shoppingCartSlice';
import shoppingAddressSlice from './slice/shop/shoppingAddressSlice';
import shoppingOrderSlice from './slice/shop/shoppingOrderSlice'
import shoppingSearchSlice from './slice/shop/searchSlice';
import shoppingReviewSlice from './slice/shop/shoppingReviewSlice';
import commonFeatureSlice from './slice/commonSlice'



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
const persistedAdminOrderReducer = persistReducer(persistConfig, adminOrderSlice);
const persistedShoppingProductReducer = persistReducer(shoppingProductsPersistConfig, shoppingProductSlice);
const persistedShoppingCartReducer = persistReducer(persistConfig, shoppingCartSlice);
const persistedShoppingAddressReducer = persistReducer(persistConfig, shoppingAddressSlice);
const persistedShoppingOrderReducer = persistReducer(shoppingOrderPersistConfig, shoppingOrderSlice);
const persistedShoppingSearchReducer = persistReducer(persistConfig, shoppingSearchSlice);
const persistedShoppingReviewReducer = persistReducer(persistConfig, shoppingReviewSlice);
const persistedCommonFeatureReducer = persistReducer(persistConfig, commonFeatureSlice);


const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    adminProducts: persistedAdminProductReducer,
    adminOrder: persistedAdminOrderReducer,
    
    shopProducts: persistedShoppingProductReducer, // Excluding productDetails
    shopCart: persistedShoppingCartReducer,
    shopAddress: persistedShoppingAddressReducer,
    shopOrder: persistedShoppingOrderReducer,
    shopSearch: persistedShoppingSearchReducer,
    shopReview: persistedShoppingReviewReducer,

    commonFeature: persistedCommonFeatureReducer,
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
