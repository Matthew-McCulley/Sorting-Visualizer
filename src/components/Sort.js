import {connect} from 'react-redux'
import { bubbleSort, heapSort, quickSort} from '../actions/arrayActions'
const Sort = (props) => {
  
  function beginSort(){
    const selected = document.getElementsByClassName("selectedAlgorithm")
    if(selected.length === 1){
      if(selected[0].textContent === 'Bubble Sort'){
        props.bubbleSort(props.array)
      }else if(selected[0].textContent === 'Heap Sort'){
        props.heapSort(props.array)
      }
      else if(selected[0].textContent === 'Quick Sort'){
        props.quickSort(props.array, 0, props.array.length-1)
      }
    }
  }
return (
    <div className="sort">
        <button onClick={beginSort}>Sort!</button>
      </div>
  )
}
const mapStateToProps = state =>({
  array: state.array.array
})
export default connect(mapStateToProps, {bubbleSort, heapSort,quickSort})(Sort)