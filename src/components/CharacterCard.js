import React from "react";

export default function CharacterCard(props) {
    return (
        <div className="card">
            <img alt={props.name} title={props.name} src={props.image} />
        </div>
    )
}
