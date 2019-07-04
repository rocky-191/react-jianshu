import React, { PureComponent } from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import { LoginWrapper,LoginBox,Input,Button } from './style';

class Login extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() {
        const {loginStatus} =this.props;
        if(!loginStatus){
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder='手机号或邮箱' ref={(input)=>this.account=input}></Input>
                        <Input type="password" placeholder='密码' ref={(input)=>this.pwd=input}></Input>
                        <Button onClick={()=>this.props.login(this.account,this.pwd)}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            );
        }else{
            return (
                <Redirect to='/' />
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        loginStatus: state.getIn(['login','login'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login(account,pwd){
            dispatch(actionCreators.login(account.value,pwd.value));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);