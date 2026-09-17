import { createFileRoute, Link } from '@tanstack/react-router';
import { products } from "../../../Mocks/products";
import { formatCurrency } from '../../../utils/format-Currency';
import { useContext } from 'react';
import { CartContext } from '../../../contexts/CartContext';

export const Route = createFileRoute('/_app/products/$productId')({
    component: RouteComponent,
})

function RouteComponent() {

    const { addToCart } = useContext(CartContext)
    const { productId } = Route.useParams();

    const filteredProduct = products.find(product => product.id === Number(productId));

    if (!filteredProduct) return;

    const originalPrice = filteredProduct?.price ?? 0;
    const discountPrice = originalPrice * 0.9;

    const inInstallmentsPrice = originalPrice / 6

    return <section className="container pt-44 md:pt-54 pb-10 mb-10 md:px-10">
        <nav className='text-[#232323] text-sm mb-15 ml-5'>
            <Link to="/">Home</Link> / {" "}
            <Link to="/products">Produtos</Link> / {" "}
            <span className='font-semibold'>{filteredProduct?.name}</span>
        </nav>

        <div className='flex justify-center gap-10'>
            <img src={filteredProduct?.image} alt={filteredProduct?.name} className='w-[500px] bg-white rounded-2xl' />

            <div className='text-[#232323]'>
                <h1 className='text-4xl font-bold mb-1'>{filteredProduct?.name}
                </h1>
                <p className='mb-2'>Cor: {filteredProduct?.color}
                </p>

                <p className='line-through text-sm text-[#878787]'>{formatCurrency(originalPrice)}</p>

                <p className='text-3xl font-bold mb-2'>{formatCurrency(discountPrice)} no PIX</p>

                <p className='text-sm text-[#878787]'>Você economiza:
                    <span className='font-semibold'>10%</span>
                </p>

                <p className='mb-2'>ou <span className='text-[#383838] font-semibold'>6x</span>{" "}<span className="text-[#38373A] font-semibold">{formatCurrency(inInstallmentsPrice)}</span>

                </p>

                <p className='max-w-[500px] my-5'>{filteredProduct?.description}</p>

                <div className='mb-6'>
                    <p className='text-sm mb-2'>Calcular o prazo de entrega</p>
                    <form className='flex gap-3.5'>
                        <input type='text' placeholder='Insira o CEP' className='border border-[#c0c0c0] rounded-md p-3' />
                        <button className='bg-black text-white px-6 rounded-md cursos-pointer hover:bg-gray-800'>Calcular</button>
                    </form>
                </div>


                <button className='bg-black text-white rounded-md p-5 w-full cursor-pointer hover:bg-gray-800' onClick={() => addToCart(filteredProduct)}>Adicionar carrinho</button>
            </div>
        </div>
    </section>
}