import './Gallery.css';
import { Button } from '../Button';
import { Overlay } from '../Overlay';

// Importa as imagens da galeria para montar o layout do e-commerce.
import galeriaHomem from '@/assets/images/galeria-homem.jpg';
import galeriaTenisRoxo from '@/assets/images/galeria-tenis-roxo.jpg';
import galeriaModelo from '@/assets/images/galeria-modelo.jpg';
import galeriaTenisColorido from '@/assets/images/galeria-tenis-colorido.jpg';
import galeriaTenisBrancoPreto from '@/assets/images/galeria-tenis-branco-e-preto.jpg';
import galeriaTenisCinza from '@/assets/images/galeria-tenis-cinza.jpg';

// Estrutura do conteúdo exibido no grid. Cada item representa uma área do layout.
const galleryItems = [
    {
        id: 'highlight',
        image: galeriaHomem,
        alt: 'Homem sentado com tênis moderno',
        type: 'highlight',
        title: 'Krypton One',
        subtitle: 'Estilo urbano com atitude',
        buttons: ['Feminino', 'Masculino'],
    },
    {
        id: 'sneaker-purple',
        image: galeriaTenisRoxo,
        alt: 'Tênis roxo com solado verde',
        type: 'image',
    },
    {
        id: 'model',
        image: galeriaModelo,
        alt: 'Modelo feminina com calça jeans',
        type: 'image',
    },
    {
        id: 'sneaker-color',
        image: galeriaTenisColorido,
        alt: 'Tênis colorido com cores vibrantes',
        type: 'image',
    },
    {
        id: 'sneaker-white',
        image: galeriaTenisBrancoPreto,
        alt: 'Tênis branco e preto',
        type: 'image',
    },
    {
        id: 'sneaker-silver',
        image: galeriaTenisCinza,
        alt: 'Tênis cinza',
        type: 'image',
    },
] as const;

// Renderiza cada bloco do grid e aplica o overlay do destaque na imagem principal.
const renderGalleryItem = (item: (typeof galleryItems)[number]) => {
    const isHighlight = item.type === 'highlight';

    return (
        <div
            key={item.id}
            className={[
                'gallery-item',
                `gallery-item--${item.id}`,
                'relative overflow-hidden rounded-[30px] bg-[#e9ddd1]',
                isHighlight ? 'min-h-[300px]' : 'h-full min-h-[300px]',
            ].join(' ')}
        >
            <img
                src={item.image}
                alt={item.alt}
                className="h-full w-full object-cover"
            />

            {isHighlight && (
                <div className="absolute inset-0 bg-gradient-to-r flex items-center justify-center from-black/45 via-black/20 to-transparent" />
            )}

            {isHighlight && (
                <Overlay
                title="Kripton One"
                subtitle="Estilo urbano com atitude"
                className="inset-0 justify-center"
                >
                    <Button variant="secondary" size="sm">Masculino</Button>
                    <Button>Feminino</Button>
                </Overlay>
            )};
            {/* {isHighlight && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center text-center">
                        <span className="text-xl font-medium tracking-[0.08em] uppercase text-white/90">
                            {item.title}
                        </span>
                        <span className="mt-2 text-base font-normal tracking-[0.04em] text-white/95">
                            {item.subtitle}
                        </span>
                        <div className="mt-5 flex gap-3">
                            {item.buttons.map((button) => (
                                <button
                                    key={button}
                                    type="button"
                                    className="rounded-full border border-white/80 bg-transparent px-5 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-black"
                                >
                                    {button}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )} */}
        </div>
    );
};

// O componente alterna entre a versão desktop e a versão mobile do grid.
export const Gallery = () => {
    return (
        <section className="container mb-10 px-2.5 md:px-2.5">
            <div className="hidden md:block">
                <div className="gallery-grid">{galleryItems.map(renderGalleryItem)}</div>
            </div>

            <div className="block md:hidden">
                <div className="gallery-grid gallery-grid--mobile">{galleryItems.map(renderGalleryItem)}</div>
            </div>
        </section>
    );
};