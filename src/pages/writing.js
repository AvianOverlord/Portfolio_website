import React from "react";
import TNH from "../assets/tnhbanner.png"
import WB from "../assets/wiseblood.jpg"
import Entry from "../components/entry";

function Writing()
{
    return(
        <div>
            <h2>Writing and Editing</h2>
            <Entry 
                art={TNH}
                title="The New Humans"
                text0 ="The New Humans is a superhero-adjacient web novel which I edit for my friend Henry Walker. It's set in 1960's Australia, and centers on a group of superpowered children and the world of heroes, monsters, and cold wars they're forced into." 
                text1 ="The New Humans has been posted for several years and has over 200 subscribed readers."
                link="https://newhumanssite.com"
            />
            <Entry
                art = {WB}
                noBanner = {true}
                title="Wise Blood"
                text0 = "Wise Blood is a web novel I edit, also written by Henry Walker. A boy becomes a vampire after a drug deal goes horribly wrong, and must navigate the hidden world he is now a member off."
                link = "https://www.royalroad.com/fiction/36197/wise-blood"
            />
        </div>
    )
}

export default Writing;