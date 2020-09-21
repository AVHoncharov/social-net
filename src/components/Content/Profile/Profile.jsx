import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={style.profile}>
           <MyPosts/>
        </div>
    )
}

export default Profile;