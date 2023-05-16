import React from "react"
import PlotLR from "./PlotLR"

class ShowLR extends React.Component {
    rectangle = this.props.rectangle;
    render() {
        if (this.rectangle.data) {
            return (<div className="rectangle" >
                <PlotLR dataframe={this.rectangle.dataframe} x_column={this.rectangle.x_column} y_column={this.rectangle.y_column}/>
                <p>Ac: {this.rectangle.data.Ac}</p>
                <p>F1 score: {this.rectangle.data.F1_score}</p>
                <p>Precision: {this.rectangle.data.Precision}</p>
                <p>Recall: {this.rectangle.data.Recall}</p>
                {/* {console.log(this.rectangle)} */}
            </div>)
        }
        return (<div className="rectangle" >
            <p>Nothing to plot</p>
        </div>)
  }
}

export default ShowLR