import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth /*тут придут данные об авторизации и мы прокинем их в dialogs*/
});



export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Navigate to={"/login"} /> ; /*если мы не залогинены то вернется редирект на логин*/
            return <Component {...this.props}/> /*все пропсы деструктуризацией прокидываем в целевую компоненту*/
        }
    }
    /*создали connect к стору для получением Auth специально для RedirectComponent*/
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)




    return ConnectedAuthRedirectComponent;
}