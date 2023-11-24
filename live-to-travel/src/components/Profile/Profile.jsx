import { useEffect, useState } from 'react';
import './Profile.css';

import * as authService from '../../services/authService';

export default function Profile(){

    const [user, setUser] = useState();

    useEffect(() =>{
        authService.getMine()
        .then(res => console.log(res))
        .catch(err => console.log(err))
    });

    return(
        <div className="profile-container">
                <div className="profile-section">
                   <div className="image-section">
                       <img src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg" alt=""/>
                       <button className="btn-upload"><i ></i> Upload Photo</button>
                   </div>
                   <div className="profile-details">
                       <h2>John Smith</h2>
                        <h6>Freelance Web Designer</h6>
                        <p>There are many variations of passages of Lorem Ipsum available but the majority is have suffered alteration in that some form by injected humour or randomised that words which don't look even slightly believable. If you are going a to use a passage of Lorem Ipsum you need to be sure there isn't anything embarrassing. There are is many variations of passages available.</p>
                          <div className="info">
                            <div className="info-col">
                                <div className="info-list">
                                    <ul>
                                        <li><span>Birthday:</span>05. 09.1987</li>
                                        <li><span>City:</span>Toranto</li>
                                        <li><span>Study:</span>Cambridge University</li>
                                        <li><span>Website:</span>www.smarteyeapps.com</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="info-col">
                                <div className="info-list">
                                    <ul>
                                        <li><span>Age:</span>31 Years</li>
                                        <li><span>Degree:</span>Master</li>
                                        <li><span>Mail:</span>email@example.com</li>
                                        <li><span>Phone:</span>+01 454 548 4458</li>
                                    </ul>
                                </div>
                            </div>
                        </div> 
                   </div>
                </div>
           </div>
    )
}