import React from 'react';
 import { useFormik } from 'formik';
import {useState} from 'react'
function AddPost() {
  const[title, settitle] = useState({title: ''})
  const[body, setbody] = useState({body: ''})

  const handleChange=e=>{
    settitle({title:e.target.value})
    setbody({body:e.target.value})

  }
  const handleSubmit=e=>{
    console.log(title)
    console.log(body)
    
  }
  //  const formik = useFormik({
  //   //  initialValues: {
  //   //    title: '',
  //   //    body: '',
      
  //   //  },
  //    handleChange:e=>{
  //        settitle({title:e.target.value,body:e.target.value})
  //        console.log(title)
  //   },
  //    onSubmit: values => {
  //     // alert(JSON.stringify(values, null, 2));
  //    },
  //  });
   return (
     <form onSubmit={handleSubmit}>
       <label htmlFor="title">Title</label>
       <input
         id="title"
         name="title"
         type="text"
         onChange={handleChange}
         //value={formik.values.title}
       />
       <label htmlFor="body">Body</label>
       <input
         id="body"
         name="body"
         type="text"
         onChange={handleChange}
         //value={formik.values.body}
       />
       
       <button type="submit">Submit</button>
     </form>
   );
 };
       
export default AddPost
