import { themeModeSlice } from "@features/theme-mode"
import { combineReducers } from "@reduxjs/toolkit"
import { baseApi } from "@shared/api/base-api"

export const appReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  [themeModeSlice.name]: themeModeSlice.reducer,
})
