import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const moviesSlice = createSlice({
    name: "movies",
    initialState:{
        nowPlayingMovies: null,
    },
    reducers:{
        addNowPlayingMovies:(state,action) =>{
            state.nowPlayingMovies = action.payload;
        }
    }

})

export const {addNowPlayingMovies} = moviesSlice.actions;
export default moviesSlice.reducer;