// Imports 
import React from 'react';
import NewsItem from './news_list_items';


// NewsList Component that catches each item in the JSON
const NewsList = (props) => { 
    const items = props.news.map((item) => { 
        return ( 
          <NewsItem key = {item.id} item = {item}/> 
        )

    }); 

    return ( 

        <div>
            {props.children}
            {items}

        </div>
    )
}


export default NewsList;
