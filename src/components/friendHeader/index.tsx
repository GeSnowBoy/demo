import * as React from "react";

import './style.scss';

export interface IUser {
    name: string;
    avator: string;
}

export interface IfriendHeader {
    bgImg: string;
    user: IUser
}

class FriendsPage extends React.Component<IfriendHeader, any> {
    public render() {
        const {user, bgImg} = this.props;
        return <div className="friends-header" style={{backgroundImage: `url(${bgImg})`}}>
            <div className="avatar-wrap">
                <span className="people-nickname">{user.name} </span>
                <img src={user.avator} className="avatar-img"/>
            </div>
        </div>;
    }
}

export default FriendsPage;
