import React,{Component} from 'react';
import {connect} from 'react-redux'
import { CSSTransition } from 'react-transition-group';

import { actionCreators } from './store';

import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
} from './style';

class Header extends Component {

    getListArea = ()=>{
        if(this.props.focused){
            return (
                <SearchInfo>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch>换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {
                            this.props.list.map(item=>{
                                return (
                                    <SearchInfoItem for={item}>{item}</SearchInfoItem>
                                )
                            })
                        }
                    </SearchInfoList>
                </SearchInfo>
            )
        }else{
            return null;
        }
    }
    render(){
        return (
            <HeaderWrapper>
            <Logo href="/" />
            <Nav>
                <NavItem className="left active">首页</NavItem>
                <NavItem className="left">下载App</NavItem>
                <NavItem className="right">登陆</NavItem>
                <NavItem className="right">
                    <i className="iconfont">&#xe636;</i>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={this.props.focused}
                        timeout={200}
                        classNames="slide"
                    >
                        <NavSearch className={this.props.focused ? 'focused' : ''} onFocus={this.props.handleInputFocus} onBlur={this.props.handleInputBlur}></NavSearch>
                    </CSSTransition>
                    <i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe614;</i>
                    {this.getListArea()}
                </SearchWrapper>
                <Addition>
                    <Button className="writting">
                        <i className="iconfont">&#xe615;</i>
                        写文章
                    </Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </Nav>
        </HeaderWrapper>
        )
    }
}

// const getListArea = (show)=>{
//     if(show){
//         return (
//             <SearchInfo>
//                 <SearchInfoTitle>
//                     热门搜索
//                     <SearchInfoSwitch>换一批</SearchInfoSwitch>
//                 </SearchInfoTitle>
//                 <SearchInfoList>
//                     <SearchInfoItem>教育</SearchInfoItem>
//                     <SearchInfoItem>商业</SearchInfoItem>
//                 </SearchInfoList>
//             </SearchInfo>
//         )
//     }else{
//         return null;
//     }
// }

// const Header =(props)=>{
//     return (
//         <HeaderWrapper>
//             <Logo href="/" />
//             <Nav>
//                 <NavItem className="left active">首页</NavItem>
//                 <NavItem className="left">下载App</NavItem>
//                 <NavItem className="right">登陆</NavItem>
//                 <NavItem className="right">
//                     <i className="iconfont">&#xe636;</i>
//                 </NavItem>
//                 <SearchWrapper>
//                     <CSSTransition
//                         in={props.focused}
//                         timeout={200}
//                         classNames="slide"
//                     >
//                         <NavSearch className={props.focused ? 'focused' : ''} onFocus={props.handleInputFocus} onBlur={props.handleInputBlur}></NavSearch>
//                     </CSSTransition>
//                     <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe614;</i>
//                     {getListArea(props.focused)}
//                 </SearchWrapper>
//                 <Addition>
//                     <Button className="writting">
//                         <i className="iconfont">&#xe615;</i>
//                         写文章
//                     </Button>
//                     <Button className="reg">注册</Button>
//                 </Addition>
//             </Nav>
//         </HeaderWrapper>
//     )
// }

const mapStateToProps = (state, ownProps) => {
    return {
        focused:state.get('header').get('focused'),//两种写法等效
        list:state.getIn(['header','list'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(){
            dispatch(actionCreators.getList())
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);