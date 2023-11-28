
import Navbar from './components/navbar/Navbar'
import Singin from './pages/Singin'
import Signup from './pages/Signup'
import {Routes,Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import EmailVerification from './components/auth/EmailVerification'
import ForgotPassword from './components/auth/ForgotPassword'
import ConfirmPassword from './components/auth/ConfirmPassword'

import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from './redux/action'
import AdminNavigator from './navigator/AdminNavigator'
import { useEffect } from 'react'

const App = () => {
 
  const authToken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTQ1ZjhlNmVjMTM5OWRlMmQ4MjE4YiIsImlhdCI6MTY5MjY4ODI3MCwiZXhwIjoxNzI0MjI0MjcwfQ.C-hLwdQYwB885aH7QP7mviffxxGHYRByHevU8Lvg3Uc';
 const dispatch = useDispatch();



  const fetchUser = async()=>{
    try {
      const result = await loadUser(authToken);
      if(result?.data?.data){
      dispatch({type:"user",payload:result?.data?.data})
      }
  
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(()=>{
    
    fetchUser()
  
  },[])
  
  
  
  const {userDetails}= useSelector(state=>state.user);

const isAdmin= userDetails?.role==='admin';

   if(isAdmin) return <AdminNavigator/>
  return (
    <>
   
   <Navbar/>
   <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/auth/signin' element={<Singin/>}/>
    <Route path='/auth/signup' element={<Signup/>}/>
    <Route path='/auth/verification' element={<EmailVerification/>}/>
    <Route path='/auth/forgot-password' element={<ForgotPassword/>}/>
    <Route path='/auth/confirm-password' element={<ConfirmPassword/>}/>
   
   </Routes>
    </>

  )
}

export default App