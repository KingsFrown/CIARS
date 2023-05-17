import React from "react"

class AddTN extends React.Component {
  rectangleAdd = {}
  constructor(props) {
    super(props)
    this.state ={
        dataframe: '',
        x_column: '',
        y_column: '',
        data: [{}],
    }
  }

  render() {
    return (
      <div>
        <form ref={(el) => this.myForm = el}>
            <input placeholder="DataFrame" onChange={(e) => this.setState({dataframe: e.target.value})}/>
            <input placeholder="X column" onChange={(e) => this.setState({x_column: e.target.value})}/>
            <input placeholder="Y column" onChange={(e) => this.setState({y_column: e.target.value})}/>
            <button type='button' onClick={() => {
              this.myForm.reset()
              
            //   const requestOptions = {
            //       method: 'POST',
            //       headers: { 'Content-Type': 'application/json' },
            //       body: JSON.stringify({'file': this.state.dataframe, 'x_column': this.state.x_column, 'y_column': this.state.y_column})
            //   };

              this.rectangleAdd = {
                dataframe: this.state.dataframe,
                x_column: this.state.x_column,
                y_column: this.state.y_column,
                // data: this.state.data
              }
              
            //   fetch('/LR', requestOptions)
            //       .then(response => response.json())
            //       .then(data => {
            //           this.setState({
            //               data: data,
            //           });
            //           this.rectangleAdd.data = data;
            //           console.log(data);
            //           console.log(this.rectangleAdd.data);

            //       });


              if(this.props.rectangle)
                this.rectangleAdd.id = this.props.rectangle.id
                this.rectangleAdd.name = this.props.rectangle.name
                this.rectangleAdd.dataframe = this.state.dataframe
                this.rectangleAdd.x_column = this.state.x_column
                this.rectangleAdd.y_column = this.state.y_column
                // this.rectangleAdd.data = this.state.data
              this.props.onAdd(this.rectangleAdd)
            }

            }>Добавить</button>
        </form>
      </div>

    )
  }
}

export default AddTN