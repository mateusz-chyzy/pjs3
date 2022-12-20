import {useState} from 'react';
import * as carts from "../scripts/carts";
import { Card as CardClass } from "../scripts/Card";

import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import InfoIcon from '@mui/icons-material/Info';

const Card = ({display, pointer, onClick}) => {
    const [highlighted, setHighlight] = useState(false);
    const [displayInfo, displayInfoToggle] = useState(false);

    const getRating = (rating) => {
        if(rating > 0) {
            return <span style={{color: "green"}}> +{pointer.rating} </span>
        } else if (rating < 0) {
            return <span style={{color: "red"}}> -{pointer.rating} </span>
        } else {
            return <span> {pointer.rating} </span>
        }
    }

    const displayName = (name) => {
        if(name === undefined) return;
        if(name.length > 20) return name.slice(0, 20) + "...";
        else return name;
    }

    const infoToggle = () => {
        if (displayInfo) {
            return <div className="card-info-wrapper" onClick={onClick}>
                <div className="card-info">
                    <div className="top-wrapper">
                        <div className="title"> {pointer.name} </div>
                        <img className="close-icon" src={require('../assets/icons/close.png')} onClick={ () => {
                            displayInfoToggle(false);
                        }}/>
                    </div>
                    <div className="mid-wrapper">
                        <div className="left-wrapper">
                            <img className="image" src={pointer.image} />
                            <div className="left-bottom-wrapper">
                                <span> { pointer.price + " PLN/os."} </span>
                                <span style={{marginLeft: 420}} />
                                <span> Ocena: { getRating(pointer.rating) } </span> <br />
                                <span> { pointer.contact } </span> <br />
                                <span> { pointer.link } </span>
                            </div>
                        </div>
                        <div className="right-wrapper"> {pointer.desc} </div>
                    </div>
                    <div className="bottom-wrapper">
                        <div className="add-button-info" onClick={() => {
                            carts.currentItemPageCards.push(pointer);
                            setHighlight(true);
                        }}>+</div>
                    </div>
                </div>
            </div>;
        }
    }
    if (display === "planning") {
        if (highlighted) {
            return (
                <div className="card highlighted">
                    <div className="image-wrapper">
                        <img src={pointer.image} style={{width: 360, height: 260}} />
                    </div>
                    <div className="info-wrapper">
                        <div className="title-wrapper"> {displayName(pointer.name)} </div>
                        <div className="subtitle-wrapper">
                            <div className="price-wrapper"> {pointer.price + ' PLN/os.'} </div>
                            <div className="rating-wrapper"> {getRating(pointer.rating)} </div>
                        </div>
                    </div>

                    <div className="hover">
                        <div className="hover-bg orange">
                        </div>
                        <Button variant="contained" endIcon={<InfoIcon/>} className="info-button-planning orange" onClick={ () => {
                            displayInfoToggle(!displayInfo)
                        }}>Szczegóły</Button>

                        <Button variant="contained" endIcon={<RemoveShoppingCartIcon/>} className="add-button-planning orange" onClick={() => {
                            carts.currentItemPageCards.splice(carts.currentItemPageCards.indexOf(pointer), 1);
                            setHighlight(false);
                        }}>Usuń z</Button>
                    </div>

                    {infoToggle()}
                </div>
            )
        }
        else if (!highlighted) {
            return (
                <div className="card">
                    <div className="image-wrapper">
                        <img src={pointer.image} style={{width: 360, height: 260}} />
                    </div>
                    <div className="info-wrapper">
                        <div className="title-wrapper"> {displayName(pointer.name)} </div>
                        <div className="subtitle-wrapper">
                            <div className="price-wrapper"> {pointer.price + ' PLN/os.'} </div>
                            <div className="rating-wrapper"> {getRating(pointer.rating)} </div>
                        </div>
                    </div>

                    <div className="hover">
                        <div className="hover-bg">
                        </div>
                        <Button variant="contained" endIcon={<InfoIcon/>} className="info-button-planning" onClick={ () => {
                            displayInfoToggle(!displayInfo)
                        }}>Szczegóły</Button>

                        <Button variant="contained" endIcon={<ShoppingCartIcon/>} className="add-button-planning" onClick={() => {
                            carts.currentItemPageCards.push(pointer);
                            setHighlight(true);
                            console.log(carts.currentItemPageCards)
                            window.localStorage.setItem("array",JSON.stringify(carts.currentItemPageCards));
                            window.dispatchEvent(new Event("storage"));
                        }}>Dodaj do </Button>
                    </div>

                    {infoToggle()}
                </div>
            )
        }
    }
};

Card.defaultProps = {
    pointer: new CardClass()
}

export default Card;