import React, { Component,Fragment } from 'react';
import { connect } from 'react-redux'

import { RecommendWrapper,RecommendItem } from '../style';
class Recommend extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        const { recommandList } = this.props;
        return (
            <Fragment>
                <RecommendWrapper>
                    {
                        recommandList.map(item=>{
                            return (
                                <RecommendItem key={item.get('id')}>
                                    <img alt='' src={item.get('img')} />
                                </RecommendItem>
                            )
                        })
                    }
                </RecommendWrapper>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        recommandList: state.getIn(['home','recommandList'])
    }
}

export default connect(mapStateToProps)(Recommend);