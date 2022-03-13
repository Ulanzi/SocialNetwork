import React from 'react';
import {sendMessageCreator} from "../../redux/Dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

/*это олдскульный нами созданный container
const DialogsContainer = () => {


    return <StoreContext.Consumer>
        { (store) => {
            let state = store.getState().dialogsPage; //создали локальную переменную STATE и присвоили ей значение через props



            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator()) //оборачиваем dispatch в функции и передаем их как callback
            }
            let onNewMessageClick = (body) => {
                store.dispatch(updateNewMessageBodyCreator(body)) //используем подготовленные action из BLL
            }
            return <Dialogs updateNewMessageBody={onNewMessageClick} sendMessage={onSendMessageClick}
                     dialogsPage={state}/>
        }
    }
    </StoreContext.Consumer>
}*/


//первая функция превращает часть state в props
let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

//вторая функция обрабатывает callback которые мы отправляем в презентационную компоненту
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {dispatch(sendMessageCreator(newMessageBody))}
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
) (Dialogs)

/*/!*ЭТО СТАРЫЙ КОД ЕГО МЫ ЗАМЕНИЛИ НА COMPOSE!!!  тут мы вызываем HOC с нужной целевой компонентой*!/
/!*AuthRedirectComponent построили над Dialogs*!/
let AuthRedirectComponent = withAuthRedirect(Dialogs);


//первые две функции настраивают connect. Вторая скобка это то что мы коннектим к Store
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
export default DialogsContainer;*/

