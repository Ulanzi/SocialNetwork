import React, {useEffect, useState} from 'react';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false); /*с помощью хука создоем LocalState для editMode*/
    let [status, setStatus] = useState(false);     /*с помощью хука создоем LocalState для status*/

    useEffect( () => {
        setStatus(props.status); /*синхронизируем status из локального стейта со статусом в пропсах*/
    }, [props.status] );  /*указываем зависимость этого хука от props.status При получении нового статуса в пропсах произойдет перерисовка*/

    const activateEditMode = () => {
        setEditMode(true);  /* через второй элемент setEditMode меняем значение на true*/
    }

    const deactivateEditMode = () => {
        setEditMode(false);  /* через второй элемент setEditMode меняем значение на false*/
        props.updateStatus(status); /* отправляем актуальный статус на сервак*/
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);  /* при каждом напечатывании символа через второй элемент setStatus меняем Local state*/
    }

    return (
        <div>
            { !editMode &&
            <div>
                <span onDoubleClick={ activateEditMode }>{props.status || "---"}</span>
            </div>}
            { editMode &&
            <div>
                <input onChange={ onStatusChange } autoFocus={true} onBlur={deactivateEditMode} value={status}/>
            </div>}
        </div>
    )
}

export default ProfileStatusWithHooks;