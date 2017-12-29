import {combineReducers} from 'redux';
import {FETCH_WEATHER} from "../actions/index"

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER :
            //state.push(action.payload.data)
            return state.concat([action.payload.data]); //return new instance everytime
    }
    return state;
}