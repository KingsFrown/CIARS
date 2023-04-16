import React from "react"
import Header from "./components/Header"
import Rectangles from "./components/Rectangles"
import AddRectangle from "./components/AddRectangle"

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            rectangles: []
        }
        this.addRectangle = this.addRectangle.bind(this)
        this.deleteRectangle = this.deleteRectangle.bind(this)
        this.editRectangle = this.editRectangle.bind(this)
    }
    
    render() {
        return (<div>
            <Header title="Модель машинного обучения" />
            <main>
                <Rectangles rectangles={this.state.rectangles} onEdit={this.editRectangle} onDelete={this.deleteRectangle}/>
            </main>
            <aside>
                <AddRectangle onAdd={this.addRectangle}/>
            </aside>
        </div>)
    }

    deleteRectangle(id) {
        this.setState({
            rectangles: this.state.rectangles.filter((el) => el.id !== id)
        })
    }

    addRectangle(rectangle) {
        const id = this.state.rectangles.length + 1
        this.setState({ rectangles: [...this.state.rectangles, {id, ...rectangle}]})
    }

    editRectangle(rectangle) {
        console.log(rectangle)
        let allRectangles = this.state.rectangles
        allRectangles[rectangle.id - 1] = rectangle

        this.setState({rectangles: []}, () => {
            this.setState({rectangles: [...allRectangles] })
        })
    }
}

export default App;
