import React from 'react'
import appwriteService from '../appwrite/configuration'
import {Link} from 'react-router-dom'
function PostCard({$id, title, featuredImage}) {
  return (
    <Link to = {`/post/${$id}`} >
    
    </Link>
  )
}

export default PostCard
