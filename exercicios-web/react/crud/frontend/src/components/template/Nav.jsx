import './Nav.css';
import React from 'react';

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <a href="#/">
                <i className={`fa fa-${props.icon}`}></i> {props.title}
            </a>
            <a href="#/users">
                <i className={`fa fa-${props.user}`}></i> {props.titleuser}
            </a>
        </nav>
    </aside>