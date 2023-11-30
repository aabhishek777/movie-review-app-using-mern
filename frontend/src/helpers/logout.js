import { useDispatch } from "react-redux";


const dispatch= useDispatch();

export const logOut= ()=>{
    localStorage.setItem('auth-token',null);
    dispatch('LOGOUT_USER')
}