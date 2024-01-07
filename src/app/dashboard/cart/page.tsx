import { ItemCard } from "@/shopping-cart/components/ItemCard";
import { cookies } from "next/headers";
import type { Product } from '../../../data/products';
import { products } from '../../../data/products';




export const metadata = {
    title: 'Products in Cart',
    description: 'SEO Title'
};


interface ProductInCart {
    product: Product;
    quantity: number;
}

const getProductInCart = (cart: { [id: string]: number }): ProductInCart[] => {

    let productsInCart: ProductInCart[] = [];

    // con el for of  estoy recoriendo todo el objeto y obteniendo un arreglo de keys = uuid
    // luego por cada uuid = id de ese arreglo find-buscó si coinciden con algunos de los id de mi
    // data [{},{},{},{}] de productos me van a quedar uno en una vuelta del for {}

    // luego ,si hay uno, los voy a pushear al arreglo vacío que inicialicé y de esta manera obtengo
    // en un objeto así  {product:{} : quantity: cart[id]}
    // donde productot es el arreglo de objetos que me quedó del fin y quality es el valor de la llave
    // con el id  que estamos trabjando en primera y asi se repite todas las vueltas del for por cada key
    // quedando  productsInCart = [{ product: {}, quantity:2}, { product: {}, quantity:9}, { product: {}, quantity:5}];

    for (const id of Object.keys(cart)) {

        const product = products.find(prod => prod.id === id);

        if (product) {
            productsInCart.push({ product: product, quantity: cart[id] });
        }
    }
    return productsInCart;
};



export default function CartPage() {

    const cookiesStore = cookies();
    const cart = JSON.parse(cookiesStore.get('cart')?.value ?? '{}') as { [id: string]: number };

    const productsInCart = getProductInCart(cart);


    return (
        <div>
            <h1 className="test-5xl" >Productos en el carrito</h1>
            <hr className="mb-2" />

            <div className="flex flex-col sm:flex-row gap-2 w-full" >

                <div className="flex flex-col gap-2 sm:w-8/12" >
                    {
                        productsInCart.map(({ product, quantity }) => (
                            <ItemCard key={product.id} product={product} quantity={quantity} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}