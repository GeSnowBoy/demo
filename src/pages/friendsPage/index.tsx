import * as React from "react";
import FriendHeader from "components/friendHeader/index";
import FriendNewsItem from "components/friendNewsItem/index";
import InputReview from "components/InputReview";
import {connect} from 'react-redux'
import "./index.scss";
import {bindActionCreators} from 'redux'
import {constrolInput, setActionControll} from 'store/actions'

class FriendPage extends React.Component<any, any> {


    public hideInput = (e: any) => {
        this.props.constrolInput(false)
        this.props.setActionControll(-1)
    }

    public render() {
        const {props} = this;
        return (
            <div className={'friend-page'} onClick={this.hideInput}>
                <FriendHeader
                    {...props.friendHeader}
                />
                <div className="friends-body">
                    {props.friendBody.map((item: any, index: number) => {
                        return <FriendNewsItem key={item.id} {...item} />
                    })}
                </div>
                {this.props.isWrite ? <InputReview/> : null}
            </div>
        );
    }
}

export default connect((state: any) => {
    return {
        ...state
    }
}, (dispath: any) => {
    return {
        constrolInput: bindActionCreators(constrolInput, dispath),
        setActionControll: bindActionCreators(setActionControll, dispath)
    }
})(FriendPage)
