import { configureStore } from '@reduxjs/toolkit'

import cityReducer from './slices/Cityslice'

const store = configureStore({
    reducer: cityReducer
})

export default store