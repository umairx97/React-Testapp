import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import JSON from './db';

// Components 
import Header from './Components/header';
import NewsList from './Components/news_list';


// Component class named App 
class App extends Component {

    // A Single state variable that parses JSON 
    state = { 
        news:JSON, 
        filteredNews:[]

    }

    // Capturing keywords and checking it against items 
    getKeyword = (event) => { 
        // console.log(event.target.value);
        let keyword = event.target.value;
        let filteredNews = this.state.news.filter((item) => {
            return item.title.indexOf(keyword) > -1

        });
        // Setting a new state for the filtered news
        this.setState({
            filteredNews
        })

        // console.log(filteredNews);
    }

    render() {
        
        // Two states for the news 
        let newsFiltered = this.state.filteredNews;
        let allnews = this.state.news;       
    return (
           

            // Renders other components such as: Header, NewsList
            <div>
                <Header keywords = {this.getKeyword}></Header>
                <NewsList news = {this.state.filteredNews.length === 0 ? allnews : newsFiltered}> 
                </NewsList> 
            </div>

        );
    }
}

// Renders the whole app 
ReactDOM.render( <App/> , document.querySelector('#root'));