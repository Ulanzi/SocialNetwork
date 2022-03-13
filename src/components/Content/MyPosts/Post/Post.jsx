import React, { Component } from 'react';
import classes from './Post.module.css';

const Post = (props) => {
return (
    <div className={classes.item}>
      <img src='https://uprostim.com/wp-content/uploads/2021/05/image011-7.jpg' />
     { props.message }
      <div>
        <span>like</span> { props.likesCount }
      </div>
    </div>
  )
  }

export default Post;