import React from "react"
import Header from "./components/Header"
import Rectangles from "./components/Rectangles"
import AddRectangle from "./components/AddRectangle"

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            rectangles: [],
            data: [{}],
        }
        this.addRectangle = this.addRectangle.bind(this)
        this.deleteRectangle = this.deleteRectangle.bind(this)
        this.editRectangle = this.editRectangle.bind(this)
    }

    // componentDidMount() {
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({'file':'Video_Games.csv', 'x_column':'NA_Sales', 'y_column':'JP_Sales'})
    //     };
    //     fetch('/LR', requestOptions)
    //         .then(response => response.json())
    //         .then(data => {
    //             this.setState({
    //                 data: data,

    //             });
    //             console.log(data);
    //         });
    // }

    // componentDidMount() {
    //     fetch('/members')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             this.setState({
    //             data: data,
    //             });
    //             console.log(data);
    //         });
    //   }
    
    render() {
        return (<div>
            <Header title="Модель машинного обучения" />
            <main>
                <Rectangles rectangles={this.state.rectangles} onEdit={this.editRectangle} onDelete={this.deleteRectangle}/>
            </main>
            <aside>
                <AddRectangle onAdd={this.addRectangle}/>
            </aside>
            {/* <div>
                {typeof this.state.data.data === 'undefined' ? (
                <p>Loading...</p>
                ) : (
                this.state.data.data.map((member, i) => <p key={i}>{member}</p>)
                )}
            </div> */}

            {/* <div>
                {typeof this.state.data.Ac === 'undefined' ? (
                    <p>Loading...</p>
                ) : (
                    <div>
                        <p>Ac: {this.state.data.Ac}</p>
                    </div>
                )}
            </div>
            <PlotLR/> */}
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
        // console.log(rectangle)
        let allRectangles = this.state.rectangles
        allRectangles[rectangle.id - 1] = rectangle

        this.setState({rectangles: []}, () => {
            this.setState({rectangles: [...allRectangles] })
        })
    }
}

export default App;
