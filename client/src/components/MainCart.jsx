import * as carts from "../scripts/carts";

const PlanningCart = ({currentCart, currentPage}) => {
    let items = currentCart.getLoty();
    let amount = 0;

    const getTitlePage = () => {
        if(currentPage === "shop") return <div className="title-active"> Koszyk </div>
        else return <div className="title"> Sklep </div>
    }

    return (
        <div className="planning-cart" style={{height: 100 + 27 * 2}}>
            {getTitlePage()}
            {items.map(e =>
                <span className="planning-cart-item" key={Math.random()}> {e.getName() + " , price: " + e.getPrice()} </span>
            )}
            <div>
                Razem:
                {
                    items.map(e =>{amount+=e.getPrice()})
                }
                <span className="planning-cart-item" key={Math.random()}> {amount + " zł"} </span>
            </div>
        </div>
    );
}

PlanningCart.defaultProps = {
    currentCart: carts.currentCart,
    IconButton: "loty"
}

export default PlanningCart;