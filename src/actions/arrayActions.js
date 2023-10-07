import { SWAP, REGERNATE_ARRAY, BUBBLE_SORT,HEAP_SORT,QUICK_SORT } from "./types";

export const regenerateArray = () => dispatch => {
    const size = document.getElementById("Size").value * 5
    let newArray = new Array(size)
    for(let i = 0; i < size; i++){
        // Returns a random integer from 1 to 100:
        newArray[i] = Math.floor(Math.random() * 100) + 1;
    }
    dispatch({
        type:REGERNATE_ARRAY,
        payload: newArray
    })
    
}
export const swap = (array, i,j) => dispatch =>{
    //whenever want to send promise, send dispatch
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp 
        dispatch({
          type: SWAP,
          payload: [...array],
        });
}


export const heapSort = (array) => async(dispatch) => {
  let index, swindex, val, n = array.length
  let bars = document.getElementsByClassName('arrayIndex');
  let delay = 25; // Initial delay in milliseconds
  for(let i = 0; i < n; i++){
    index = i 
    val = array[index]


    await new Promise((resolve) => {
      setTimeout(() => {
        bars[index].style.backgroundColor = 'green';
        dispatch({
          type: BUBBLE_SORT,
          payload: [...array],
        });
        resolve(); // Resolve the Promise after changing the color
      }, delay);})


    while(index > 0){
      swindex = Math.floor((index-1)/2)
      await new Promise((resolve) => {
        setTimeout(() => {
          bars[swindex].style.backgroundColor = 'green';
          dispatch({
            type: BUBBLE_SORT,
            payload: [...array],
          });
          resolve(); // Resolve the Promise after changing the color
        }, delay);})
      if(array[swindex] >= val){
        await new Promise((resolve) => {
          setTimeout(() => {
            bars[index].style.backgroundColor = 'green';
            dispatch({
              type: BUBBLE_SORT,
              payload: [...array],
            });
            resolve(); // Resolve the Promise after changing the color
          }, delay);})
        break 
      }else{
        await new Promise((resolve) => {
          setTimeout(() => {
            bars[index].style.backgroundColor = 'red';
            bars[swindex].style.backgroundColor = 'red';

            dispatch({
              type: BUBBLE_SORT,
              payload: [...array],
            });
            resolve(); // Resolve the Promise after changing the color
          }, delay);})
        array[index] = array[swindex] 
        index = swindex

        await new Promise((resolve) => {
          setTimeout(() => {
            bars[index].style.backgroundColor = 'green';
            bars[swindex].style.backgroundColor = 'green';

            dispatch({
              type: BUBBLE_SORT,
              payload: [...array],
            });
            resolve(); // Resolve the Promise after changing the color
          }, delay);})

      }
    }
    array[index]=val
  }

  for( let i = n - 1; i >= 0; i--){
    await new Promise((resolve) => {
      setTimeout(() => {
        bars[i].style.backgroundColor = 'red';
        bars[0].style.backgroundColor = 'red';
        dispatch({
          type: BUBBLE_SORT,
          payload: [...array],
        });
        resolve(); // Resolve the Promise after changing the color
      }, delay);})
    val = array[i]
    array[i] = array[0]
    array[0] = val 
    index = 0

    await new Promise((resolve) => {
      setTimeout(() => {
        bars[i].style.backgroundColor = 'green';
        bars[0].style.backgroundColor = 'green';
        dispatch({
          type: BUBBLE_SORT,
          payload: [...array],
        });
        resolve(); // Resolve the Promise after changing the color
      }, delay);})
    while(index <= i-1){
      swindex = 2*index+1
      if((swindex+1<i-1) && (array[swindex] < array[swindex+1])){
        await new Promise((resolve) => {
          setTimeout(() => {
            bars[swindex+1].style.backgroundColor = 'green';
            dispatch({
              type: BUBBLE_SORT,
              payload: [...array],
            });
            resolve(); // Resolve the Promise after changing the color
          }, delay);})
        swindex++
      }
      if(swindex > i-1 || array[swindex] < val){
        break 
      }else{
        await new Promise((resolve) => {
          setTimeout(() => {
            bars[swindex].style.backgroundColor = 'red';
            bars[index].style.backgroundColor = 'red';
            dispatch({
              type: BUBBLE_SORT,
              payload: [...array],
            });
            resolve(); // Resolve the Promise after changing the color
          }, delay);})
        array[index]=array[swindex]
        index=swindex

        await new Promise((resolve) => {
          setTimeout(() => {
            bars[swindex].style.backgroundColor = 'green';
            bars[index].style.backgroundColor = 'green';
            dispatch({
              type: BUBBLE_SORT,
              payload: [...array],
            });
            resolve(); // Resolve the Promise after changing the color
          }, delay);})
      }
    }
    array[index]=val
    await new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type: BUBBLE_SORT,
          payload: [...array],
        });
        resolve(); // Resolve the Promise after changing the color
      }, delay);})
  }
  await new Promise((resolve) => {
    setTimeout(() => {
      dispatch({
        type: BUBBLE_SORT,
        payload: [...array],
      });
      resolve(); // Resolve the Promise after changing the color
    }, delay);})
}











