import React, { PureComponent,Fragment } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { actionCreators } from '../store'

import { ListItem,ListInfo,LoadMore } from '../style'
class List extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        const { articleList,page,loadMoreList } =this.props;
        return (
            <Fragment>
                { articleList.map((item,index)=>{
                    return (
                        <Link key={index} to={"/detail/"+item.get('id')}>
                            <ListItem>
                                <img className="pic" alt="" src={item.get('img')} />
                                <ListInfo>
                                    <span className="title">{item.get('title')}</span>
                                    <p className="abstract">{item.get('desc')}</p>
                                    <div className="meta"></div>
                                </ListInfo>
                            </ListItem>
                        </Link>
                    )
                }) }
                <LoadMore onClick={()=>loadMoreList(page)}>加载更多...</LoadMore>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        articleList: state.getIn(['home','articleList']),
        page: state.getIn(['home','articlePage'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadMoreList: (page) => {
            dispatch(actionCreators.getMoreList(page));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(List);