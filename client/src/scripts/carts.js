import { Cart } from "./Cart";

export const currentCart = new Cart();

export const userCarts = [
    new Cart(),
    new Cart()
];

export let currentItemPageCards = [];

export const getCurrentItemPageCards = () => {
    return currentItemPageCards;
}

export const setCurrentItemPageCards = arr => {
    currentItemPageCards = arr;
}


