import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import JSON from './db.json';

// Components 
import Header from './Components/header';
import NewsList from './Components/news_list';


// Component class named App 
class App extends Component {

    // A Single state variable that parses JSON 
    state = { 
        news:JSON

    }

    render() {       
    return (

            // Renders other components such as: Header, NewsList
            <div>
                <Header></Header>
                <NewsList news = {this.state.news}> 
                Hello world 
                </NewsList> 
            </div>

        );
    }
}

// Renders the whole app 
ReactDOM.render( <App/> , document.querySelector('#root'));