import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import "../styles/Slider.scss"

export default function Slider(props,nextOnClick,prevOnClick){
    return(
        <div className="slider">
            <div className="slider-block">
                <FontAwesomeIcon className="slider-block__left-icon" id="left_icon" onClick={props.prevOnClick} icon={faChevronLeft} style={props.style} />
                <div className="slider-block__slider-text">
                    <h3 className="slider-text__slider-title" name={props.name}>{props.name}</h3>
                    <p  className="slider-text__slider-description" content={props.content}>{props.content}</p>
                    <img className="logos" src={props.src} alt={props.alt} title={props.title}></img>
                </div>    
                <FontAwesomeIcon className="slider-block__right-icon" id="right_icon" onClick={props.nextOnClick} icon={faChevronRight} style={props.style} />
            </div>
            <span className="slideshow-block__count" count={props.count}>{props.count}</span>
        </div>
    )
}