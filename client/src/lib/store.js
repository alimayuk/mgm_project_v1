import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authApi } from './services/auth'
import { galleryApi } from './services/gallery'
export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [galleryApi.reducerPath]: galleryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, galleryApi.middleware),
})

setupListeners(store.dispatch)