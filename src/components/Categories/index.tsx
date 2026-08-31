import c1 from '@/assets/images/c1.jpg';
import g2 from '@/assets/images/g2.jpg';
import g1 from '@/assets/images/g1.jpg';
import w1 from '@/assets/images/w1.jpg';
import { Button } from '../Button';

const categories = [
    { name: "White sneakers", image: w1 },
    { name: "gray sneakers", image: g1 },
    { name: "darkgray sneakers", image: g2 },
    { name: "colorful sneakers", image: c1 },
]

export const Categories = () => {
    return <section className="container flex gap-2.5 lg:grid lg:grid-cols-4 lg:gap-4 mb-10 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
        {categories.map((category, index) => (
            <div key={index} style={{ backgroundImage: `url(${category.image})` }} className="h-125 bg-cover bg-center rounded-[20px] relative flex items-center justify-center text-white shrink-0 w-[95%] md:w-1/2 lg:w-full">
                <div className="absolute inset-0 bg-black/30 rounded-[20px] snap-center"></div>

                <div className="relative">
                    <Button variant="secondary">{category.name}</Button>
                </div>
            </div>
        ))}
    </section>;
}