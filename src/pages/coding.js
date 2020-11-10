import React from "react";
import Entry from "../components/entry";
import TNHscreen from "../assets/tnhscreen.png"

function Coding()
{
    return(
        <div>
            <h2>Coded Websites</h2>
            <Entry
                art = {null}
                title = "Portfolio Website"
                text0 = "This portfolio website was built from the ground up in React."
            />
            <Entry
                art = {TNHscreen}
                title= "New Humans Website"
                link = "https://newhumanssite.com/"
                text0 = "I maintain the New Humans website on wordpress, including implementing non-standard features. I'm particularly proud of the footnotes."
            />
        </div>
    )
}

export default Coding;