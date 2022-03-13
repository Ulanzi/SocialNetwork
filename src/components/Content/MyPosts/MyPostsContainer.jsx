import React, {Component} from 'react';
import {addPostActionCreator} from "../../../redux/Content-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

//первая функция превращает часть state в props
let mapStateToProps = (state) => {
    return {
        postData: state.contentPage.postData,
        newPostText: state.contentPage.newPostText
    }
}

//вторая функция обрабатывает callback которые мы отправляем в презентационную компоненту
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {dispatch(addPostActionCreator(newPostText))},
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;