import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import "../styles/Slider.scss"

export default function Slider(props,nextOnClick,prevOnClick){
    return(
        <div className="slider-block">
            <FontAwesomeIcon className="slider-block__left-icon" onClick={props.prevOnClick} icon={faChevronLeft} style={props.style}/>
            <div className="slider-block__slider-text">
                <h3 className="slider-text__slider-title" title={props.title}>{props.title}</h3>
                <p  className="slider-text__slider-description" content={props.content}>{props.content}</p>
            </div>    
            <FontAwesomeIcon className="slider-block__right-icon" onClick={props.nextOnClick} icon={faChevronRight} style={props.style}/>
        </div>
    )
}