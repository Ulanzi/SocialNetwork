import React from "react";
import contentReducer, {addPostActionCreator, deletePost} from "./Content-reducer";

/*initialState это стартовый state*/
let State = {
    postData: [
        {id: 1, message: 'Hi, how are you', likesCount: 3},
        {id: 2, message: 'It\'s my first post', likesCount: 30},
    ],
    profile: null,
    status: ""
};

test('length of post should be incremented', () => {

    // 1.test data
    let action = addPostActionCreator("go to sea")

    // 2. action
    let newState = contentReducer(State,action)

    // 3. expect
    expect(newState.postData.length).toBe(3);
});

test('message of new post should be correct', () => {

    // 1.test data
    let action = addPostActionCreator("go to sea")

    // 2. action
    let newState = contentReducer(State,action)

    // 3. expect
    expect(newState.postData[2].message).toBe("go to sea");
});

test('after deleting length of message should be decrement', () => {

    // 1.test data
    let action = deletePost(1)

    // 2. action
    let newState = contentReducer(State,action)

    // 3. expect
    expect(newState.postData.length).toBe(1);
});
