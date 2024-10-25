import { themeModeSlice } from "@features/theme-mode"
import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { baseApi } from "@shared/api/base-api"
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist"
import storage from "redux-persist/lib/storage"

import { appReducer } from "./app-reducer"

const persistConfig = {
  key: "root",
  storage,
  whitelist: [themeModeSlice.name],
}

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
  reducer: persistReducer(persistConfig, appReducer),
})

setupListeners(store.dispatch)

export const persistor = persistStore(store)
