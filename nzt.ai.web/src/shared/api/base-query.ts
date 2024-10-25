import { fetchBaseQuery } from "@reduxjs/toolkit/query"
import { ENV } from "@shared/config"

const baseUrl = ENV.BASE_URL

export const baseQuery = fetchBaseQuery({
  baseUrl,
  credentials: "include",
})
