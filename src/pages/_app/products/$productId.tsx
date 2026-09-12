import { createFileRoute, Link } from '@tanstack/react-router';
import { products } from "../../../Mocks/products";
import { formatCurrency } from '../../../utils/format-Currency';

export const Route = createFileRoute('/_app/products/$productId')({
    component: RouteComponent,
})

function RouteComponent() {

    const { productId } = Route.useParams()

    const filteredProduct = products.find(product => product.id === Number(productId))

    const originalPrice = filteredProduct?.price ?? 0;
    const discountPrice = originalPrice * 0.9;

    const inInstallmentsPrice = originalPrice / 6

    return <section className="container pt-44 md:pt-54 pb-10 mb-10 md:px-10 bg-surface">
        <nav className='text-[#232323] text-sm mb-15'>
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

            </div>
        </div>
    </section>
}