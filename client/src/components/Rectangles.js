import React from "react"
import Rectangle from "./Rectangle"

class Rectangles extends React.Component {
    render() {
        if(this.props.rectangles.length > 0)
            return (<div>
                {this.props.rectangles.map((el) => (
                    <Rectangle onDelete={this.props.onDelete} onEdit={this.props.onEdit} key={el.id} rectangle={el} />
                ))}
            </div>)
        else
            return (<div className="rectangle">
                <h3>Модулей нет</h3>
            </div>)
    }
}

export default Rectangles