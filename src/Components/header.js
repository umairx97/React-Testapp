import React, {Component} from 'react';
import '../CSS/styles.css';

// This is Functional component
class Header extends Component { 

    // The object that is changing and re-rendering the app
    
    
    state = { 
        keywords: ''
    }


    // This input handler that detects change
    inputChangeHandler = (event) => { 
        this.setState ({  
            keywords: event.target.value
        })
    }
    
    render() { 

        

          return (
            
               <header> 
                   <div className="logo"> Logo </div>
                   <input 
                   type="text"
                   
                   //Capturing input and pushing to inpurt handler 
                   onChange = { this.inputChangeHandler}/>

            
               </header>
            
        )
    }
    
} 

// Component Exports
export default Header;
