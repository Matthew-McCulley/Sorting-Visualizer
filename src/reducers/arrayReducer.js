import {BUBBLE_SORT, HEAP_SORT, REGERNATE_ARRAY, SWAP, QUICK_SORT, MERGE_SORT} from '../actions/types'
function generateRandomArray(){
    const size = 100
    let array = new Array(size)
    for(let i = 0; i < size; i++){
        // Returns a random integer from 1 to 100:
        array[i] = Math.floor(Math.random() * 100) + 1;
    }
    return array
      
}
const initialState = {
    array: generateRandomArray()
}

export default function (state = initialState, action){
    switch(action.type){
        case BUBBLE_SORT:
            return{
                ...state,
                array:action.payload
            }
        case HEAP_SORT:
            return{
                ...state,
                array:action.payload
            }
        case QUICK_SORT:
            return{
                ...state,
                array:action.payload
            }
        case MERGE_SORT:
            return{
                ...state,
                array:action.payload
            }
        case REGERNATE_ARRAY:
            return{
                ...state,
                array: action.payload
            }
        case SWAP:
            return {
                ...state,
                array:action.payload
            }
        default:
            return state
    }
}