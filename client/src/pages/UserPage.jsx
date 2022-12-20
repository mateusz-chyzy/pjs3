import Header from "../components/Header";
import Footer from "../components/Footer";
import {currentCart} from "../scripts/carts";


const UserPage = () => {
    const listOfItems = currentCart.getItems();

    return (
        <div>
            <Header/>
            <div className="user-page">
                <span className="title-1">Twoje zakupy</span>
                <div className="cart-list">
                    {listOfItems.map(e =>
                        <span className="planning-cart-item" key={Math.random()}> {e.getName() + " , price: " + e.getPrice()} </span>
                    )}
                </div>
                <div className="panel">
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default UserPage;