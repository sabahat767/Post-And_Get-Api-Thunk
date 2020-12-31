import { configureStore } from '@reduxjs/toolkit';
import FetchPostData from './Slicer/PostSlice'
const store = configureStore({
    reducer: FetchPostData,
})
export default store