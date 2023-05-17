import React from "react"
import PlotLinR from "./PlotLinR"

class ShowLinR extends React.Component {
    rectangle = this.props.rectangle;
    render() {
        if (this.rectangle.data) {
            return (<div className="rectangle" >
                <PlotLinR dataframe={this.rectangle.dataframe} x_column={this.rectangle.x_column} y_column={this.rectangle.y_column}/>
                <p>MAE: {this.rectangle.data.mae}</p>
                <p>MSE: {this.rectangle.data.mse}</p>
                {/* {console.log(this.rectangle)} */}
            </div>)
        }
        return (<div className="rectangle" >
            <p>Nothing to plot</p>
        </div>)
  }
}

export default ShowLinR