import { ItemCard } from "@/shopping-cart/components/ItemCard";
import { cookies } from "next/headers";
import type { Product } from '../../../data/products';
import { products } from '../../../data/products';
import { WidgetItem } from "@/components/sidebar";




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


    const totalPayCart = productsInCart.reduce((prev, current) => (current.product.price * current.quantity) + prev, 0);


    return (
        <div>
            <h1 className="text-5xl" >Productos en el carrito</h1>
            <hr className="mb-2" />

            <div className="flex flex-col sm:flex-row gap-2 w-full" >

                <div className="flex flex-col gap-2 sm:w-8/12" >
                    {
                        productsInCart.map(({ product, quantity }) => (
                            <ItemCard key={product.id} product={product} quantity={quantity} />
                        ))
                    }
                </div>

                <div className="flex flex-col w-full sm:w-4/12" >
                    <WidgetItem title="Total a Pagar" >
                        <div className=" mt-2 flex justify-center gap-4">
                            <h3 className="text-3xl font-bold text-gray-700" >$ {(totalPayCart * 1.19).toFixed(2)}</h3>
                        </div>
                        <span className=" text-center font-bold text-gray-500  text-sm" >Valor de Compra Total =  $ {totalPayCart} </span>
                        <span className=" text-center font-bold text-gray-500 text-sm" >Impuestos   (19% IGV)  =  $ {(totalPayCart * 0.19).toFixed(2)} </span>
                    </WidgetItem>
                </div>
            </div>
        </div>
    );
}