export const bubbleSort = (array) => async (dispatch) => {
    let temp;
    let swapped;
    let bars = document.getElementsByClassName('arrayIndex');
    let delay = 25; // Initial delay in milliseconds
  
    for (let i = 0; i < array.length - 1; i++) {
      await new Promise((resolve) => {
        setTimeout(() => {
          bars[i].style.backgroundColor = 'green';
          dispatch({
            type: BUBBLE_SORT,
            payload: [...array],
          });
          resolve(); // Resolve the Promise after changing the color
        }, delay);
      });
  
      for (let j = 0; j < array.length - i - 1; j++) {
        await new Promise((resolve) => {
          setTimeout(() => {
            bars[j].style.backgroundColor = 'green';
            dispatch({
              type: BUBBLE_SORT,
              payload: [...array],
            });
            resolve(); // Resolve the Promise after changing the color
          }, delay);
        });
  
        if (array[j] > array[j + 1]) {
          await new Promise((resolve) => {
            setTimeout(() => {
              bars[j].style.backgroundColor = 'red';
              bars[j + 1].style.backgroundColor = 'red';
              dispatch({
                type: BUBBLE_SORT,
                payload: [...array],
              });
              resolve(); // Resolve the Promise after changing the color
            }, delay);
          });
  
          temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
  
          await new Promise((resolve) => {
            setTimeout(() => {
              bars[j].style.backgroundColor = 'green';
              bars[j + 1].style.backgroundColor = 'green';
              dispatch({
                type: BUBBLE_SORT,
                payload: [...array],
              });
              resolve(); // Resolve the Promise after changing the color
            }, delay);
          });
  
          swapped = true;
        }
      }
  
      if (swapped === false) break;
  
      // Adjust the delay for the next iteration if needed
    }
  };
  

  export const quickSort = (array, left, right) => async(dispatch) => {
    if(left < right){
      let itemFromLeft = left, itemFromRight = right, k = left 
      let key = array[k]
      console.log(key, itemFromLeft, itemFromRight)
      while(itemFromLeft < itemFromRight){
        while(array[itemFromLeft] <= key && itemFromLeft < right){
          console.log('1')
          itemFromLeft++
        }
        while(array[itemFromRight] > key && itemFromRight > left){
          console.log('2')
          itemFromRight--
        }
        if(itemFromLeft < itemFromRight){
          console.log('3')
          dispatch(swap(array, itemFromLeft, itemFromRight))
        }
      } 
      dispatch(swap(array, left, itemFromRight))
      await dispatch(quickSort(array,left,itemFromRight-1))
      await dispatch(quickSort(array,itemFromRight+1,right))
    }
    dispatch({
      type: QUICK_SORT,
      payload: [...array],
    });
  };
