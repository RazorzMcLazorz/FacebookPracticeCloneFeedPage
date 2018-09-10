import React, { Component } from 'react';

class NavBar extends Component {
    render() {
      return (
        <div className='navBar'>
                <i className="fab fa-facebook"></i>

                <div className="search">
                    <input className="searchBar" type="search" value="Search"></input>
                <i className="fas fa-search"></i>
                </div>

                <a className="user">
                    <img className="IMG" src="./assets/mypic.png"></img>
                    Nathaniel
                </a>
                <a className="home">Home</a>
                <a className="FF">Find Friends</a>
                <a className="symbols">
                    <i className="fas fa-user-friends"></i>
                    <i className="fab fa-facebook-messenger"></i>
                    <i className="fas fa-bell"></i>
                </a>
                <i className="fas fa-question-circle"></i>
                <i class="fas fa-caret-down"></i>
        </div>
      );
    }
}

export default NavBar;