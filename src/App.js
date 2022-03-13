import React, {Component, Suspense, lazy} from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import {Route, Routes} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ContentContainer from "./components/Content/ContentContainer";
import HeaderContainer from "./components/Header/Header-Container";
import LoginPage from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/App-reducer";
import Preloader from "./components/common/Preloader/Preloader"; /*когда импортируем по дефолту можно импортировать под другим именем*/

const DialogsContainer = React.lazy(() =>
    import('./components/Dialogs/DialogsContainer'));


class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

/*если мы не проинициализировались тогда верни крутилку прелоадер*/
    render() {
        if(!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <div className='item'>
                        <Routes >
                            <Route path="/profile/*"
                                   element={<ContentContainer/>}/>
                            <Route path="/login"
                                   element={<LoginPage/>}/>

                            <Route path="/profile/:userId"
                                   element={<ContentContainer/>}/>

                            <Route path="/dialogs/*"
                                   element={
                                       <Suspense fallback={<Preloader/>}>
                                       <DialogsContainer/>
                                       </Suspense>
                                   }/>

                            <Route path="/users"
                                   element={<UsersContainer/>}/>
                        </Routes>
                    </div>
                </div>
            </div>)

    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized

})

export default connect(mapStateToProps, {initializeApp}) (App);

