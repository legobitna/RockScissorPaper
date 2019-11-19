import React from 'react'
import '../style.css'
export default function Card(props) {
    return (
        <div className={`box ${props.winner?'green':'red'}`}>
            <div>
            <div class="font-style">{props.title}</div>
            <img src={props.img} class="img-style"/>
            <div class="font-style">{props.winner?'won':'loss'}</div>
            </div>

        </div>
    )
}
