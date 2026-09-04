const menus = [
    { title: "Masculino", items: ["Casual", "Esporte", "Moderno", "Futurista"] },
    { title: "Feminino", items: ["Casual", "Esporte", "Moderno", "Futurista"] },
    { title: "Outlet", items: ["Masculino", "Feminino"] },
    { title: "Sobre", items: ["Quem somos", "Missão"] },
]

export const MenuItems = () => {
    return (
        <div className=" flex flex-col sm:flex-row gap-8">
            {menus.map(({ title, items }) => (
                <nav key={title}>
                    <ul className="flex flex-col gap-3 text-surface-alt ">
                        <li>
                            <p className="font-medium text-xm">{title}</p>
                        </li>
                        {items.map((item) => (
                            <li key={item}>
                                <a href="#" className=" hover:text-text-tertiary transition-colors">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            ))}
        </div>
    )
}