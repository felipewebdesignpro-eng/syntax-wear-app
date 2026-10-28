import IconCart from "@/assets/images/icon-cart.png";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

interface CartButtonProps {
  onClick?: () => void;
}

export const CartButton = ({ onClick }: CartButtonProps) => {
  const { cart } = useContext(CartContext);

  return (
    <button
      type="button"
      className="relative cursor-pointer flex justify-center"
      aria-label={`Carrinho de compras, ${cart.length} ${cart.length === 1 ? "item" : "itens"}`}
      /* aria-expanded={isOpen} */
      onClick={onClick}
    >
      <img src={IconCart} alt="Ícone carrinho de compras" />
      {cart.length > 0 && (
        <span
          className="absolute -top-2 -right-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-600 px-1 text-xs font-bold text-white"
          aria-hidden="true"
        >
          {cart.length}
        </span>
      )}
    </button>
  );
};
