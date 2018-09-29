import * as React from "react";
import "./index.scss";
import {IUser} from 'components/friendHeader'
import Icon from 'components/Icon'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {constrolInput, setActionNews} from 'store/actions'

export interface IReview {
    answer: string;
    content: string;
    receive?: string;
}

export interface IReviewProps {
    newsId: number;
    likes: IUser[];
    reviewList: IReview[];

    constrolInput(isShow: boolean): any;

    setActionNews(isShow: number): any;
}

class Review extends React.Component<IReviewProps, any> {
    public showInput = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        e.stopPropagation()
        this.props.setActionNews(this.props.newsId)
        this.props.constrolInput(true)
    }

    public _renderItem(item: IReview, index: number) {
        return (
            <div key={index} onClick={this.showInput}>
                <span className="answer">{item.answer}</span>
                {item.receive ? (
                    <React.Fragment>
                        回复
                        <span className="receive">{item.receive}</span>
                    </React.Fragment>
                ) : null}
                :<span className="review-container">{item.content}</span>
            </div>
        );
    }

    public render() {
        const {reviewList, likes} = this.props;
        return (reviewList.length || likes.length) ? (
            <div className="news-review">
                <span className="arrow"/>

                {likes.length ?
                    <div className={`${ !reviewList.length ? 'no-border-bottom' : ''} likes-wrap`}>
                        <Icon icon='icon-zan'/>
                        {
                            likes.map((item, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <span>{item.name}</span>
                                        {index === likes.length - 1 ? '' : ' , '}
                                    </React.Fragment>
                                )
                            })
                        }
                    </div> : null}

                {reviewList.map((item, index) => {
                    return this._renderItem(item, index);
                })}
            </div>
        ) : null;
    }
}

export default connect(
    (state: any) => state,
    (dispatch: any) => ({
        constrolInput: bindActionCreators(constrolInput, dispatch),
        setActionNews: bindActionCreators(setActionNews, dispatch)
    })
)(Review)
