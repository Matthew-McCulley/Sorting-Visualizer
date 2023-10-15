import {connect} from 'react-redux'
import { bubbleSort, heapSort, quickSort, getMergeSortAnimations} from '../actions/arrayActions'
const Sort = (props) => {
  
  function mergeSort() {
    let delay = 1000 / (document.getElementById("Size").value * 5)
    const animations = getMergeSortAnimations(props.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('arrayIndex');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? 'red' : 'lightblue';
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * delay);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight*3}px`;
          barOneStyle.backgroundColor = 'lightblue'
        }, i * delay);
      }
    }
  }


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
      else if(selected[0].textContent === 'Merge Sort'){
        mergeSort()
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
export default connect(mapStateToProps, {bubbleSort, heapSort,quickSort, getMergeSortAnimations})(Sort)