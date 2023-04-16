import React from "react"

class AddLR extends React.Component {
  rectangleAdd = {}
  constructor(props) {
    super(props)
    this.state ={
        prop1: '',
        prop2: ''
    }
  }

  render() {
    return (
      <div>
        <form ref={(el) => this.myForm = el}>
            <input placeholder="Свойство 1" onChange={(e) => this.setState({prop1: e.target.value})}/>
            <input placeholder="Свойство 2" onChange={(e) => this.setState({prop2: e.target.value})}/>
            <button type='button' onClick={() => {
              this.myForm.reset()
              this.rectangleAdd = {
                prop1: this.state.prop1,
                prop2: this.state.prop2,
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

export default AddLR