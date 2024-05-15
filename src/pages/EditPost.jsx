import React, { useEffect, useState } from 'react'
import { Container, PostForm } from '../components/index'
import { useNavigate, useParams } from 'react-router-dom'
import appwriteService from '../appwrite/configuration'
function EditPost() {
    const slug = useParams()
    const [post, setPost] = useState(null)
    const navigate = useNavigate()

    useEffect(()=> {
        if (slug) {
            appwriteService.getPost(slug).then((post)=> {
                if (post) {
                    setPost(post)
                }
            })
        }
        else {
            navigate('/')
        }
    }, [])
  return post? (
    <div className='py-8'>
        <Container>
<PostForm post={post}/>
        </Container>
    </div>
  ) : null
}

export default EditPost
