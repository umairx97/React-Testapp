import React from 'react';

// Component that renders the news
const NewsItem = ({item}) => { 
    
    return ( 

        <div>
            <h3>{item.title}</h3>
            <div> 
                {item.feed}
            </div>
        </div> 
            
    )
}
 
export default NewsItem;

