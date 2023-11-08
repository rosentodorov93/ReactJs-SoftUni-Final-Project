import './BlogCreate.css'
import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function BlogCreate(){

  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

    return(
      
        <>
        <h2 className='title'>Create your Article</h2>
       <div className='create-wrapper'>
         <div className="create-container" >
          <form action="#" method="post" >
            <div className="form-group">
              <label htmlFor="name">Title</label>
              <input type="text" className="form-control" id="name"/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Image</label>
              <input type="email" className="form-control" id="email"/>
            </div>
            <div className="form-group">
              <label htmlFor="website">Category</label>
              <input type="url" className="form-control" id="website"/>
            </div>
            <div className="form-group">
              <label htmlFor="content">Content</label>
              <Editor
                id='content'
                apiKey='96xztb739pac7nr7rdpsopcswma57vu98h3dk649gdul0ws8'
                onInit={(evt, editor) => (editorRef.current = editor)}
                initialValue="<p>This is the initial content of the editor.</p>"
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
       </div>
        </>
          
    )
}