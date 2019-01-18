import React, { Component } from 'react'


class LocationList extends Component {
    render() {
        return (
            <section className="locations">
            <h1>Locations</h1>
            {
                this.props.locations.map(location =>
                    <div key={location.id}>
                        <p>{location.name}: {location.address}</p>
                    </div>
                    )
            }
            </section>
        )
    }
}

export default LocationList