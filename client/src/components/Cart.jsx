import { useState } from 'react';
import { Cart as CartClass} from "../scripts/Cart";

const Cart = ({pointer, name}) => {
    const [displayInfo, displayInfoToggle] = useState(false);
    let priceSum = 0;

    if(displayInfo) {
        return (
            <div className="cart-wrapper">
                <div className="cart">
                    <div className="cart-title">{name}</div>
                    <div className="price-sum">Suma: {priceSum}</div>
                    <span className="currency">PLN/os.</span>
                    <img className="close" src={require('../assets/icons/close.png')} onClick={ () => {
                        displayInfoToggle(false)
                    }}/>
                </div>
            </div>
        );
    } else {
        return (
            <div className="cart-on-list" onClick={ () => {
                displayInfoToggle(!displayInfo)
            }}>
                {name}
            </div>
        );
    }
};

Cart.defaultProps = {
    pointer:  new CartClass(),
    name: "Koszyk"
};

export default Cart;