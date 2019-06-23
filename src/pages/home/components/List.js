import React, { Component,Fragment } from 'react';
import { connect } from 'react-redux'

import { ListItem,ListInfo } from '../style'
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        const { articleList } =this.props;
        return (
            <Fragment>
                { articleList.map(item=>{
                    return (
                        <ListItem key={item.get('id')}>
                            <img className="pic" alt="" src={item.get('img')} />
                            <ListInfo>
                                <a href="/" className="title">{item.get('title')}</a>
                                <p className="abstract">{item.get('desc')}</p>
                                <div className="meta"></div>
                            </ListInfo>
                        </ListItem>
                    )
                }) }
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        articleList: state.getIn(['home','articleList'])
    }
}

export default connect(mapStateToProps)(List);