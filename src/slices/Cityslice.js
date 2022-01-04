import { createSlice } from '@reduxjs/toolkit'


const cityslice = createSlice({
  name: 'city',
  initialState:{
      city:'Jaipur'
  },
  reducers: {
    changecity(state,action){
        state.city = action.payload
    }
  },
})
export const {changecity} = cityslice.actions
export default cityslice.reducer