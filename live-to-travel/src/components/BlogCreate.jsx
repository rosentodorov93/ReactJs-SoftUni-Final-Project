import './BlogCreate.css'

export default function BlogCreate(){

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
              <label htmlFor="message">Content</label>
              <textarea id="message" cols="30" rows="5" className="form-control"></textarea>
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