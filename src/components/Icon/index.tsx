import * as React from 'react'
import classnames from 'classnames'

export interface IIcon {
    icon: string;

    onClick?(): void;
}

export default class Icon extends React.Component<IIcon, any> {
    public render() {
        return <span className={classnames('iconfont', this.props.icon)} onClick={this.props.onClick}/>
    }
}
