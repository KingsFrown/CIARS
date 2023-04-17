import React from "react"

class AddResult extends React.Component {
  rectangleAdd = {}
  constructor(props) {
    super(props)
    this.state ={
        mae: 'MAE',
        mse: 'MSE'
    }
  }

  render() {
    return (
      <div>
        <form ref={(el) => this.myForm = el}>
            <input placeholder="MAE" onChange={(e) => this.setState({mae: e.target.value})}/>
            <input placeholder="MSE" onChange={(e) => this.setState({mse: e.target.value})}/>
            <button type='button' onClick={() => {
              this.myForm.reset()
              this.rectangleAdd = {
                mae: this.state.mae,
                mse: this.state.mse
              }
              if(this.props.rectangle)
                this.rectangleAdd.id = this.props.rectangle.id
                this.rectangleAdd.name = this.props.rectangle.name
              this.props.onAdd(this.rectangleAdd)
            }
            }>Добавить</button>
        </form>
      </div>

    )
  }
}

export default AddResult