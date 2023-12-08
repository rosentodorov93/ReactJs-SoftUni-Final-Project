import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import {useNavigate} from 'react-router-dom'

import * as postService from '../../services/postService';
import * as validator from '../../utils/validator';
import categories from '../../utils/categories';
import Path from '../../common/paths';
import { Constants } from "../../common/constants";

import './PostCreate.css'
import { HasError } from "../../utils/hasErrors";


export default function PostCreate(){

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

    if(HasError(errorsResult)){
      setErrors(errorsResult);
      return;
    }
    
    try {
      setErrors({});
      await postService.create(forValues);
      navigate(Path.Blog);
      
    } catch (error) {
      console.log(err)
      navigate(Path.Error)
    }
    
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
              {errors.title && errors.title.map(e => <div className='err-box' key={e}><span>{e}</span></div>)}
            </div>
            <div className="form-group">
              <label htmlFor="imageUrl">Image</label>
              <input type="text" className="form-control" id="imageUrl" name='imageUrl' value={forValues.imageUrl} onChange={onChange}/>
              {errors.imageUrl && errors.imageUrl.map(e => <div className='err-box' key={e}><span>{e}</span></div>)}
            </div>
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select className="form-control"  name="category" id="category" onChange={onChange} value={forValues.category}>
                        {categories.map(c => (<option key={c} value={c}>{c}</option>))}
              </select>
              {errors.category && errors.category.map(e => <div className='err-box' key={e}><span>{e}</span></div>)}
            </div>
            <div className="form-group">
              <label htmlFor="content">Content</label>
              <Editor
                id='content'
                apiKey={Constants.textEditorApiKey}
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
              {errors.content && errors.content.map(e => <div className='err-box' key={e}><span>{e}</span></div>)}
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