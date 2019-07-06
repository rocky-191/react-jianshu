import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import { actionCreators } from './store'

import {
    DetailWrapper,
    DetailTitle,
    Content
} from './style';

class Detail extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount(){
        this.props.getDetail(this.props.match.params.id);
    }

    render() {
        return (
            <DetailWrapper>
                <DetailTitle>{this.props.title}</DetailTitle>
                <Content>{this.props.content}</Content>
            </DetailWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        title: state.getIn(['detail','title']),
        content:state.getIn(['detail','content'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDetail: (id) => {
            dispatch(actionCreators.getDetail(id));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Detail));