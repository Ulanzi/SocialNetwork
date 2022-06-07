const SEND_MESSAGE = 'SEND_MESSAGE'

type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}

/*initialState это стартовый state*/
let initialState = {
    dialogsData: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Andrey'}, //это объекты
        {id: 3, name: 'Sveta'},
    ] as Array<DialogType>,
    messagesData: [
        {id: 1, message: '...'},
    ] as Array<MessageType>
};

export type InitialStateType = typeof initialState;

const dialogsReducer = (state = initialState, action: any): InitialStateType => {

    switch (action.type) { /*тут мы указываем по какому параметру делается switch*/


        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 7, message: body}], //создаем новый объект слева все элементы из старого объекта
                // а с права пушим новое сообщение в массив
            };


        default: /*если ни один сценарий не пригодился идет return без изменений*/
            return state;
    }
}

type SendMessageCreatorActionType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}
export const sendMessageCreator = (newMessageBody: string): SendMessageCreatorActionType => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;