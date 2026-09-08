import { Categories } from "./components/Categories"
import { Footer } from "./components/Footer"
import { Gallery } from "./components/Gallery"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"

import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./router-tree-gen";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return <RouterProvider router={router} />
}

export default App;


/* (
    <>
      <main>
        <Header />
        <Hero />
        <Categories />
        <Gallery />
      </main>
      <Footer />
    </>
  ) */