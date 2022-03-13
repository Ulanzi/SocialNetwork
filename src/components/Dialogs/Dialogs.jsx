import React from 'react';
import classes from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {Navigate} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../Utils/validators/validators";

const maxLength50 = maxLengthCreator(50)  /*отдельно создали часть validate*/

const Dialogs = (props) => {
    let state = props.dialogsPage; //создали локальную переменную STATE и присвоили ей значение через props

    let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id}
                                                                      id={dialog.id}/>);
    let messagesElements = state.messagesData.map(m => <Message message={m.message} key={m.id}/>);
    let newMessageBody = state.newMessageBody;


    /*когда форма соберет все данные вызовится эта функция sendMessage со значением newMessageBody*/
    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    if (props.isAuth === false) return <Navigate to={"/login"}/>; /*если мы не залогинены то вернется редирект на логин*/

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div> {messagesElements}</div>
            </div>
            < AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}

const addMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required, maxLength50 ]}
                       name={"newMessageBody"} placeholder={"Enter you message"} />
            </div>
            <div>
                <button>Send Message</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm ({form: "dialogAddMessageForm"}) (addMessageForm); /*создаем контейнерную вокруг addMessageForm*/

export default Dialogs;