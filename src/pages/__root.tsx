import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
})

function NotFoundComponent() {
  return (
    <main className="min-h-screen grid place-items-center px-6 text-center text-black">
      <div>
        <p className="text-sm uppercase tracking-widest">404</p>
        <h1 className="mt-2 text-3xl font-semibold">Página não encontrada</h1>
        <p className="mt-3">O endereço acessado não existe.</p>
      </div>
    </main>
  )
}

function RootComponent() {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  )
}
