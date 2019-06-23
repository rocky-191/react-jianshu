import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable'
const changeHomeData=(data)=>({
    type:constants.CHANGE_HOME_DATA,
    topicList:data.topicList,
    articleList:data.articleList,
    recommandList:data.recommandList,
    writerList:data.writerList
})

const loadMoreData=(data,nextPage)=>({
    type:constants.LOAD_MORE_DATA,
    articleList:fromJS(data),
    nextPage:fromJS(nextPage)
})

export const getHomeData =()=>{
    return (dispatch)=>{
        axios.get('/api/home.json').then((res) => {
            const { data }=res.data;
            const action=changeHomeData(data);
            dispatch(action)
        });
    }
}

export const getMoreList=(page)=>{
    return (dispatch)=>{
        axios.get('/api/homeList.json?page='+page).then((res) => {
            const { data }=res.data;
            dispatch(loadMoreData(data.list,page+1))
        });
    }
}

export const toggleTopShow=(isShow)=>({
    type:constants.TOGGLE_SHOW,
    showScroll:isShow
})