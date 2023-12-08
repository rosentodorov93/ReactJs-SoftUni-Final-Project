import {Link} from 'react-router-dom'
import { BuildPath } from '../../utils/pathsUtil';
import Path from '../../common/paths';

import './PostItem.css'

export default function BlogItem({ data }) {
  return (
    <div className="blogs">
      <div className="single-blog-item">
        <div className="single-blog-item-img">
          <img src={data.imageUrl} alt="blog image" />
        </div>
        <div className="single-blog-item-txt">
          <h2>
            <Link to={BuildPath(Path.PostDetails, {id: data._id})}>{data.title}</Link>
          </h2>
          <h4>
            Category: <span>{data.category}</span> 
          </h4>
          <p>Posted on: {new Date(data._createdOn).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}
