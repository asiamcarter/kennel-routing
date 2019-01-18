import React, { Component } from "react"

class AnimalList extends Component {
    render() {
        return (
            <section className="animals">
                <h1>Animals</h1>
                {
                    this.props.animals.map(animal =>
                        <div key={animal.id}>
                            {animal.name}
                        </div>
                        )
                }

            </section>

        )
    }
}

export default AnimalList
