import  {combineReducers} from 'redux'
import arrayReducer from './arrayReducer'

export default combineReducers({
    //array reducer
    array: arrayReducer,
})