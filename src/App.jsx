import { useState } from "react";
import config from "./config/config";
// import {useDispatch} from 'react-redux'
import authService from '../src/appwrite/auth'



function App() {
   const [loading, setLoading] = useState(true)
  //  const dispatch = useDispatch();
 
  return (
<>
<h1 className="text-white">A mega project using appwrite</h1>
</>
  )
}

export default App
