import{createSlice} from '@reduxjs/toolkit'
const itemSlice=createSlice({
    name:"items",
    initialState:[],
    reducers:{
      addInitalItems:(store,action)=>{
        // console.log(store,action)
        return action.payload
      }
    }
})
export const itemActions=itemSlice.actions
export default itemSlice
