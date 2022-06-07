import {profileAPI, usersAPI} from "../api/Api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST'; //создаем константы type что бы не ошибиться с наименованиями
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

type PostDataType = {
    id: number
    message: string
    likesCount: number
}
type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
type PhotosType = {
    small: string | null
    large: string | null
}

type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}

/*initialState это стартовый state*/
let initialState = {
    postData: [
        {id: 1, message: 'Hi, how are you', likesCount: 3},
        {id: 2, message: 'It\'s my first post', likesCount: 30},
    ] as Array<PostDataType>,
    profile: null as ProfileType | null,
    status: '',
    newPostText: ''
};
export type InitialStateType = typeof initialState

const contentReducer = (state = initialState, action: any): InitialStateType => {

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
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state, profile: {...state.profile, photos: action.photos} as ProfileType};
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
type AddPostActionCreatorActionType = {
    type: typeof ADD_POST
    newPostText: string
}
export const addPostActionCreator = (newPostText: string): AddPostActionCreatorActionType => ({type: ADD_POST, newPostText})  //создаем actioncreator который возвращает сам Action
// Action обладает type и живет в мире BLL___actioncreator нужен чтобы пользователи UI использовали их в мире UI
type SetStatusActionType = {
    type: typeof SET_STATUS
    status: string
}
export const setStatus = (status: string): SetStatusActionType => ({type: SET_STATUS, status})
type DeletePostActionType = {
    type: typeof DELETE_POST
    postId: number
}
export const deletePost = (postId: number): DeletePostActionType => ({type: DELETE_POST, postId})
type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({type: SET_USER_PROFILE, profile})
type SavePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({type: SAVE_PHOTO_SUCCESS, photos})

/*это thunk*/
export const getUserProfile = (userId: number) => async (dispatch: any) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data)); /*диспатчим не сам actioncreator а его вызов*/
    }

/*это thunk для получения статуса*/
export const getStatus = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data)); /*диспатчим не сам actioncreator а его вызов*/
    }

/*это thunk для обновления статуса*/
export const updateStatus = (status: string) => async (dispatch: any) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
            dispatch(setStatus(status)); /*диспатчим не сам actioncreator а его вызов*/
        }
    }

/*это thunk для аватарки*/
export const savePhoto = (file: any) => async (dispatch: any) => {
    let response = await profileAPI.savePhoto(file);

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos)); /*диспатчим не сам actioncreator а его вызов*/
    }
}

/*это thunk для отправки редактированного профайла*/
export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.id;

    const response = await profileAPI.saveProfile(profile);

    if (response.data.resultCode === 0) {
       dispatch(getUserProfile(userId)); /*диспатчим не сам actioncreator а его вызов*/
    } else {
        dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0]) /*ошибка при нажатии на save из промиса из onSubmit из ContentInfo если неверный контакт*/
    }
}

export default contentReducer;