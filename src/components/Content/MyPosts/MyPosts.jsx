import React, {Component} from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../Utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)  /*отдельно создали часть validate*/

const MyPosts = React.memo(props => {
    console.log("RENDER YO");

    let postsElements = props.postData.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    let newPostElement = React.createRef(); /*sozdaem ssylky*/

    /*когда форма соберет все данные вызовится эта функция sendMessage со значением newMessageBody*/
    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    /*когда форма соберет все данные вызовится эта функция onAddPost со значением newPostText*/
    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }


    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            < AddNewPostForm onSubmit={onAddPost}/>

            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )

})

const MyPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"newPostText"} component={Textarea} placeholder={"Post message"} validate={[required, maxLength10 ]} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostForm = reduxForm ({form: "ProfileAddNewPostForm"}) (MyPostsForm); /*создаем контейнерную вокруг MyPostsForm*/

export default MyPosts;