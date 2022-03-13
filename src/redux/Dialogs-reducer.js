const SEND_MESSAGE = 'SEND_MESSAGE'

/*initialState это стартовый state*/
let initialState = {
    dialogsData: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Andrey'}, //это объекты
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},
    ],
    messagesData: [
        {id: 1, message: 'Hello Mister bulka'},
        {id: 2, message: 'yes it easy peasy'},
        {id: 3, message: 'yo men'},
        {id: 4, message: 'Oh my god'},
        {id: 5, message: 'I love you'},
        {id: 6, message: 'Hi its Ilon Mask'},
    ]
};

const dialogsReducer = (state = initialState, action) => {

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
export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;