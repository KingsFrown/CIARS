import React from "react"

class AddRectangle extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
        name: 'Data'
    }
  }

  render() {
    return (
      <div>
        <h3>Добавить новый модуль</h3>
        <form ref={(el) => this.myForm = el}>
            <label htmlFor="module">Выберите модуль:</label>
            <select name='module' id='module' required onChange={(e) => this.setState({name: e.target.value})}>
              <option value='Data'>Data</option>
              <option value='Logistic Regression'>Logistic Regression</option>
            </select>
            <button type='button' onClick={() => {
              this.myForm.reset()
              this.setState({name: 'Data'})
              this.props.onAdd({
                  name: this.state.name,
              })}
            }>Добавить</button>
        </form>
      </div>

    )
  }
}

export default AddRectangle