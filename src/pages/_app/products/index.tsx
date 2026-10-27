import { createFileRoute } from "@tanstack/react-router";
import { ProductList } from "../../../components/ProductList";
import { products } from "../../../Mocks/products";

export const Route = createFileRoute("/_app/products/")({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: "Produtos | Syntaxwear" }],
  }),
});

function RouteComponent() {
  return (
    <section className="container pt-44 md:pt-54 pb-10 mb-10 md:px-10 text-[#232323]">
      <h1 className="text-3xl text-center mb-3">Lista de Produtos</h1>
      <h2 className="text-center mb-10 p-4">Conforto para as suas aventuras</h2>
      {products.length === 0 ? (
        <p className="text-center text-gray-500">
          Nenhum produto encontrado para esta categoria.
        </p>
      ) : (
        <ProductList products={products} />
      )}
    </section>
  );
}

/*   {products.length === 0 ? (
        <p className="text-center text-gray-500">
          Nenhum produto encontrado para esta categoria.
        </p>
      ) : (
        <ProductList products={products} />
      )} */