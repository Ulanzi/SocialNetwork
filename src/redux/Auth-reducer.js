import {authAPI} from "../api/Api";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = 'auth/SET_USER_DATA'; //создаем константы type что бы не ошибиться с наименованиями и добавляем auth/ для уникальности


/*initialState это стартовый state*/
let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        /*payload раньше назывался data*/
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
})

/*это thunk*/
/*тут мы отправляем запрос на me и если мы зологинены то возвр resultCode === 0
и мы сетаем наш state с данными пользователя и меняется isAuth: false на isAuth: true*/
export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me();
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));/*диспатчим не сам actioncreator а его вызов*/
    }
}

/*это thunk для логинизации*/
export const login = (email, password, rememberMe) => async (dispatch) => {

    let response = await authAPI.login(email, password, rememberMe);

        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData()); /*диспатчим не сам actioncreator а его вызов и если ответ будет с ошибкой запустится stopSubmit*/
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";

            /*тут указываем какую форму мы стопаем и указываем ошибку на все поля с помощью _email*/
            dispatch(stopSubmit('login', {_error: message}));
        }
}

/*это thunk для вылогинизации*/
export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));/*диспатчим не сам actioncreator а его вызов*/
        }
}

export default authReducer;