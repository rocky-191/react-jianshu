import React, { Component } from 'react';
import {connect} from 'react-redux'

import {TopicWrapper,TopicItem } from '../style'
class Topic extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        const { topicList } = this.props;
        return (
            <TopicWrapper>
                {/* {
                    topicList.map(item=>{
                        return (
                            <TopicItem key={item.get('id')}>{item.get('title')}</TopicItem>
                        )
                    })
                } */}
            </TopicWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        topicList: state.get('home').get('topicList')
    }
}

export default connect(mapStateToProps)(Topic);