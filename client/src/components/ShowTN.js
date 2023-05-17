import React from "react"
import PlotTN from "./PlotTN";

class ShowTN extends React.Component {
    rectangle = this.props.rectangle;
    render() {
        if (this.rectangle) {
            return (<div className="rectangle" >
                <PlotTN dataframe={this.rectangle.dataframe} x_column={this.rectangle.x_column} y_column={this.rectangle.y_column}/>
            </div>)
        }
        return (<div className="rectangle" >
            <p>Nothing to plot</p>
        </div>)
  }
}

export default ShowTN