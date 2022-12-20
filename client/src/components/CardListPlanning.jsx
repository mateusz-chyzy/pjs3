import Card from "../components/Card";
import { Card as CardV } from "../scripts/Card";

const CardListPlanning = ({currentPage,item,categories}) => {

    const items = item.map((value) => {
        let card = new CardV();
        card.name = value.header;
        card.image = value.image;
        card.price = value.price;
        card.contact = value.email;
        return card
    });

    const category = categories.map((value) => {
        let card = new CardV();
        card.name = value.name;
        card.image = value.img;
        card.price = value.price;
        return card
    })

    if (currentPage === "lot") {
        return (
            <div className="card-list card-list-planning">
                <div className="container">
                    {category.map( e => <Card display="planning" key={e.getKey()} pointer={e}  /> )}
                </div>
            </div>
        );
    }
    else if(currentPage === "sfinalizuj") {
        return (
            <div className="card-list card-list-planning">
                <div className="container">
                    {items.map( e => <Card display="planning" key={e.getKey()} pointer={e} /> )}
                </div>
            </div>
        );
    }
}

export default CardListPlanning;