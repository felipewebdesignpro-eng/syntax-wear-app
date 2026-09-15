import { useState } from "react";
import type { Product } from "../interfaces/product";
import { CartContext } from "./CartContext";

interface CartProviderProps {
    children: React.ReactNode;
}

export interface ProductCart extends Product {
    quantity: number
}

export const CartProvider = ({ children }: CartProviderProps) => {
    const [cart, setCart] = useState<ProductCart[]>([]);

    function add(product: Product): void {
        const productExistsInCart = cart.find(
            (itemIncart) => itemIncart.id === product.id
        );

        let newCart;

        if (productExistsInCart) {
            newCart = cart.map((itemInCart) =>
                itemInCart.id === product.id ? { ...itemInCart, quantity: itemInCart.quantity + 1 } : itemInCart
            );
        } else {
            newCart = [...cart, { ...product, quantity: 1 }];
        }

        setCart(newCart);
    }

    function remove(productId: number): void {
        setCart(cart.filter((itemInCart) => itemInCart.id !== productId));
    }

    return <CartContext.Provider value={{
        cart,
        add,
        remove
    }}>
        {children}
    </CartContext.Provider>

};