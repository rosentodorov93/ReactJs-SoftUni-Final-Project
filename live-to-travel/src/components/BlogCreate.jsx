import './BlogCreate.css'
import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import parse from 'html-react-parser';

export default function BlogCreate(){

  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  const [forValues, setFormValues] = useState({
    title: '',
    imageUrl: '',
    category: '',
    content: ''
  });
  const [result, setResult] = useState([]);

  const onChange = (e) =>{
    setFormValues(state => ({...state, [e.target.name]: e.target.value}));
  }

  const onEditorChange = (value, editor) =>{

    setFormValues(state => ({...state, content: value }));
  }

  const onSubmitHandler = (e) =>{
    e.preventDefault();
    setResult(parse(forValues.content));
    console.log(result);
  }

  const Result = (data) =>{
    return(
      <div>
        {data.map(data)}
      </div>
    )
  }
    return(
        <>
        <h2 className='title'>Create your Article</h2>
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
              <input type="submit" value="Create" className="btn-create"/>
            </div>
          </form>
        </div>
                {forValues.content && <div>{parse(forValues.content)}</div>}
       </div>
        </>
          
    )
}