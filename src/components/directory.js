import React, { Component } from 'react';

class Directory extends Component {
    render() {
      return (
        <div className='directory'>
                <a className="user">
                    <div id="username">
                        <img className="IMG" src="./assets/mypic.png"></img>
                        <a>Nathaniel Young</a>
                    </div>
                    <div>
                        <i class="far fa-newspaper"></i>
                        <a>News Feed</a>
                    </div>
                    <div>
                        <i class="fab fa-facebook-messenger"></i>
                        <a>Messenger</a>
                    </div>
                    <div>
                        <i class="fas fa-tv"></i>
                        <a>Watch</a>
                    </div>
                    <div>
                        <i class="fas fa-store"></i>
                        <a>Marketplace</a>
                    </div>
                    <a className="titles">
                        Shortcuts
                    </a>
                    <div>
                        <img className="IMG" src="./assets/TopFarm.png"></img>
                        <a>Top Farm</a>
                    </div>
                    <a className="titles">
                        Explore
                    </a>
                    <div>
                        <i class="fas fa-users"></i>
                        <a>
                            Groups
                        </a>
                    </div>
                    <div>
                        <i class="fas fa-caret-down"></i>
                        <a>
                            See More
                        </a>
                    </div>
                    <a className="titles">
                        Create
                    </a>
                    <div id="ADS">
                        Ad · Page · Group · Event · Fundraiser
                    </div>
                </a>
        </div>
      );
    }
}

export default Directory;