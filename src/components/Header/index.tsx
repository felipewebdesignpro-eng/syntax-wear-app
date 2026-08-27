import Logo from '@/assets/images/logo.png'
import IconCart from '@/assets/images/icon cart.png'
import IconUser from '@/assets/images/icon user.png'
import IconAbout from '@/assets/images/icon about.png'

export const Header = () => {
    return (
        <div className="relative">
            <header className="fixed bg-amber-700 top-0 left-0 right-0 z-10 mx-10">
                <div className="bg-amber-400 max-w-[1320px] mx-auto flex justify-between items-center py-5 px-7 rounded-2xl mt-5">
                    <img src={Logo} alt="Logo Syntaxwear" className='w-32 md:w-36' />
                    <nav className='hidden md:block'>
                        <ul className='flex gap-10' >
                            <li><a href="#">Masculino</a></li>
                            <li><a href="#">Feminino</a></li>
                            <li><a href="#">Outlet</a></li>
                        </ul>
                    </nav>

                    <nav>
                        <ul className='flex gap-4 md:gap-10'>
                            <li className='hidden md:block'><a href="#">Nossas Lojas </a></li>
                            <li className='hidden md:block'><a href="#">Sobre</a></li>
                            <li><a href="#"> <img src={IconUser} alt="Icon User"/> </a></li>
                            <li><a href="#"> <img src={IconAbout} alt="Icon About"/> </a></li>
                            <li><a href="#"> <img src={IconCart} alt="Icon Cart"/>  </a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}