import React, { PureComponent } from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

class Write extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() {
        const {loginStatus} =this.props;
        if(loginStatus){
            return (
                <div>
                    写文章
                </div>
            );
        }else{
            return (
                <Redirect to='/login' />
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        loginStatus: state.getIn(['login','login'])
    }
}

export default connect(mapStateToProps)(Write);