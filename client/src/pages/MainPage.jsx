import { Component } from "react/cjs/react.production.min";
import Header from "../components/Header";
import CardListPlanning from "../components/CardListPlanning";
import filter from "../scripts/filter.js";
import * as carts from "../scripts/carts";
import { Navigate } from "react-router-dom";

import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import filterCategory from "../scripts/filterCategory";


class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: "lot",
            categories: [],
            tmpCategories: [],
            items: [],
            inputValue: ""
        }
        this.changePage = this.changePage.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleInputChange = (event) => {
        this.setState({inputValue: event.target.value});
    }

    handleSearch() {
        let headers = new Headers();
        const inputValue = this.state.inputValue;
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Origin', 'http://localhost:3000');

        fetch(`http://localhost:5000/products`, {
            method: 'GET',
            headers: headers
        }).then(response => response.json())
            .then(data => {
                this.setState({categories: filter(data,inputValue)})
            })
    }

    handleCategory(category) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Origin', 'http://localhost:3000');

        fetch(`http://localhost:5000/products`, {
            method: 'GET',
            headers: headers
        }).then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({categories: filterCategory(data,category)})
            })
    }

    changePage(pageName){
        this.setState({
            currentPage: pageName
        });
    }

    componentDidMount() {
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Origin', 'http://localhost:3000');

        fetch(`http://localhost:5000/products`, {
            method: 'GET',
            headers: headers
        }).then(response => response.json())
            .then(data => {
                this.setState({categories: data})
            })

        fetch(`http://localhost:5000/categories`, {
            method: 'GET',
            headers: headers
        }).then(response => response.json())
            .then(data => {
                this.setState({tmpCategories: data})
            })
    }

    render() {
        if (this.state.currentPage === "sfinalizuj") {
            return <Navigate to={{
                pathname: '/user',
            }} />
        }
        if (this.state.currentPage === "lot") {
            return (
                <div>
                    <Header />
                    <div className="main-page">
                        <div className="content">
                            <div className="menu">
                                <div>Szukaj po nazwie</div>
                                <input value={this.state.inputValue} onChange={this.handleInputChange} type="text" />
                                <Button className="submit" variant="contained" onChange={this.handleInputChange} onClick={this.handleSearch}>Szukaj</Button>
                            </div>
                            <div className="menu">
                                <div>Szukaj po kategorii</div>
                                {this.state.tmpCategories.map(e =>
                                    <Button value={e.name} onChange={this.handleInputChange} onClick={() => this.handleCategory(e.name)}>{e.name}</Button>
                                )}
                            </div>
                            <div className="content-bottom">
                                <div className="list">
                                    <CardListPlanning
                                        currentPage={this.state.currentPage}
                                        item={this.state.items.map((value) => value)}
                                        categories={this.state.categories.map((value) => value)}
                                    />
                                </div>
                                <div className="cart-container">
                                    <div className="cart">
                                        <Button className="button" variant="contained" endIcon={<ArrowForwardIosIcon />} onClick={() => {
                                            carts.currentCart.setItems(carts.getCurrentItemPageCards());
                                            carts.setCurrentItemPageCards();
                                            this.changePage('sfinalizuj');
                                        }}>Dalej</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default MainPage;