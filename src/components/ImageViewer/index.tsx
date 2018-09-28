import * as React from 'react'
import './index.scss'
import classnames from 'classnames'
import WxImageViewer from 'react-wx-images-viewer'

export interface IImageViewerState {
    imgUrls?: string[];
    isOpen: boolean;
    index: number;
}

export interface IImageViewerProps {
    imgs: string[] | null;
}

export default class ImageViewer extends React.Component<IImageViewerProps, IImageViewerState> {
    public state: IImageViewerState = {
        index: 0,
        isOpen: false
    }

    public showImageView(index: number) {
        this.setState({
            index,
            isOpen: true
        })
    }

    public closeImageViewer = () => {
        this.setState({
            isOpen: false
        })
    }

    public render() {
        const state = this.state;
        const imgUrls = this.props.imgs || [];
        return (
            !imgUrls.length ? null :
                <div className={'imageview-wrap'}>
                    {
                        imgUrls.map((item, index) => {
                            return (
                                <div
                                    className={classnames('img-type-normal', {
                                        'img-type-one': imgUrls.length === 1,
                                        'img-type-two': imgUrls.length === 4
                                    })}
                                    onClick={this.showImageView.bind(this, index)}
                                    style={{backgroundImage: `url(${item})`}}
                                    key={index}
                                />
                            )
                        })
                    }
                    {state.isOpen &&
                    <WxImageViewer urls={imgUrls} index={state.index} onClose={this.closeImageViewer}/>}

                </div>
        )
    }
}
