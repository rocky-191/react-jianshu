import axios from 'axios';
import * as constants from './constants';

export const login=(account,pwd)=>{
    return (dispatch)=>{
        axios.get('/api/login.json?account='+account+'&pwd='+pwd).then((res) => {
            let data=res.data.data;
            if(data){
                dispatch({type:constants.CHANGE_LOGIN,value:true})
            }else{
                alert('登录失败')
            }
        }).catch((err) => {
            
        });
    }
}

export const logout=()=>{
    return (dispatch)=>{
        dispatch({type:constants.CHANGE_LOGIN,value:false})
    }
}