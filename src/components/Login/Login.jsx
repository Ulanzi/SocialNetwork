import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../Utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/Auth-reducer";
import {Navigate} from "react-router-dom";
import style from "./../common/FormsControls/FormsControls.module.css"


/*деструктуризация вместо props пишем что нам нужно*/
const LoginForm = ({handleSubmit, error}) => {
    debugger
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={"Email"} validate={[required]} name={"email"} component={Input}/> {/*используем кастомный инпут*/}
            </div>
            <div>
                <Field placeholder={"Password"} validate={[required]} name={"password"} component={Input}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input}/> remember me
            </div>
            {error && <div className={style.formSummaryError}> {error} </div>} {/*если в пропсах есть ошибка то мы покажем props.error*/}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'}) (LoginForm)

/*onSubmit сюда приходят все собранные данные из форм*/
const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    /*если в пропсах придет что мы залогинены тогда мы делаем редирект*/
    if (props.isAuth) {
        return  <Navigate replace to="/profile" />
    }
    /* а если в пропсах придет что мы НЕ залогинены тогда мы отправимся в поле логинизации*/
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
isAuth: state.auth.isAuth
})

export default connect (mapStateToProps,{login}) (Login);