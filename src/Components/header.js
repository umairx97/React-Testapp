import React from 'react';
import '../CSS/styles.css';

// This is Functional component
const Header = (props) => {     
           return (
            
               <header> 
                   <div className="logo"> Logo </div>
                   <input 
                   type="text"
                   
                   //Capturing input and pushing it to keywords object 
                   onChange = { props.keywords }/>

            
               </header>
            
        )
    }
    
 // Component Exports
export default Header;
