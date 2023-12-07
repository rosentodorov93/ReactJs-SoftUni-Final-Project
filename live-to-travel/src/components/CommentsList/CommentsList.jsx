import { useEffect, useState } from "react"

import * as commentsService from '../../services/commentService';

import './CommentsList.css';

export default function CommentsList({
    id
}){

    const [comments, setComments] = useState([]);

    useEffect(()=>{
        commentsService
        .getById(id)
        .then((res) => setComments(res))
        .catch((err) => console.log(err));
    },[id])

    return(
        <div className="article-comments">
        <h4>{comments.length} Comments</h4>
        <div className="single-comment">
          {comments.map(
            ({
              _id,
              _createdOn,
              text,
              owner: { firstName, lastName },
            }) => (
              <div key={_id} className="comment-body">
                <h6>
                  <p>
                    {firstName} {lastName}
                  </p>
                  <small>
                    <i>{new Date(_createdOn).toLocaleDateString()}</i>
                  </small>
                </h6>
                <p>{text}</p>
              </div>
            )
          )}
        </div>
      </div>
    )
}