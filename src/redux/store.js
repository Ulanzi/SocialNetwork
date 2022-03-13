import contentReducer from "./Content-reducer";
import dialogsReducer from "./Dialogs-reducer";
import sidebarReducer from "./Sidebar-reducer";



let store = {
    _state: {
        dialogsPage: {
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
            ],
            newMessageBody: ''  //это аналог newPostText: 'it-kamasutra.com'
        },

        contentPage: {
            postData: [
                {id: 1, message: 'Hi, how are you', likesCount: 3},
                {id: 2, message: 'It\'s my first post', likesCount: 30},
            ],
            newPostText: 'it-kamasutra.com' /*сообщение нового поста. это то что человек вводит текущее значение.
        сюда отправлятся текст из onPostChange*/
        },

        sidebar: {}
    },
    _getrerenderEntireTree() {
        console.log('State was chaneged'); /*тут присваивается observer он же rerenderEntireTree из Indexjs*/
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._getrerenderEntireTree = observer;
    },


    /*/!* типо это все удаляем.....данная функция обновляет state при каждом нажатии в textarea происходит rerender
и далее текст передается по props для отрисовка в textarea*!/
    updateNewPostText(newText) {
        this._state.contentPage.newPostText = newText;
        this._getrerenderEntireTree(this._state);
    },
    addPost() {

        let newPost = {
            id: 5,
            message: this._state.contentPage.newPostText, /!*формируем новый пост беря текст из второго этапа flux*!/
            likesCount: 0
        };
        this._state.contentPage.postData.push(newPost);/!*push это элемент массива котор добовл в конец массиван новый элемент*!/
        this._state.contentPage.newPostText= ''; /!*обнуляет addPost при перезагр страницы*!/
        this._getrerenderEntireTree(this._state);
    },*/

    dispatch(action) { // { type: 'ADD-POST' }

        this._state.contentPage = contentReducer(this._state.contentPage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);

        this._getrerenderEntireTree(this._state);

    }
}







    export default store;