import {connect} from 'react-redux'
const Frame = (props) => {
   // Render the 'array' as an unordered list
   const listItem = props.array.map((item, index) =>(
    // Create an inline style object with the calculated height
    <div className="arrayIndex" key={index} style={{ height: item * 3 + 'px', 
    width: 600/props.array.length + 'px'}}></div>
  ))
  return (
   
    <div className="frame">
      {listItem}
    </div>
  )
}
const mapStateToProps = state => ({
  array: state.array.array
})
export default connect(mapStateToProps, {})(Frame)