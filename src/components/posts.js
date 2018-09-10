import React, { Component } from 'react';

const name = " nate";

class Post extends Component {
    render() {
      return (
        <div className='post'>
            <div id="seeing">
                <a id="left">
                    You're seeing posts from 
                    <a>{name}</a>
                    's
                </a>
                <a id="right">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-ellipsis-h"></i>
                </a>
            </div>
            
            <div id="innerBox">
                <div id="infoBox">
                    <div id="userInfo">

                    </div>
                    <div id="text">

                    </div>
                    <div id="img/pic">

                    </div>
                    <div id="likes">
                        <a>

                        </a>
                        <div id="line"></div>
                        <a>

                        </a>
                    </div>
                </div>
                <div id="commentBox">

                </div>
            </div>
        </div>
      );
    }
  }
export default Post;