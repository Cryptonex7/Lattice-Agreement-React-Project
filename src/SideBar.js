import React from 'react';
import './SideBar.css';

const SideBar = () => {
    return (
        <div className="sidenav">
            <div className="side-head">
                <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000">
                    <rect className="cls-1" width="2000" height="2000"/>
                    <g id="BKG_BLACK" data-name="BKG BLACK">
                        <rect x="64" y="64" width="1872" height="1872"/>
                    </g>
                    <g>
                        <line className="cls-2" x1="438.9" y1="1599.9" x2="1561.1" y2="1599.9"/>
                        <polygon className="cls-2" points="438.9 1599.9 579.2 1599.2 719.4 1598.8 1000 1598.4 1280.6 1598.8 1420.8 1599.2 1561.1 1599.9 1420.8 1600.7 1280.6 1601.1 1000 1601.4 719.4 1601.1 579.2 1600.7 438.9 1599.9"/>
                    </g>
                    <g id="LP">
                        <path className="cls-2" d="M1366.6,601.9q-24.9-64.4-80.4-112.6-35.1-32.2-71.7-49.8a358.5,358.5,0,0,0-74.6-26.3,466.2,466.2,0,0,0-78.2-11c-26.8-1.4-55.4-2.1-85.6-2.1l-85.1.5h0L687,400v912H891V591.7h73.2a696,696,0,0,1,77.6,4.4c25.8,2.9,49.3,9.7,70.3,20.3a129.6,129.6,0,0,1,51,45.9c12.9,19.8,19.4,46.3,19.4,79.2s-7,60.6-20.8,80a135,135,0,0,1-53.9,44.4q-33,15.3-73.2,19.6a735.3,735.3,0,0,1-79,4.4h-4.3v191.7h24.8c30.2,0,58.8-.8,85.6-2.2a456.1,456.1,0,0,0,78.2-11,352.8,352.8,0,0,0,74.6-26.3q36.6-17.5,71.7-48.3,55.5-49.6,80.4-114.1c16.6-42.8,24.9-89.2,24.9-138.9S1383.2,644.8,1366.6,601.9Z" transform="translate(0)"/>
                        <path className="cls-1" d="M1230.1,1312H891v188h500V1312ZM579,400V1500H689V400Z" transform="translate(0)"/>
                    </g>
                </svg>
                <svg version="1.1" id="lptype" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 1149.1 150.8" >
                    <rect y="52.9" className="st0" width="1149.1" height="84.1"/>
                    <text transform="matrix(1 0 0 1 10.0433 115.4226)"><tspan x="0" y="0" className="st1 st2 st3">lattice </tspan><tspan x="495.7" y="0" className="st4 st2 st3">protocol</tspan></text>
                </svg>
            </div>
            <div className="tabs">
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#clients">Clients</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    );
}

export default SideBar;
