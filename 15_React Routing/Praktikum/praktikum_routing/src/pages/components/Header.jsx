import React from "react";

export default function Header({text}) {
    return (
        <div style={{borderBootom : "4px solid #bbbbb", paddingLeft : 20}}>
            <h1>{text}</h1>
        </div>
    );
}