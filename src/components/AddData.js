import React from "react"

class AddData extends React.Component {
  rectangleAdd = {}
  constructor(props) {
    super(props)
    this.state ={
        link: ''
    }
  }

  render() {
    return (
      <div>
        <form ref={(el) => this.myForm = el}>
            <input placeholder="Ссылка на файл" onChange={(e) => this.setState({link: e.target.value})}/>
            <button type='button' onClick={() => {
              this.myForm.reset()
              this.rectangleAdd = {
                link: this.state.link,
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

export default AddData