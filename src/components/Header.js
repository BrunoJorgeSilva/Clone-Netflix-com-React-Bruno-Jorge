import React from 'react'; 
import './Header.css';

export default ({black}) => { 
    return (
        <header className={ black ? 'black' : ''}>
                <div className= "header--logo" > 
                <a href= "/"> 
                <img src= "https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png" /> 
                
                </a>
                
                </div>
                <div className = "header--user"> 

                <a href= "/">
                <img src= "https://i.imgur.com/zBr1CQ3l.png" alt="Usuário" />
                    
                    </a> 
                </div>


        </header>

    ); 


}