import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Directory from './directory';
import Games from './games';
import NavBar from './navBar';
import PostsBox from './postsBox';
import Suggested from './suggested';
import SuggestedBox from './suggestedBox';


export default class App extends Component {
  render() {
    return (
      <div className='app'>
            <NavBar />
            <div className='html'>
                <Directory />
                <PostsBox />
                <SuggestedBox />
                <Games />
            </div>
      </div>
    );
  }
}
