import React, { Component } from 'react'
import dog from "./DogIcon.png"
import "./Animal.css"

export default class AnimalList extends Component {

    render () {
        return (
            <section className="animals">
            {
                this.props.animals.map(animal =>
                    <div key={animal.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src={dog} className="icon--dog" alt="dog profile"/>
                                {animal.name}
                                <button onClick={() => this.props.deleteAnimal("animals",animal.id)}
                                    className="card-link">Delete</button>
                            </h5>
                        </div>
                    </div>
                )
            }
            </section>
        )
    }
}