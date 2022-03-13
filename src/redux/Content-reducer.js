import {profileAPI, usersAPI} from "../api/Api";

const ADD_POST = 'ADD-POST'; //создаем константы type что бы не ошибиться с наименованиями
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';


/*initialState это стартовый state*/
let initialState = {
    postData: [
        {id: 1, message: 'Hi, how are you', likesCount: 3},
        {id: 2, message: 'It\'s my first post', likesCount: 30},
    ],
    profile: null,
    status: ""
};

const contentReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText, /*формируем новый пост беря текст из второго этапа flux*/
                likesCount: 0
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status //status приходит с сервака и необходимо его предать через action
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile};
        }
        case DELETE_POST: {
            return {
                ...state, postData: state.postData.filter(p => p.id !=action.postId)};
        }
        default:
            return state;
    }
}
/*создаем actionCreator ур39*/
/*export const addPostActionCreator = () => {return {type: ADD_POST}}
можно писать и так но когда наша функция выполняет только return можно ее сократить как ниже*/

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})  //создаем actioncreator который возвращает сам Action
// Action обладает type и живет в мире BLL___actioncreator нужен чтобы пользователи UI использовали их в мире UI

export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

/*это thunk*/
export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data)); /*диспатчим не сам actioncreator а его вызов*/
    }

/*это thunk для получения статуса*/
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data)); /*диспатчим не сам actioncreator а его вызов*/
    }

/*это thunk для обновления статуса*/
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
            dispatch(setStatus(status)); /*диспатчим не сам actioncreator а его вызов*/
        }
    }

export default contentReducer;