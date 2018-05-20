import React from 'react';
import './NavBar.css';

const NavBar = ({tabclick}) =>{ 
    return (
        <div className="nav-container">
            <div className="navbar">
                <div className="app-title">
                    <button className="menu-btn">
                        <svg id="menu-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58.5 61">
                            <g id="Layer_2" data-name="Layer 2">
                                <g id="Layer_2-2" data-name="Layer 2">
                                <g>
                                    <line className="cls-3" y1="15.5" x2="30" y2="15.5"/>
                                    <line className="cls-4" x1="0.5" y1="30.5" x2="16.5" y2="30.5"/>
                                    <line className="cls-4" y1="45.5" x2="30" y2="45.5"/>
                                    <line className="cls-4" x1="57" x2="57" y2="61"/>
                                </g>
                                </g>
                            </g>
                        </svg>
                    </button>
                    <div id="app-title">
                        Lattice Protocol
                    </div>
                </div>
                <div className="search">
                    <input type="search" name="searchbox" id="search" placeholder="Search..."/>
                </div>
                <div className="quick-btn">
                    <button id="quick-btn">Quick Actions</button>
                </div>

            </div>
            <div className="shadow-strip"></div>
            <div className="nav-tabs">
              <a  onClick={tabclick} className="seventh-1 tab">Tab 1</a>
              <a  onClick={tabclick} className="seventh-2 tab active"> Long Tab 1</a>
              <a  onClick={tabclick} className="seventh-3 tab">Tab 2</a>
              <a  onClick={tabclick} className="seventh-4 tab">Longer Tab 2</a>
              <a  onClick={tabclick} className="seventh-5 tab">Tab 3</a>
              <a  onClick={tabclick} className="seventh-6 tab">Longer Tab 4</a>
          
            </div>

      </div>
    );
}
export default NavBar;