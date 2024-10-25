import { createApi } from "@reduxjs/toolkit/query/react"

import { baseQuery } from "./base-query"
import { tagTypes } from "./tag-types"

export const baseApi = createApi({
  baseQuery,
  endpoints: () => ({}),
  reducerPath: "api",
  refetchOnFocus: true,
  tagTypes,
})
