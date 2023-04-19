import React from "react";



function links(props){
    return(
        <div>
            <h3>links</h3>
            <h2>{props.name}</h2>
            <a href="{github}">{props.github}</a>
            <a href="{linkedin}">{props.linkedin}</a>
        </div>
    )

}
export default links;