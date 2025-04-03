import{createSlice} from '@reduxjs/toolkit'

const fetchStateSlice=createSlice({
    name:"fetchStatus",
    initialState:{
      fetchingDone:false,
      currentlyFetching:false,
    },
    reducers:{
      markFetchingDone:(store)=>{
         store.fetchingDone=true;
      },
      markFetchingStarted:(store)=>{
         store.currentlyFetching=true;
      },
      markFetchingEnded:(store)=>{
         store.currentlyFetching=false;
      }
    }
})
export const fetchStateActions=fetchStateSlice.actions
export default fetchStateSlice
