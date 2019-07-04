import {fromJS} from 'immutable'
import * as constants from './constants';

const defaultState=fromJS({
    login:false
})

const change_login=(state,action)=>{
    return state.merge({
        'login':fromJS(action.value)
    })
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case constants.CHANGE_LOGIN:
            return change_login(state,action)
        default:
            return state

    }
}