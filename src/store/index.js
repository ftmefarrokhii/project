import {createStore}from 'redux';
import {createSlice , configureStore}from '@reduxjs/toolkit';


const initialAuthState = { isAuthenticated:false };

const authSlice = createSlice({
    name:'authentication',
    initialState :initialAuthState,
    reducers : {
        login(state){state.isAuthenticated = true}
        
    }
});
 
const store = configureStore({
 
  reducer :{auth:authSlice.reducer} 

});

export const authActions = authSlice.actions;
export default store;