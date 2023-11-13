import './BlogCreate.css'
import React, { useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import * as blogService from '../services/blogService';
import { useParams } from 'react-router-dom';

export default function BlogCreate(){

  const editorRef = useRef(null);
  const {id} = useParams();
  
  const [forValues, setFormValues] = useState({
    title: '',
    imageUrl: '',
    category: '',
    content: ''
  });

  useEffect(()=>{
    blogService.getOne(id)
    .then(res => setFormValues(res))
  },[])

  const onChange = (e) =>{
    setFormValues(state => ({...state, [e.target.name]: e.target.value}));
  };

  const onEditorChange = (value, editor) =>{

    setFormValues(state => ({...state, content: value }));
  };

  const onSubmitHandler = async(e) =>{
    e.preventDefault();
    const result = await blogService.update(id, forValues)
    console.log(result);
  };

    return(
        <>
        <h2 className='title'>Edit your Article</h2>
       <div className='create-wrapper'>
         <div className="create-container" >
          <form action="#" method="post" onSubmit={onSubmitHandler}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input type="text" className="form-control" id="title" name='title' value={forValues.title} onChange={onChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="imageUrl">Image</label>
              <input type="text" className="form-control" id="imageUrl" name='imageUrl' value={forValues.imageUrl} onChange={onChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <input type="text" className="form-control" id="category" name='category' value={forValues.category} onChange={onChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="content">Content</label>
              <Editor
                id='content'
                apiKey='96xztb739pac7nr7rdpsopcswma57vu98h3dk649gdul0ws8'
                onInit={(evt, editor) => (editorRef.current = editor)}
                onEditorChange={onEditorChange}
                name="content"
                value={forValues.content}
                init={{
                  height: 500,
                  menubar: false,
                  plugins: [
                    "advlist autolink lists link image charmap print preview anchor",
                    "searchreplace visualblocks code fullscreen",
                    "insertdatetime media table paste code help wordcount",
                  ],
                  toolbar:
                    "undo redo | formatselect | " +
                    "bold italic backcolor | alignleft aligncenter " +
                    "alignright alignjustify | bullist numlist outdent indent | " +
                    "removeformat | help",
                  content_style:
                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                }}
              />
            </div>
            <div className="form-group mb-0">
              <input type="submit" value="Edit" className="btn-create"/>
            </div>
          </form>
        </div>
       </div>
        </>
    )
              }