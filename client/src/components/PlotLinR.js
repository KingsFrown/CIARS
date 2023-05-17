import React, { Component } from 'react'; 
import Plot from 'react-plotly.js'; 
 
class PlotLinR extends Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      plot: 0 
    }; 
  }
  componentDidMount() {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({'file': this.props.dataframe, 'x_column': this.props.x_column, 'y_column': this.props.y_column})
    }; 
    fetch('/plotlinr', requestOptions) 
      .then(res => res.json()) 
      .then(data => { 
        this.setState({ plot: data }); 
      }); 
  } 
 
  render() { 
    const { plot } = this.state; 
    return ( 
      <div className='plot'> 
        <h1>PlotLinR</h1> 
        <Plot data={plot.data} layout={plot.layout} className='plotlinr'/> 
      </div> 
    ); 
  } 
} 
 
export default PlotLinR;