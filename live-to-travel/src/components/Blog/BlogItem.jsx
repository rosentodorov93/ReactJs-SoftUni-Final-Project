import {Link} from 'react-router-dom'

export default function BlogItem({ data }) {
  return (
    <div className="blogs">
      <div className="single-blog-item">
        <div className="single-blog-item-img">
          <img src={data.imageUrl} alt="blog image" />
        </div>
        <div className="single-blog-item-txt">
          <h2>
            <Link to={`/blog/details/${data._id}`}>{data.title}</Link>
          </h2>
          <h4>
            posted <span>{data.category}</span> <a href="#">admin</a> march 2018
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do
            eiusmod tempore incididunt ut labore et dolore magna.
          </p>
        </div>
      </div>
    </div>
  );
}
