import React from "react"
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'
import { RiSlideshowFill } from "react-icons/ri"
import AddData from "./AddData"
import AddLR from "./AddLR"
import AddLinR from "./AddLinR"
import AddKMeans from "./AddKMeans"
import AddAnomaly from "./AddAnomaly"
import AddTN from "./AddTN"
import AddResult from "./AddResult"
import ShowLR from "./ShowLR"
import ShowLinR from "./ShowLinR"
import ShowKM from "./ShowKM"
import ShowAnomaly from "./ShowAnomaly"
import ShowTN from "./ShowTN"


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
            {((this.state.typeForm === 'Linear Regression')&&(this.state.editForm)) && <AddLinR rectangle={this.rectangle} onAdd={this.props.onEdit}/>}
            {((this.state.typeForm === 'Linear Regression')&&(this.state.showForm)) && <ShowLinR rectangle={this.rectangle}/>}
            {((this.state.typeForm === 'K Means')&&(this.state.editForm)) && <AddKMeans rectangle={this.rectangle} onAdd={this.props.onEdit}/>}
            {((this.state.typeForm === 'K Means')&&(this.state.showForm)) && <ShowKM rectangle={this.rectangle}/>}
            {((this.state.typeForm === 'Anomaly')&&(this.state.editForm)) && <AddAnomaly rectangle={this.rectangle} onAdd={this.props.onEdit}/>}
            {((this.state.typeForm === 'Anomaly')&&(this.state.showForm)) && <ShowAnomaly rectangle={this.rectangle}/>}
            {((this.state.typeForm === 'Tune Model')&&(this.state.editForm)) && <AddTN rectangle={this.rectangle} onAdd={this.props.onEdit}/>}
            {((this.state.typeForm === 'Tune Model')&&(this.state.showForm)) && <ShowTN rectangle={this.rectangle}/>}
            {((this.state.typeForm === 'Result')&&(this.state.editForm)) && <AddResult rectangle={this.rectangle} onAdd={this.props.onEdit}/>}
        </div>)
  }
}

export default Rectangle