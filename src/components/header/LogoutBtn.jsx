import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import authSerivice from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutHandler = () =>  {
        authSerivice.logOut()
        .then(()=> 
        dispatch(logout())
    )
    }
  return (
    <div className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
      log out
    </div>
  )
}

export default LogoutBtn
