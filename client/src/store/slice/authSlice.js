import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";


export const registerUser=createAsyncThunk("/auth/register",async(formData)=>{

    const response=await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/register`,
        formData,
        {
            withCredentials:true,
        }
    );
    //console.log(response);
    return response.data;
})
export const loginUser=createAsyncThunk("/auth/login",async(formData)=>{

    const response=await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`,
        formData,
        {
            withCredentials:true,
        }
    );
    //console.log(response);
    return response.data;
})

// export const checkAuth=createAsyncThunk("/auth/check-auth",async()=>{

//     const response=await axios.get(`${import.meta.env.VITE_API_URL}/api/auth/check-auth`,
//         {
//             withCredentials:true,
//             headers:{
//                 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
//                 Expires: '0',
//             }
            
//         }
//     );
//     //console.log(response);
//     return response.data;
// })

export const checkAuth=createAsyncThunk("/auth/check-auth",async(token)=>{

    const response=await axios.get(`${import.meta.env.VITE_API_URL}/api/auth/check-auth`,
        {
            withCredentials:true,
            headers:{
                Authorization: `Bearer ${token}`,
                'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
                Expires: '0',
            }
            
        }
    );
    //console.log(response);
    return response.data;
})

export const logoutUser = createAsyncThunk(
    "/auth/logout",
  
    async () => {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/logout`,
        {},
        {
          withCredentials: true,
        }
      );
  
      return response.data;
    }
  );

const authSlice=createSlice({
    name: 'auth',
    initialState:{
        isAuthenticated: false,
        isLoading: true,
        user: null,
        token: null,
    },
    reducers:{
        setuser(state,action){

        },
        resetTokenCredentials:(state)=>{
            state.isAuthenticated = false;
            state.user = null;
            state.token = null;
        }
    },

    extraReducers:(builder)=>{
        builder
        .addCase(registerUser.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(registerUser.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.user=null;
            state.isAuthenticated=false;
            // console.log(action)
            // console.log(registerUser())

        })
        .addCase(registerUser.rejected, (state)=>{
            state.isLoading=false;
            state.user=null;
            state.isAuthenticated=false;
        })
        .addCase(loginUser.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(loginUser.fulfilled,(state,action)=>{

            console.log(action);
            state.isLoading=false;
            state.user= action.payload.success ? action.payload.user : null;
            state.isAuthenticated = action.payload.success;
            state.token = action.payload.token;
            sessionStorage.setItem('token' , JSON.stringify(action.payload.token));
            // console.log(registerUser())

        })
        .addCase(loginUser.rejected, (state)=>{
            state.isLoading=false;
            state.user=null;
            state.isAuthenticated=false;
            state.token= null;
        })
        .addCase(checkAuth.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(checkAuth.fulfilled,(state,action)=>{

            console.log(action);
            state.isLoading=false;
            state.user= action.payload.success ? action.payload.user : null;
            if(action.payload.success)
                state.isAuthenticated=true;
            // console.log(action)
            // console.log(registerUser())

        })
        .addCase(checkAuth.rejected, (state)=>{
            state.isLoading=false;
            state.user=null;
            state.isAuthenticated=false;
        })
        .addCase(logoutUser.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(logoutUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = null;
            state.isAuthenticated = false;
          });


    }
})

export const {setuser, resetTokenCredentials}=authSlice.actions;
export default authSlice.reducer;
