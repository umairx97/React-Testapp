import React from 'react';
import '../CSS/styles.css';


// Component that renders the news
const NewsItem = ({item}) => { 
    return ( 

        <div className = "news_item">
            <h3>
                {item.title}
            </h3>

            <div> 
                {item.feed} 
            </div>
        </div> 
            
    )
}
 
// Modules Exports 
export default NewsItem;

