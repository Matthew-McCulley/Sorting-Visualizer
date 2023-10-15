import { SWAP, REGERNATE_ARRAY, BUBBLE_SORT,HEAP_SORT,QUICK_SORT, MERGE_SORT } from "./types";

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
export const swap = (array, i,j) => async(dispatch) =>{
  let bars = document.getElementsByClassName('arrayIndex');
  let delay = 1000 / (document.getElementById("Size").value * 5)
      await new Promise((resolve) => {
        setTimeout(() => {
          bars[i].style.backgroundColor = 'red';
          bars[j].style.backgroundColor = 'red';
          dispatch({
            type: BUBBLE_SORT,
            payload: [...array],
          });
          resolve(); // Resolve the Promise after changing the color
        }, delay);
      });


    //whenever want to send promise, send dispatch
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
        
        await new Promise((resolve) => {
          setTimeout(() => {
            bars[i].style.backgroundColor = 'green';
            bars[j].style.backgroundColor = 'green';
            dispatch({
              type: BUBBLE_SORT,
              payload: [...array],
            });
            resolve(); // Resolve the Promise after changing the color
          }, delay);
        });
}


export const heapSort = (array) => async(dispatch) => {
  let index, swindex, val, n = array.length
  let bars = document.getElementsByClassName('arrayIndex');
  let delay = 1000 / (document.getElementById("Size").value * 5)
  for(let i = 0; i < n; i++){
    index = i 
    val = array[index]


    await new Promise((resolve) => {
      setTimeout(() => {
        bars[index].style.backgroundColor = 'green';
        dispatch({
          type: HEAP_SORT,
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
            type: HEAP_SORT,
            payload: [...array],
          });
          resolve(); // Resolve the Promise after changing the color
        }, delay);})
      if(array[swindex] >= val){
        await new Promise((resolve) => {
          setTimeout(() => {
            bars[swindex].style.backgroundColor = 'lightblue';
            dispatch({
              type: HEAP_SORT,
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
              type: HEAP_SORT,
              payload: [...array],
            });
            resolve(); // Resolve the Promise after changing the color
          }, delay);})
        array[index] = array[swindex] 

        await new Promise((resolve) => {
          setTimeout(() => {
            bars[index].style.backgroundColor = 'lightblue';
            resolve(); // Resolve the Promise after changing the color
          }, delay);})

        index = swindex

        await new Promise((resolve) => {
          setTimeout(() => {
            bars[index].style.backgroundColor = 'lightblue';
            bars[swindex].style.backgroundColor = 'lightblue';

            dispatch({
              type: HEAP_SORT,
              payload: [...array],
            });
            resolve(); // Resolve the Promise after changing the color
          }, delay);})

      }
    }
    array[index]=val
    await new Promise((resolve) => {
      setTimeout(() => {
        bars[index].style.backgroundColor = 'lightblue';
        dispatch({
          type: HEAP_SORT,
          payload: [...array],
        });
        resolve(); // Resolve the Promise after changing the color
      }, delay);})
  }

  for( let i = n - 1; i >= 0; i--){
    await new Promise((resolve) => {
      setTimeout(() => {
        bars[i].style.backgroundColor = 'red';
        bars[0].style.backgroundColor = 'red';
        dispatch({
          type: HEAP_SORT,
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
        bars[i].style.backgroundColor = 'lightblue';
        bars[0].style.backgroundColor = 'lightblue';
        dispatch({
          type: HEAP_SORT,
          payload: [...array],
        });
        resolve(); // Resolve the Promise after changing the color
      }, delay);})
    while(index <= i-1){
      swindex = 2*index+1
      if((swindex+1<i-1) && (array[swindex] < array[swindex+1])){
        await new Promise((resolve) => {
          setTimeout(() => {
            bars[swindex].style.backgroundColor = 'lightblue';
            bars[swindex+1].style.backgroundColor = 'green';
            dispatch({
              type: HEAP_SORT,
              payload: [...array],
            });
            resolve(); // Resolve the Promise after changing the color
          }, delay);})
        swindex++
      }
      if(swindex > i-1 || array[swindex] < val){
        if(array[swindex] < val){
          await new Promise((resolve) => {
            setTimeout(() => {
              bars[swindex].style.backgroundColor = 'lightblue';
              resolve(); // Resolve the Promise after changing the color
            }, delay);})
        }
        break 
      }else{
        await new Promise((resolve) => {
          setTimeout(() => {
            bars[swindex].style.backgroundColor = 'red';
            bars[index].style.backgroundColor = 'red';
            dispatch({
              type: HEAP_SORT,
              payload: [...array],
            });
            resolve(); // Resolve the Promise after changing the color
          }, delay);})
        array[index]=array[swindex]
        await new Promise((resolve) => {
          setTimeout(() => {
            bars[index].style.backgroundColor = 'lightblue';
            resolve(); // Resolve the Promise after changing the color
          }, delay);})
        index=swindex

        await new Promise((resolve) => {
          setTimeout(() => {
            bars[swindex].style.backgroundColor = 'green';
            bars[index].style.backgroundColor = 'green';
            dispatch({
              type: HEAP_SORT,
              payload: [...array],
            });
            resolve(); // Resolve the Promise after changing the color
          }, delay);})
      }
    }
    array[index]=val
    await new Promise((resolve) => {
      setTimeout(() => {
        bars[index].style.backgroundColor = 'lightblue';
        dispatch({
          type: HEAP_SORT,
          payload: [...array],
        });
        resolve(); // Resolve the Promise after changing the color
      }, delay);})
  }
  await new Promise((resolve) => {
    setTimeout(() => {
      dispatch({
        type: HEAP_SORT,
        payload: [...array],
      });
      resolve(); // Resolve the Promise after changing the color
    }, delay);})
}











export const bubbleSort = (array) => async (dispatch) => {
    let temp;
    let swapped;
    let bars = document.getElementsByClassName('arrayIndex');
    let delay = 1000 / (document.getElementById("Size").value * 5)
  
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
        await new Promise((resolve) => {
          setTimeout(() => {
            bars[j].style.backgroundColor = 'lightblue';
            bars[j+1].style.backgroundColor = 'lightblue';
            dispatch({
              type: BUBBLE_SORT,
              payload: [...array],
            });
            resolve(); // Resolve the Promise after changing the color
          }, delay);
        });
      }
      await new Promise((resolve) => {
        setTimeout(() => {
          bars[i].style.backgroundColor = 'lightblue';
          dispatch({
            type: BUBBLE_SORT,
            payload: [...array],
          });
          resolve(); // Resolve the Promise after changing the color
        }, delay);
      });
      if (swapped === false) break;
  
      // Adjust the delay for the next iteration if needed
    }
  };
  

  export const quickSort = (array, left, right) => async(dispatch) => {
    let delay = 1000 / (document.getElementById("Size").value * 5)
    let bars = document.getElementsByClassName('arrayIndex');

    if(left < right){
      let itemFromLeft = left, itemFromRight = right, k = left 
      let key = array[k]

      await new Promise((resolve) => {
        setTimeout(() => {
          bars[itemFromLeft].style.backgroundColor = 'green';
          bars[itemFromRight].style.backgroundColor = 'green';
          dispatch({
            type: QUICK_SORT,
            payload: [...array],
          });
          resolve(); // Resolve the Promise after changing the color
        }, delay);
      });


      while(itemFromLeft < itemFromRight){
        while(array[itemFromLeft] <= key && itemFromLeft < right){

          await new Promise((resolve) => {
            setTimeout(() => {
              console.log('1')
              bars[itemFromLeft].style.backgroundColor = 'lightblue';
              bars[itemFromLeft + 1].style.backgroundColor = 'green';
              dispatch({
                type: QUICK_SORT,
                payload: [...array],
              });
              resolve(); // Resolve the Promise after changing the color
            }, delay);
          });


          itemFromLeft++
        }
        while(array[itemFromRight] > key && itemFromRight > left){

          await new Promise((resolve) => {
            setTimeout(() => {
              bars[itemFromRight].style.backgroundColor = 'lightblue';
              bars[itemFromRight - 1].style.backgroundColor = 'green';
              dispatch({
                type: QUICK_SORT,
                payload: [...array],
              });
              resolve(); // Resolve the Promise after changing the color
            }, delay);
          });

          itemFromRight--
        }
        if(itemFromLeft < itemFromRight){
          dispatch(swap(array, itemFromLeft, itemFromRight))

          await new Promise((resolve) => {
            setTimeout(() => {
              bars[itemFromLeft].style.backgroundColor = 'lightblue';
              bars[itemFromRight].style.backgroundColor = 'lightblue';
              dispatch({
                type: QUICK_SORT,
                payload: [...array],
              });
              resolve(); // Resolve the Promise after changing the color
            }, delay);
          });
        }
      } 
      dispatch(swap(array, left, itemFromRight))
      console.log('2')
      await new Promise((resolve) => {
        setTimeout(() => {
          bars[left].style.backgroundColor = 'lightblue';
          bars[itemFromRight].style.backgroundColor = 'lightblue';
          bars[right].style.backgroundColor = 'lightblue';
          dispatch({
            type: QUICK_SORT,
            payload: [...array],
          });
          resolve(); // Resolve the Promise after changing the color
        }, delay);
      });

      await dispatch(quickSort(array,left,itemFromRight-1))
      await dispatch(quickSort(array,itemFromRight+1,right))
      await new Promise((resolve) => {
        setTimeout(() => {
          bars[left].style.backgroundColor = 'lightblue';
          bars[itemFromRight].style.backgroundColor = 'lightblue';
          bars[right].style.backgroundColor = 'lightblue';
          dispatch({
            type: QUICK_SORT,
            payload: [...array],
          });
          resolve(); // Resolve the Promise after changing the color
        }, delay);
      });
    }
  };


  export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  
  function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, i]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, i]);
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([j, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([j, j]);
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }