import axios from 'axios';
import * as constants from './constants';

const changeHomeData=(data)=>({
    type:constants.CHANGE_HOME_DATA,
    topicList:data.topicList,
    articleList:data.articleList,
    recommandList:data.recommandList,
    writerList:data.writerList
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