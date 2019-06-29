import React, { Component } from 'react';
import '../css/component.css';
import '../css/sitenav.css';
import { Link } from 'react-router-dom';




class Sitenav extends React.Component{

    state = {
        name: this.props.page,
        pages: ["About", "Resume", "Work Experience", "Projects", "Connect"]
    }

    links = () => {
        return this.state.pages.map((page) => {
            if(this.state.name == page){
                return (<Link to={`/pages/${page}`} className="active"><span data-hover={page}>{page}</span></Link>);
            }
            else{
                return (<Link to={`/pages/${page}`}><span data-hover={page}>{page}</span></Link>);
            } 
        }); 
    }

    home = () => {
        if(this.state.pages.includes(this.state.name)){
            return (<Link to="/"><span data-hover="Home">Home</span></Link>)
        }
        else{
            return null;
        }
    }
    
    render(){
        return(
            <div>
                <nav className="cl-effect-5" id="nav_bar">
                    <this.home />
                    <this.links />
                </nav>
            </div>
        )
    }  
}

export default Sitenav;