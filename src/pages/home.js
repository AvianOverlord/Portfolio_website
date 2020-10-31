import React from "react";
import Profile from "../assets/profile.JPG";

function Home()
{
    return(
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <h2>About Me</h2>
                    <p>I'm William Rave, coder, editor, and curious mind.</p>
                    <p>I grew up and still live in Maryland, just outside Washington D.C. I have a Bachelor's Degree from the George 
                        Washington University, and a certificate in full-stack web development from same.</p>
                </div>
                <div className="col-6">
                    <img src= {Profile} alt="A picture of me"/>
                </div>
            </div>
        </div>
    )
}

export default Home;