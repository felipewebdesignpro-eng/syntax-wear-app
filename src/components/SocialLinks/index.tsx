import iconFacebook from "@/assets/images/icon-facebook.png";
import iconInstagram from "@/assets/images/icon-instagram.png";
import iconTiktok from "@/assets/images/icon-tiktok.png";
import iconWhatsapp from "@/assets/images/icon-whatsapp.png";

const socialLinks = [
    { href: "#", icon: iconFacebook, name: "Facebook" },
    { href: "#", icon: iconInstagram, name: "Instagram" },
    { href: "#", icon: iconTiktok, name: "Tiktok" },
    { href: "#", icon: iconWhatsapp, name: "Whatsapp" },
]

export const SocialLinks = () => {
    return (
        <div>
            <p className="mb-4 text-x1 font-medium text-surface-alt"> Redes Sociais</p>
            <ul className="flex gap-5">
                {socialLinks.map(({ href, icon, name }) => (
                    <li key={name}>
                        <a href={href} aria-label={name}>
                            <img src={icon} alt={name} />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}