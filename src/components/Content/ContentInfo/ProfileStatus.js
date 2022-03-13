import React from 'react';

class ProfileStatus extends React.Component {

    /*создаем локальный state*/
    state = {
        editMode: false,
        status: this.props.status   /*изначально берем статус из пропсов тоесть с сервака*/
    }

    /*меняет в локальном стейте false на true появляется импут*/
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    /*меняет в локальном стейте true на false и убирает импут */
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
           status: e.currentTarget.value
        })
    }

componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status /*если статус в предыдущих пропсах отличается от статуса в настоящих пропсах то произойдет обновление
                локального стейта. иначе componentDidUpdate не запустится и не произойдет зацыкливание*/
            })
        }
}

    render() {
    return (
        <div>
            {!this.state.editMode &&
            <div>
                <span onDoubleClick={ this.activateEditMode }>{this.props.status || "---"}</span>
            </div>}
            {this.state.editMode &&
            <div>
                <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode }
                       value={this.state.status}/>
            </div>}
        </div>
    )
}
}

export default ProfileStatus;