import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "../../components/Hero";
import { Categories } from "../../components/Categories";
import { Gallery } from "../../components/Gallery";
import { products } from "../../Mocks/products";
import { ProductList } from "../../components/ProductList";

export const Route = createFileRoute("/_app/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main>
      <Hero />
      <Categories />
      <Gallery />
      {products.length === 0 ? (
        <p className="text-center text-gray-500">
          Nenhum produto encontrado para esta categoria.
        </p>
      ) : (
        <ProductList products={products} />
      )}
    </main>
  );
}
