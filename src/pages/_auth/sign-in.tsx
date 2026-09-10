import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { LoginForm } from '../../components/LoginForm'
import { Logo } from '../../components/Logo'
import GoogleIcon from '../../assets/images/google-icon.png'
import { Separator } from '../../components/Separator'

export const Route = createFileRoute('/_auth/sign-in')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <section className="min-h-screen w-full flex justify-center items-center bg-[#f5f5f5] p-5" >
      <div className="w-[450px] bg-white p-5 rounded-2xl flex flex-col shadow-md">
        <div className="flex flex-col">
          <Logo />
          <h2 className="text-[#232323] font-bold text-[21px] mb-2">
            Entrar
          </h2>
          <p className="text-[#232323] mb-3.5">Escolha como você gostaria de fazer o login</p>
          <LoginForm />

          <Separator />
          <button className="w-full flex items-center justify-center gap-2 border border-gray-300  rounded-md py-3 hover:bg-gray-50 transition cursor-pointer">
            <img src={GoogleIcon} alt="ícone do google" className="w-5 h-5" />
            <span className="text-sm font-medium text-black">Continuar com o Google</span>
          </button>

          <p className="text-sm text-gray-600 mt-3.5 text-center">
            Ainda não possui conta?{" "}
            <Link to="/sign-up" className="text-[#5433eb] hover:underline">Cadastre-se </Link>
          </p>

        </div>
      </div>
    </section>
  )
}
