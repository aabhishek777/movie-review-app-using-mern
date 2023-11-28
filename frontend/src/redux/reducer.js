import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer({}, builder=>{
    builder.addCase('user', (state, action)=>{
        state.userDetails=action.payload
    })
});