import React from "react";
import style from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {

let posts = [
        { id: 1, message: "How are you?", likeCount: 5 },
        { id: 2, message: "Follow the whire rabbit", likeCount: 10 },
      ];


  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={posts}/>
    </div>
  );
};

export default Profile;
