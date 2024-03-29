
/* 
 cookie: cart

 {
    'uuid-123-1':4,
    'uuid-123-1':2,
    'uuid-123-1':3,
 }

*/

import { getCookie, hasCookie, setCookie } from "cookies-next";


export const getCookieCart = (): { [id: string]: number } => {


    if (hasCookie('cart')) {

        const cookieCart = JSON.parse(getCookie('cart') as string ?? '{}');

        return cookieCart
    }

    return {};
};


export const addProductToCart = (id: string) => {

    const cookieCart = getCookieCart();

    if (cookieCart[id]) {
        cookieCart[id] = cookieCart[id] + 1;
    } else {
        cookieCart[id] = 1;
    }


    setCookie('cart', JSON.stringify(cookieCart));
};


export const removeAllProductsCart = (id: string) => {

    const cookieCart = getCookieCart();
    delete cookieCart[id];
    setCookie('cart', JSON.stringify(cookieCart));
};


export const removeSingleProductFromCart = (id: string) => {

    const cookieCart = getCookieCart();

    if (cookieCart[id]) {
        cookieCart[id] = cookieCart[id] - 1;
    } else {
        cookieCart[id] = 0;
    }

    if (cookieCart[id] === 0) delete cookieCart[id];

    setCookie('cart', JSON.stringify(cookieCart));
};

