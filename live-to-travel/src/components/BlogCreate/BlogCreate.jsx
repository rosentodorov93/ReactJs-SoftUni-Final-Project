import './BlogCreate.css'
import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import {useNavigate} from 'react-router-dom'

import * as blogService from '../../services/blogService';
import * as validator from '../../utils/validator';
import categories from '../../utils/categories';

export default function BlogCreate(){

  const editorRef = useRef(null);
  const [forValues, setFormValues] = useState({
    title: '',
    imageUrl: '',
    category: '',
    content: ''
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const onChange = (e) =>{
    setFormValues(state => ({...state, [e.target.name]: e.target.value}));
  };

  const onEditorChange = (value, editor) =>{

    setFormValues(state => ({...state, content: value }));
  };

  const onSubmitHandler = async(e) =>{
    e.preventDefault();
    const errorsResult = validator.createEditForm(forValues);

    if(Object.values(errorsResult).some(x => x.length > 0)){
      setErrors(errorsResult);
      return;
    }
    
    const result = await blogService.create(forValues);
    navigate('/blog');
    console.log(result);
  };

    return(
        <>
        <h2 className='title'>Create your Article</h2>
       <div className='create-wrapper'>
         <div className="create-container" >
          <form action="#" method="post" onSubmit={onSubmitHandler}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input type="text" className="form-control" id="title" name='title' value={forValues.title} onChange={onChange}/>
              {errors.title && errors.title.map(e => <div><span>{e}</span></div>)}
            </div>
            <div className="form-group">
              <label htmlFor="imageUrl">Image</label>
              <input type="text" className="form-control" id="imageUrl" name='imageUrl' value={forValues.imageUrl} onChange={onChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select className="form-control"  name="category" id="category" onChange={onChange} value={forValues.category}>
                        {categories.map(c => (<option key={c} value={c}>{c}</option>))}
              </select>
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
                  plugins: [],
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
              <input type="submit" value="Create" className="btn-create"/>
            </div>
          </form>
        </div>
       </div>
        </>
    )
              }