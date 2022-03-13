import React from "react";
import User from "./User";
import Paginator from "../common/Paginator/Paginator";


let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {

    return <div>
        <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount} pageSize={pageSize}/>
        </div>
        <div>
            { users.map(u => <User user={u}
                                       key={u.id}
                                       follow={props.follow}
                                       unfollow={props.unfollow}
                                       followingInProgress={props.followingInProgress}/>) }
        </div>
    </div>
}

export default Users;