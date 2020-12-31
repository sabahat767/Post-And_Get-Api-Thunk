
import React,{useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {fetchPost}  from '../store/Slicer/PostSlice'
function Post() {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts )

    useEffect(()=>{
        dispatch(fetchPost())
    },[])

    console.log('....',posts)
    return (
        <div>
            {/* <button onClick={()=>dispatch(fetchPost())}>Post</button> */}
          
            {
               posts.map(( post)=>(
                    <div key={ post.id}>
                         <h2>Id:{ post.id}</h2>
                        <h4>Title:{ post.title}</h4>
                    <p>Body:{post.body}</p>
                     </div>
                ))
            }
    
        </div>
    )
}

export default Post
