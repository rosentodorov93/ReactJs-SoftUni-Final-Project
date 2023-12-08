import Path from '../../common/paths';
import { BuildPath } from '../../utils/pathsUtil';
import './RescentPost.css';
import { useNavigate } from 'react-router-dom';

export default function RescentPost({
    _id,
    imageUrl,
    title,
    _createdOn,
}) {

  const navigate = useNavigate();

  return (
    <div className="rescent-post" onClick={() => {navigate(BuildPath(Path.PostDetails, {id:_id}))}}>
      <div className='img-container'>
      <img
        className="post-img"
        src={imageUrl}
        alt={title}
      />
      </div>
      <div className="pl-3">
        <h6 className="m-1">{title}</h6>
        <small>{new Date(_createdOn).toLocaleDateString()}</small>
      </div>
    </div>
  );
}
