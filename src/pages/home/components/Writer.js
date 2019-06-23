import React, { Component,Fragment } from 'react';
import { connect } from 'react-redux'

import { WriterRecommand,WriterWrapper,WriterItem } from '../style';
class Writer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        const { writerList }=this.props;
        return (
            <Fragment>
                <WriterRecommand>
                    <div className="title">
                        <span>推荐作者</span>
                        <span className="page-change">
                            <i className="iconfont spin">&#xe851;</i>
                            换一换
                        </span>
                    </div>
                    <WriterWrapper>
                        {
                            writerList.map(item=>{
                                return (
                                    <WriterItem key={item.get('id')}>
                                        <a className="avatar">
                                            <img alt="" src={item.get('imgUrl')} />
                                        </a>
                                        <a className="follow">关注</a>
                                        <a className="name">{item.get('name')}</a>
                                        <p>{item.get('desc')}</p>
                                    </WriterItem>
                                )
                            })
                        }
                    </WriterWrapper>
                </WriterRecommand>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        writerList: state.getIn(['home','writerList'])
    }
}

export default connect(mapStateToProps)(Writer);