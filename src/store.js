import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './redux/userSlice'
import { userTokenSlice } from './redux/userTokenSlice'


export const store = configureStore({
  reducer: {
    userData: userSlice.reducer,
    userToken: userTokenSlice.reducer
  },
})