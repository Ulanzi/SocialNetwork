import React from 'react';
import ContentInfo from "./ContentInfo/ContentInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";



const Content = (props) => {
    return (
    <div>

        <ContentInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        <MyPostsContainer />
    </div>
  )
}

export default Content;