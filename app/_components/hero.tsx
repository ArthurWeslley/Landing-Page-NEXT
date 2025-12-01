
import {WhatsappLogoIcon} from "@phosphor-icons/react/dist/ssr";
import hero_dog from "../../public/hero-dog.webp";
import hero_cat from "../../public/cat-hero.png"
import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-[#E84C3D] text-white relative overflow-hidden">

        <div>
            <Image
            src={hero_dog}
            alt="Foto_Cachorro"
            fill
            sizes="100vw"
            priority
            className="object-cover opacity-60 lg:hidden"
            />
            <div className="absolute inset-0 bg-black opacity-40 md:hidden"></div>
        </div>

        <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">
            <article className="grid grid-cols-1 lg:grid-cols-2">
                <div className="space-y-6">
                    <div>
                        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl leading-10">
                            Seu pet merece o melhor cuidado, carinho e atenção especial.
                        </h1>
                    </div>
                    <p className="lg:text-lg">
                        Oferecemos serviços de alta qualidade para garantir a saúde e felicidade do seu amigo peludo.
                    </p>

                    <div>
                        <a href={`https://wa.me/5591987125924?text=Olá vim pelo site e gostaria de mais informações.`}
                        target="_blank"
                        className="bg-green-500 px-5 py-2 rounded-md text-white font-semibold flex items-center 
                        justify-center w-fit gap-2"
                        >
                            <WhatsappLogoIcon className="h-5 w-5"/>
                            Contato via WhatsApp</a>
                    </div>
                    <div className="mt-8">
                        <p className="text-sm mb-4">
                            <b className="bg-black text-white px-2 py-1 rounded-md">5%</b> de desconto na primeira consulta!
                        </p>
                        <div className="flex mt-4">
                            <div className="w-32 hidden lg:block">
                                <Image
                                src={hero_cat}
                                alt="Foto_Cat"
                                quality={100}
                                className="object-fill"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hidden md:block h-full relative">
                    <Image 
                    src={hero_dog}
                    alt="Foto_Dog"
                    className="object-contain"
                    fill
                    quality={100}
                    priority
                    />
                </div>

            </article>
        </div>
    </section>
  );
}