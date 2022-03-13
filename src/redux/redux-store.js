import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import contentReducer from "./Content-reducer";
import dialogsReducer from "./Dialogs-reducer";
import sidebarReducer from "./Sidebar-reducer";
import usersReducer from "./Users-reducer";
import authReducer from "./Auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer} from 'redux-form'
import appReducer from "./App-reducer";

let reducers = combineReducers({
    contentPage: contentReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

//так создаем стор чтобы подключить расширение redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

//старый код так раньше создавали стор  -  let store = createStore(reducers, applyMiddleware(thunkMiddleware));
//создаем редаксовский store и отдам ему закомбайненые редьюсеры
//и тутже внедряем промежуточный уровень thunkMiddleware

window.__store__ = store;
export default store;