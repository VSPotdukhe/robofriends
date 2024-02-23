import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from '../components/Scroll';
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css';

class App extends Component {
    constructor () {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
        //console.log('constructor');
    }

componentDidMount() {
    //console.log('check');
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
    .then(users => this.setState({ robots: users}));
    //.then(users => {}); //Loading...page
    
    //console.log('componentDidMount');
}

onSearchChange = (event) => {
    //console.log(event.target.value);   //real-time search box inputs is displayed here in the console
    
    this.setState({ searchfield: event.target.value })
    //console.log(filteredRobots); //real -time shows array of robot.js in console
}

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        //console.log('render');

        return !robots.length ?
        <h1>Loading.....</h1> :
        (
            <div className="tc">
                <h1 className="f2">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}

export default App;