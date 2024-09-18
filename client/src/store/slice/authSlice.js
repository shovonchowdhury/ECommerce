import { createSlice } from "@reduxjs/toolkit"


const authSlice=createSlice({
    name: 'auth',
    initialState:{
        isAuthenticated: false,
        isLoading: false,
        user: null
    },
    reducers:{
        setuser(state,action){

        }
    }
})

export const {setuser}=authSlice.actions;
export default authSlice.reducer;
