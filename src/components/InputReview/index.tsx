import * as React from 'react'
import {connect} from 'react-redux'
import {addReview} from 'store/actions'
import {bindActionCreators} from 'redux'
import "./index.scss"

class InputReview extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            input: ''
        }
    }

    public componentDidMount() {
        this.inputChildren.focus()
        this.inputChildren.click()
    }

    public onChange = (e: any) => {
        this.setState({
            input: e.target.value
        })
    }
    private inputChildren: any;
    public stopPropagation = (e: any) => e.stopPropagation()
    public commitInput = () => {
        if (!this.state.input) {
            return;
        }
        this.props.addReview(this.state.input)
        this.setState({
            input: ''
        })
    }

    public render() {

        return (
            <div className={'friend-input-wrap'} onClick={this.stopPropagation}>
                <input
                    value={this.state.input}
                    autoFocus={true}
                    onChange={this.onChange}
                    type="text" placeholder={'评论'}

                    ref={input => this.inputChildren = input}/>
                <button onClick={this.commitInput}>发送</button>
            </div>
        )
    }
}

export default connect(
    (state: any) => ({}),
    (dispath: any) => {
        return {
            addReview: bindActionCreators(addReview, dispath)
        }
    }
)(InputReview)
