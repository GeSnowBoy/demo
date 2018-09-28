import * as React from "react";
import FriendHeader from "components/friendHeader/index";
import FriendNewsItem from "components/friendNewsItem/index";
import "./index.scss";
import mock from '../../mock'

export default class FriendPage extends React.Component {

    public state = {
        ...mock
    }
    public toggleLike = (id: number) => {
        const friendItem: any = this.state.friendBody.find(item => item.id === id)
        friendItem.isLike = !friendItem.isLike
        if (friendItem.isLike) {
            friendItem.likes.unshift(mock.user)
        } else {
            friendItem.likes.splice(friendItem.likes.findIndex((item: any) => item.name === mock.user.name), 1)
        }
        this.setState({})
    }

    public render() {
        const {state} = this;
        return (
            <div>
                <FriendHeader
                    {...state.friendHeader}
                />
                <div className="friends-body">
                    {state.friendBody.map((item: any, index: number) => {
                        return <FriendNewsItem key={item.id} {...item} toggleLike={this.toggleLike}/>
                    })}
                </div>
            </div>
        );
    }
}
