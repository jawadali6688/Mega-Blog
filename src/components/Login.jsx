import React, {useState} from 'react'
import { login as authLogin } from '../store/authSlice'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import {Link, useNavigate} from 'react-router-dom'
import {Logo, Button, Input} from './index'
import authService from '../appwrite/auth'
function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const {register, handleSubmit} = useForm()
  const [error, setError] = useState("")

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data)
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate("/")
      }
    } catch (error) {
      setError(error)
    }
  }
  return (
    <div
    className='flex items-center justify-center w-full'>
      <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>

      </div>
      
    </div>
  )
}

export default Login
