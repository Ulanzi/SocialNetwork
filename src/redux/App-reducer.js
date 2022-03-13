import {getAuthUserData} from "./Auth-reducer";



const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'; //создаем константы type что бы не ошибиться с наименованиями


/*initialState это стартовый state*/
let initialState = {
    initialized: false,

};

const appReducer = (state = initialState, action) => {

    switch (action.type) {

        case INITIALIZED_SUCCESS:
            return  {
                ...state,
                initialized: true
            }

            default:
            return state;
    }
}

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS})

/*это thunk*/
export const initializeApp = () => (dispatch) => {
    let promise =  dispatch(getAuthUserData());
    //dispatch(getAuthUserData()); при инициализации диспатчей может быть множество
    //dispatch(getAuthUserData());
Promise.all ([promise])
    .then( () => { dispatch (initializedSuccess()) })  /*когда getAuthUserData получит результат запустится initializedSuccess */

}

export default appReducer;