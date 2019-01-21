import React, { Component } from "react"

export default class OwnerList extends Component {
    render() {
        return (
            <section className = "owners">
                <h1>Owners</h1>
                {
                    this.props.owners.map( owner =>
                        <div key = {owner.id}>
                            {owner.name}
                            <button onClick= {() => this.props.deleteOwner("owners", owner.id)}
                                className="card-link">Delete</button>
                        </div>
                    )
                }
            </section>
        )
    }
}

