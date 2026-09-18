import IconCart from "@/assets/images/icon-cart.png";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { formatCurrency } from "../../utils/format-Currency";


export const ShoppingCart = () => {

    const [cartIsOpen, setCartIsOpen] = useState<boolean>(false);
    const { cart, removeFromCart, incrementInCart, decrementInCart } = useContext(CartContext)

    const totalItems = cart.reduce((total, product) => total + product.quantity, 0);

    return (
        <>
            <button
                type="button"
                className="relative cursor-pointer"
                aria-label={`Carrinho de compras, ${totalItems} ${totalItems === 1 ? "item" : "itens"}`}
                aria-expanded={cartIsOpen}
                onClick={() => setCartIsOpen(!cartIsOpen)}
            >
                <img src={IconCart} alt="Ícone carrinho de compras" />
                {totalItems > 0 && (
                    <span
                        className="absolute -top-2 -right-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-600 px-1 text-xs font-bold text-white"
                        aria-hidden="true"
                    >
                        {totalItems}
                    </span>
                )}
            </button>

            {/*{Overlay} */}
            <div
                className={`${cartIsOpen ? "bg-black/60 visible" : "bg-transparent invisible"} fixed top-0 bottom-0 left-0 right-0`}
                onClick={() => setCartIsOpen(!cartIsOpen)}
            >

                {/*{Drawer} */}
                <div
                    className={`${cartIsOpen ? "translate-x-0" : "translate-x-full"} absolute top-0 right-0 bottom-0 bg-white pt-6 transition-all duration-500 ease-in-out w-75 md:w-106`}
                    onClick={(e) => e.stopPropagation()}>
                    <header className="flex items-center justify-between px-5">
                        <p className="text-2xl font-bold">Carrinho ({totalItems})</p>
                        <button className="text-xl cursor-pointer" onClick={() => setCartIsOpen(!cartIsOpen)}>x</button>
                    </header>

                    <ul className="p-4 h-[calc(100%_-_140px)] overflow-y-auto scrollbar-hide flex flex-col gap-3">
                        {cart.map(product => (
                            <li key={product.id} className="flex flex-col gap-1 px-6"
                            >
                                <button className="self-end text-xs cursor-pointer" onClick={() => removeFromCart(product.id)}>X</button>
                                <div className="flex gap-4">
                                    <img src={product.image} alt={product.name} className="w-16 h-16" />

                                    <div className="mb-1 text-sm">
                                        <p className="mb-1 text-sm">{product.name}</p>
                                        <p className="mb-1 text-sm">Quantidade: {product.quantity}</p>
                                        <p className="mb-3.5">
                                            <span>{formatCurrency(product.price)}</span> {" "} à vista
                                        </p>

                                        <div className="border flex gap-6 py-1 px-3">
                                            <button className="cursor-pointer" onClick={() => decrementInCart(product)}>-</button>
                                            <p>{product.quantity}</p>
                                            <button className="cursor-pointer" onClick={() => incrementInCart(product)}>+</button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <footer className="absolute bottom-0 w-full h-25 p-4">
                        <button className="w-full h-full bg-black text-white p-4 rounded-xl cursor-pointer hover:bg-accent-hover">Fazer pedido</button>
                    </footer>
                </div>
            </div>
        </>
    );
};
