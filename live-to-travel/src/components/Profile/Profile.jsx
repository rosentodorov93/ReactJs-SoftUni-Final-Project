import { useEffect, useState } from 'react';
import RescentPost from '../RescentPost/RescentPost'
import './Profile.css';

import * as authService from '../../services/authService';
import * as blogService from '../../services/blogService';
import PersonalInfo from '../PersonalInfo/PersonalInfo';

export default function Profile(){

    const [user, setUser] = useState();
    const [myPosts, setMyPosts] = useState([]);
    const [recentPosts, setRecentPosts] = useState([]);
    

    useEffect(() =>{
        authService.getMine()
        .then(res => 
            {setUser(res)
            console.log(res)})
        .catch(err => console.log(err))

        blogService.getMine()
        .then(res => setMyPosts(res))
        .catch(err => console.log(err))

        blogService.getLatestsThree()
        .then(res => setRecentPosts(res))
        .catch(err => console.log(err))
    },[]);

    return(
        <>
      <div className="container header">
        <div className="container">
          <div className="heading-wrapper">
            <h3>Blog</h3>
            <div>
              <p>
                <a href="https://www.free-css.com/free-css-templates">Home</a>
              </p>
              <i className="fa fa-angle-double-right "></i>
              <p>Blog</p>
            </div>
          </div>
        </div>
      </div>

      {/* main part */}

      <div className="container-blog">
        <div className="container">

          <div className="row">
            <div className="row-left-section">
              <div className="row">
                {myPosts.map((blog) => (
                  <BlogItem key={blog._id} data={blog} />
                ))}

                {myPosts.length === 0 && <p>No posts from me yet</p>}
              </div>
            </div>
            <div className="row-right-section">
                
                <PersonalInfo {...user}/>

              <div className="mb-5">
                <h4>Recent Post</h4>
                {recentPosts.map(post => <RescentPost key={post._id} {...post}/>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    )
}