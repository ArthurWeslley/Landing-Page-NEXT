
import Image from "next/image";
import About1 from '../../public/about-1.png'
import About2 from '../../public/about-2.png'
import { Check, MapPin } from "lucide-react";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";

export function About() {
    return (
        <section className="bg-[#FDF6ec] py-16">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="relative w-full h-[460px] rounded-3xl overflow-hidden">
                            <Image
                                src={About1}
                                alt="Foto_um_cachorro"
                                fill
                                className="object-cover hover:scale-110 duration-300"
                                quality={100}
                                priority
                            />
                        </div>
                        <div className="absolute w-40 h-40 right-4 -bottom-8 rounded-lg border-4 overflow-hidden border-white">
                            <Image
                                src={About2}
                                alt="Foto_gato"
                                fill
                                quality={100}
                                priority
                            />
                        </div>
                    </div>
                    <div className="space-y-6 mt-8">
                        <h2 className="text-4xl font-bold">Sobre Ana Pet’s</h2>
                        <p>
                            Na Ana Pet’s, nosso compromisso é garantir a saúde, o bem-estar e a felicidade do seu pet! Oferecemos um atendimento completo, com profissionais qualificados e instalações modernas, tudo pensado para o conforto do seu animalzinho.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Desde 2021 cuidando do seu amigo de quatro patas.
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Profissionais capacitados à sua disposição.
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Qualidade e bem-estar são o nosso lema.
                            </li>
                        </ul>
                        <div className="flex gap-2">
                            <a
                                href="#"
                                className="bg-[#E84C3D] flex items-center text-white justify-center w-fit gap-2 px-4 py-2 rounded-md"
                            >
                                <WhatsappLogoIcon />
                                Contato via WhatsApp
                            </a>
                            <a
                                href="https://maps.app.goo.gl/81wMjDfaTMxP1Vq1A"
                                target="_blank"
                                className="flex gap-2 items-center justify-center px-4 py-2"
                            >
                                <MapPin className="text-black w-5 h-5" />
                                Endereço da Clínica.
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};