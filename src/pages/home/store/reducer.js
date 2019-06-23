import {fromJS} from 'immutable'
import * as constants from './constants';

const defaultState=fromJS({
    topicList:[],
    articleList:[],
    articlePage:1,
    recommandList:[],
    writerList:[],
    showScroll:false
});

const changeHomeData=(state,action)=>{
    return state.merge({
        'topicList':fromJS(action.topicList),
        'articleList':fromJS(action.articleList),
        'recommandList':fromJS(action.recommandList),
        'writerList':fromJS(action.writerList)
    })
}

const loadMoreData=(state,action)=>{
    return state.merge({
        'articleList':state.get('articleList').concat(action.articleList),
        'articlePage':action.nextPage
    })
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case constants.CHANGE_HOME_DATA:
            return changeHomeData(state,action);
        case constants.LOAD_MORE_DATA:
            return loadMoreData(state,action)
        case constants.TOGGLE_SHOW:
            return state.set('showScroll',action.showScroll)
        default:
            return state

    }
}