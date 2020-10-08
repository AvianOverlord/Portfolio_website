import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component
{
    constructor(props)
    {
        super(props);
        //This will take in the route to bold the page we're on
    }

    render()
    {
        return(
            <div className="Navbar">
                <Link to="/" className="Nav-Link">About</Link>
                <Link to="/coding" className="Nav-Link">Web Development</Link>
                <Link to="/writing" className="Nav-Link">Writing & Editing</Link>
                <Link to="/games" className="Nav-Link">Game Making</Link>
                <Link to="/news"className="Nav-Link">Recent News</Link>
                <Link to="/contact" className="Nav-Link">Contact</Link>
            </div>
        )
    }
}

export default Navbar;