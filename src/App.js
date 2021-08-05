import React,{Component} from 'react';
import CardList from './CardList.js';
// import {robots} from './Robo ts.js';
import SearchBox from './searchBox.js';
import './App.css';
import Scroll from './Scroll.js';
import ErrorBoundry from './ErrorBoundry';


class App extends Component{

    constructor(){
        super();
        this.state={
            robots:[],
            searchfield:''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
        return response.json();
        })
        .then(users=>{
            this.setState({robots:users})
        })
        

    }
    onSearchChange=(event)=>{
        this.setState({searchfield:event.target.value});
      
        

    }

   render(){
    const filterRobots=this.state.robots.filter(robots =>
        {
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });
    return(
        <div className="tc">
        <h1>ROBOFRIENDS</h1>
        <SearchBox searchChange={this.onSearchChange}/>
       <Scroll>
           <ErrorBoundry>
        <CardList robots={filterRobots} />
        </ErrorBoundry>
        </Scroll>
        </div>
    );
}
}


export default App;