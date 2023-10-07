import { connect } from "react-redux"
import { regenerateArray } from "../actions/arrayActions"
const Slider = (props) => {
  return (
    <div className="size">
        <p>Change Array Size & Sorting Speed </p>
        <input type="range" onChange={props.regenerateArray} id="Size" name="Change Array Size & Sorting Speed" min="1" max="20"/>
      </div>
  )
}
export default connect(null, {regenerateArray})(Slider)