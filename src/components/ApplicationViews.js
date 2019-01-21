import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'


export default class ApplicationViews extends Component {
    state = {
        animals: [],
        employees: [],
        locations: []
    }

    deleteAnimal = (location,id) => {
        return fetch(`http://localhost:5002/${location}/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/animals`))
        .then(e => e.json())
        .then(animals => this.setState({
            animals: animals
        })
      )
    }

    deleteEmployee = (location, id) => {
        return fetch(`http://localhost:5002/${location}/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch ('http://localhost:5002/employees'))
        .then(e => e.json())
        .then(employees => this.setState({
            employees: employees
        }))
    }

    componentDidMount() {
        const newState = {}

        fetch("http://localhost:5002/animals")
            .then(r => r.json())
            .then(animalsArray => newState.animals = animalsArray)
            .then(() => fetch("http://localhost:5002/employees")
            .then(r => r.json()))
            .then(employeesArray => newState.employees = employeesArray)
            .then(() => fetch("http://localhost:5002/locations")
            .then(r => r.json()))
            .then(locationsArray => newState.locations = locationsArray)
            .then(()=> this.setState(newState))
    }

    render() {
        return (
            <React.Fragment>
                 <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route exact path="/animals" render={(props) => {
                return <AnimalList deleteAnimal={this.deleteAnimal}
                animals={this.state.animals} />
                }} />

                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees}
                    deleteEmployee={this.deleteEmployee} />
                }} />
            </React.Fragment>
        )
    }
}
