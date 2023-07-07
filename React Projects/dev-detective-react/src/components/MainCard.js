import React from "react";
import { HiLocationMarker } from 'react-icons/hi'
import { HiLink } from 'react-icons/hi'
import { BsTwitter } from 'react-icons/bs'
import { BsBuildingsFill } from 'react-icons/bs'


const MainCard = (props) => {
  return (
    <div>
      <div className="user-header">
        <img src={props.userData.avatar_url} alt="user" />
        <div className="user-info">
          <h2>{props.userData.name}</h2>
          <p>{props.userData.login}</p>
          <p>{props.userData.created_at}</p>
        </div>
      </div>
      <div className="user-bio">
        <p>{props.userData.bio}</p>
      </div>
      <div className="user-activity">
        <div className="repos">
          <h4>Repos</h4>
          <p>{props.userData.public_repos}</p>
        </div>
        <div className="followers">
          <h4>Followers</h4>
          <p>{props.userData.followers}</p>
        </div>
        <div className="following">
          <h4>Following</h4>
          <p>{props.userData.following}</p>
        </div>
      </div>
      <div className="user-links">
        <div className="address">
            <HiLocationMarker />
            <p>{props.userData.location}</p>
        </div>
        <div className="weblink">
            <HiLink />
            <p>{props.userData.blog}</p>
        </div>
        <div className="twitter">
            <BsTwitter />
            <p>{props.userData.twitter_username}</p>
        </div>
        <div className="college">
            <BsBuildingsFill />
            <p>{props.userData.company}</p>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
