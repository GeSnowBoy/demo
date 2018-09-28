import * as React from 'react'
import Review, {IReview} from 'components/review/index'
import classnames from 'classnames'
import ImageViewer from 'components/ImageViewer/index'
import './index.scss'
import {IUser} from 'components/friendHeader'
import Icon from 'components/Icon'

interface IFriendNewsItemState {
    isShowControl: boolean;
}

export interface IFriendNewsItemProps {
    address: string;
    content?: string;
    from?: string;
    id: number;
    imgs: string[];
    reviewList: IReview[];
    isLike: boolean;
    likes: IUser[];
    time: string;
    user: IUser;

    toggleLike(id: number): void;
}

export default class FriendNewsItem extends React.Component<IFriendNewsItemProps, IFriendNewsItemState> {
    constructor(props: IFriendNewsItemProps) {
        super(props)
        this.state = {isShowControl: false}
    }

    // hideControl = () => {
    //   this.setState({isShowControl: false})
    // }
    public toggleShow = () => {
        this.setState({isShowControl: !this.state.isShowControl})
    }

    public render() {
        const {props} = this;
        const {state} = this
        return (
            <div className="friends-news">
                <img src={props.user.avator} className="friends-news-avator"/>
                <div className="friends-news-container">
                    <div className="news-name">{props.user.name}</div>
                    <div className="new-container">
                        {props.content}
                    </div>
                    <ImageViewer imgs={props.imgs}/>
                    <div className="new-address">{props.address}</div>

                    <div className="other-wrap">
                        <span className="new-title">{props.time}</span>
                        <span className="news-from">{props.from}</span>
                        <div className="control-wrap">
                            <Icon
                                icon={' icon-pinglun control-btn'}
                                onClick={this.toggleShow}
                            />
                            <div className={classnames('control-container', state.isShowControl ? 'show' : '')}>
                                <span
                                    onClick={props.toggleLike.bind(null, props.id)}
                                    className={classnames('control-like')}>
                                    {!props.isLike ? <Icon icon={'icon-dianzan1'}/> : <Icon icon={'icon-dianzan'}/>}
                                    {props.isLike ? '取消' : '赞'}
                                    </span>
                                <span className={classnames('control-review')}>

                                    <Icon icon={'icon-pinglun'}/>
                                    评论
                                </span>
                            </div>

                        </div>

                    </div>
                    {(props.reviewList.length || props.likes.length) &&
                    <Review reviewList={props.reviewList} likes={props.likes}/>}
                </div>
            </div>
        )
    }
}
