import React, { PureComponent } from 'react';
import {connect} from 'react-redux'
import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';
import { actionCreators } from './store';

import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style';

class Home extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvents();
    }

    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScrollTopShow)
    }

    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }

    goTop(){
        window.scrollTo(0,0);
    }

    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" alt='' src="https://upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                {
                    this.props.showScroll ? <BackTop onClick={this.goTop.bind(this)}>Top</BackTop> : null
                }
            </HomeWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        showScroll: state.getIn(['home','showScroll'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeHomeData: () => {
            dispatch(actionCreators.getHomeData());
        },
        changeScrollTopShow: () => {
            if(document.documentElement.scrollTop>100){
                dispatch(actionCreators.toggleTopShow(true))
            }else{
                dispatch(actionCreators.toggleTopShow(false))
            }
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);