import useForm from "../../hooks/useForm";
import './CommentCreate.css';

export default function CommentCreate({
    addCommentHandler
}){

    const { formValues, onChange, onSubmit } = useForm(addCommentHandler, {
        text: "",
      });

    return(
        <div className="article-comments">
        <h4 className="text-uppercase mb-4">Leave a comment</h4>
        <form onSubmit={onSubmit} method="post">
          <div className="form-group">
            <label htmlFor="text">Message *</label>
            <textarea
              id="text"
              cols="30"
              rows="5"
              className="form-control"
              name="text"
              onChange={onChange}
              value={formValues.text}
            ></textarea>
          </div>
          <div className="form-group mb-0">
            <input
              type="submit"
              value="Leave a comment"
              className="btn-comment"
            />
          </div>
        </form>
      </div>
    )
}