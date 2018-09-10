import React, { Component } from 'react';
import Post from './posts.js';

class PostsBox extends Component {
    render() {
      return (
        <div className='PostBox'>
            <div id="whatsonyourmind">
              <div id="addPost">
                <a>
                    <i class="fas fa-pencil-alt"></i>
                    Make Post
                </a>
                <a id="centerposts">
                    <i class="far fa-image"></i>
                    Photo/Video Album
                </a>
                <a id="endpost">
                    <i class="fas fa-video"></i>
                    Live Video
                </a>
              </div>
              <div id="whatsthemind">
                <img className="IMG" src="./assets/mypic.png"></img>
                What's on your mind, Nathaniel?
              </div>
              <div id="line"></div>
              <div id="Tags">
                  <div>
                        <i class="fas fa-image"></i>
                        Photo/Video
                  </div>
                  <div>
                        <i class="fas fa-grin"></i>
                        Feeling/Activity
                  </div>
                  <div id="ellip">
                        <i class="fas fa-ellipsis-h"></i>
                  </div>
              </div>
            </div>

            <Post />
            <Post />
            <Post />

        </div>
      );
    }
}

export default PostsBox;