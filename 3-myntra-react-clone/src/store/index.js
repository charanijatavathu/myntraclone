import {configureStore} from '@reduxjs/toolkit'
import itemSlice from './itemSlice'
import fetchStateSlice from './fetchStateSlice'
import bagSlice from './bagSlice'
const MyntraStore=configureStore({
  reducer:{
    items:itemSlice.reducer,
    fetchStatus:fetchStateSlice.reducer,
    bag:bagSlice.reducer
  }
})
export default MyntraStore