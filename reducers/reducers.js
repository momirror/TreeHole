import {combineReducers} from 'redux';
import {INCREASE,DECREASE,RESET} from '../actions/actionType';

const defaultState = {
  count:0,
  factor:1,
}

counter = (state = defaultState,action) => {
  switch (action.type) {
    case INCREASE:
         return {...state,count:state.count + state.factor};
    case DECREASE:
         return {...state,count:state.count - state.factor};
    case RESET:
         return {...state,count:0};         
         
    default:
      return state;  
  }
}

export default combineReducers({
  counter
});












