import * as React from 'react'
import Review, {IReview} from 'components/review/index'
import classnames from 'classnames'
import ImageViewer from 'components/ImageViewer/index'
import './index.scss'
import {IUser} from 'components/friendHeader'
import Icon from 'components/Icon'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {toggleLike, setActionNews, constrolInput, setActionControll} from 'store/actions'


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
    curControllId: number;

    toggleLike(id: number): void;

    setActionNews(id: number): void;

    constrolInput(flag: boolean): void;

    setActionControll(id: number): void;
}

class FriendNewsItem extends React.Component<IFriendNewsItemProps, any> {
    constructor(props: IFriendNewsItemProps) {
        super(props)
    }

    public toggleShow = (e: any) => {
        e.stopPropagation();
        const {props} = this;
        props.setActionControll(props.id === props.curControllId ? -1 : props.id)
    }
    public writeReview = (e: any) => {
        e.stopPropagation();
        this.props.setActionNews(this.props.id)
        this.props.constrolInput(true)
    }

    public render() {
        const {props} = this;
        const isShowControl = props.id === props.curControllId
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
                            <div className={classnames('control-container', isShowControl ? 'show' : '')}>
                                <span
                                    onClick={props.toggleLike.bind(null, props.id)}
                                    className={classnames('control-like')}>
                                    {!props.isLike ? <Icon icon={'icon-dianzan1'}/> : <Icon icon={'icon-dianzan'}/>}
                                    {props.isLike ? '取消' : '赞'}
                                    </span>
                                <span className={classnames('control-review')} onClick={this.writeReview}>

                                    <Icon icon={'icon-pinglun'}/>
                                    评论
                                </span>
                            </div>

                        </div>

                    </div>
                    {(props.reviewList.length || props.likes.length) &&
                    <Review reviewList={props.reviewList} likes={props.likes} id={props.likes.length}
                            newsId={props.id}/>}
                </div>
            </div>
        )
    }
}

export default connect(
    (state: any) => {
        return {
            ...state
        }
    },
    (dispath: any) => {
        return {
            toggleLike: bindActionCreators(toggleLike, dispath),
            setActionNews: bindActionCreators(setActionNews, dispath),
            constrolInput: bindActionCreators(constrolInput, dispath),
            setActionControll: bindActionCreators(setActionControll, dispath),

        }
    }
)(FriendNewsItem)
