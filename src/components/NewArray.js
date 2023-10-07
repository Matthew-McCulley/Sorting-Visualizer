import { connect } from "react-redux"
import { regenerateArray } from "../actions/arrayActions"
const NewArray = (props) => {
  return (
    <div className="newArray">
        <button onClick={props.regenerateArray}>Generate New Array</button>
      </div>
  )
}

export default connect(null, {regenerateArray})(NewArray)