// import React from "react"
// import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'
// import AddData from "./AddData"

// class Data extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             editForm: false
//         }
//     }
//     data = this.props.rectangle
//     render() {
//         return (<div className="rectangle" >
//             <IoCloseCircleSharp onClick={() => this.props.onDelete(this.rectangle.id)} className="delete-icon"/>
//             <IoHammerSharp onClick={() => {
//                 this.setState({
//                     editForm: !this.state.editForm
//                 })
//             }} className="edit-icon"/>  
//             <h3>{this.rectangle.name}</h3>

//             {((this.state.typeForm === 'Data')&&(this.state.editForm)) && <AddData />}
//             {((this.state.typeForm === 'Logistic Regression')&&(this.state.editForm)) && <AddLR />}
//         </div>)
//   }
// }

// export default Data