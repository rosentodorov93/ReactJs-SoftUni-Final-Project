import "./CommentsList.css";

export default function CommentsList({ comments }) {
  return (
    <div className="article-comments">
      <h4>{comments.length} Comments</h4>
      <div className="commnets-list">
        {comments.map((c) => (<div key={c._id}> 
          <div  className="comment-body">
            <img className="comment-img" src={c.owner?.imageLink} />

            <div className="media-body">
              <h6>
                <p>
                  {c.owner?.firstName} {c.owner?.lastName}
                </p>
                <small>{new Date(c._createdOn).toLocaleDateString()}</small>
              </h6>
              <p>{c.text}</p>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}
