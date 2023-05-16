import React from "react"
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'
import { RiSlideshowFill } from "react-icons/ri"
import AddData from "./AddData"
import AddLR from "./AddLR"
import AddResult from "./AddResult"
import ShowLR from "./ShowLR"


class Rectangle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editForm: false,
            showForm: false,
            typeForm: this.rectangle.name
        }
    }
    rectangle = this.props.rectangle
    render() {
        return (<div className="rectangle" >
            <IoCloseCircleSharp onClick={() => this.props.onDelete(this.rectangle.id)} className="delete-icon"/>
            <IoHammerSharp onClick={() => {
                this.setState({
                    showform: false,
                    editForm: !this.state.editForm
                })
            }} className="edit-icon"/> 
            <RiSlideshowFill onClick={() => {
                this.setState({
                    editForm: false,
                    showForm: !this.state.showForm
                })
            }} className="show-icon"/> 
            <h3>{this.rectangle.name}</h3>
            {/* {(this.state.typeForm === 'Result') && <div> <h3>MAE: {this.rectangle.mae}</h3> <h3>MSE: {this.rectangle.mse}</h3> </div>} */}
            {((this.state.typeForm === 'Data')&&(this.state.editForm)) && <AddData rectangle={this.rectangle} onAdd={this.props.onEdit}/>}
            {((this.state.typeForm === 'Logistic Regression')&&(this.state.editForm)) && <AddLR rectangle={this.rectangle} onAdd={this.props.onEdit}/>}
            {((this.state.typeForm === 'Logistic Regression')&&(this.state.showForm)) && <ShowLR rectangle={this.rectangle}/>}
            {((this.state.typeForm === 'Result')&&(this.state.editForm)) && <AddResult rectangle={this.rectangle} onAdd={this.props.onEdit}/>}
        </div>)
  }
}

export default Rectangle