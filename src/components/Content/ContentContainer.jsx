import React from 'react';
import Content from "./Content";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from '../../redux/Content-reducer';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {useMatch} from "react-router-dom";


class ContentContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId: this.props.authorizedUserId;

        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <Content {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}

const ProfileURLMatch = (props) => {
    const match = useMatch('/profile/:userId/');
    return <ContentContainer {...props} match={match} />;
}

const mapStateToProps = (state) => ({
    profile: state.contentPage.profile,
    status: state.contentPage.status, /*место где и откуда мы получаем статус*/
    authorizedUserId: state.auth.id, /*тут мы берем наш userId */
    isAuth: state.auth.isAuth /*тут мы берем инфу авторизованы или нет */
})


export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus} ),
    withAuthRedirect,
)(ProfileURLMatch)




/*/!*тут мы вызываем HOC с нужной целевой компонентой*!/
/!*AuthRedirectComponent построили над ContentContainer*!/
let AuthRedirectComponent = withAuthRedirect(ContentContainer);*/




