/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {


    // need to use high order component withRouter, make sure to import it as well.
    setTimeout(()=>{
        props.history.push('./about')
    }, 2000);

    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">Poke'Times</a>
                <ul className="right">
                    <li><Link to="/" >Home</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>

            </div>
        </nav>
    )
}

export default withRouter(Navbar);