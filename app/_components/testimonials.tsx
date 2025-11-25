"use client"

import { ChevronLeft, ChevronRight, Stethoscope , Scissors, Syringe, CarTaxiFront, Hotel, Clock, ShoppingBag, Microscope } from 'lucide-react'
import { WhatsappLogoIcon } from "@phosphor-icons/react"
import type { ElementType } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
// import tutor1 from '../../public/tutor1.jpg'
// import tutor2 from '../../public/tutor2.jpg'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'

interface Testimonials {
  content: string;
  author: string;
  role: string;
  image?: StaticImageData;
}

const testimonials: Testimonials[] = [
  {
    content:
      "Desde que comecei a levar a Luna para banho e tosa aqui, ela nunca esteve tão feliz! O atendimento é impecável, os profissionais são super cuidadosos e sempre deixam minha peluda linda e cheirosa. Recomendo de olhos fechados!",
    author: "Mariana Souza",
    role: "Tutora da Luna (Golden Retriever)",
    // image: tutor2,
  },
  {
    content:
      "O serviço de hotel para pets foi uma experiência incrível! Precisei viajar e fiquei tranquilo sabendo que o Thor estava sendo bem cuidado. Recebi fotos e atualizações diárias, e ele voltou para casa super feliz! Sem dúvida, o melhor petshop da região.",
    author: "Rafael",
    role: "Tutor do Thor (Bulldog Francês)",
    // image: tutor1,
  },
  {
    content:
      "Meus gatos nunca gostaram de sair de casa, mas o atendimento nesse petshop fez toda a diferença. A equipe é muito paciente e cuidadosa, e o serviço de banho especializado para felinos foi maravilhoso! Agora sei onde confiar o cuidado deles.",
    author: "Camila Fernandes",
    role: "Tutora da Mel e do Max",
    // image: tutor2
  },
  {
    content:
      "Adotei a Nina recentemente e trouxe ela para a primeira consulta aqui. Fiquei impressionado com o carinho, atenção e explicações detalhadas sobre os cuidados iniciais. Ela se sentiu super segura! Só tenho a agradecer.",
    author: "Diego Martins",
    role: "Tutor da Nina (Vira-lata Caramelo)",
    // image: tutor1,
  },
  {
    content:
      "Meu idosinho já não tem tanta energia, então precisava de um atendimento especial. Fui surpreendida pela paciência, cuidado e acompanhamento constante. Finalmente encontrei um lugar em que confio de verdade!",
    author: "Beatriz Lima",
    role: "Tutora do Simba (Poodle)",
    // image: tutor2,
  },
];


export function Testimonials() { 

    const [emblaRef, emblaApi] = useEmblaCarousel ({
        loop: true , 
    })


    function scrolPrev() {
      emblaApi?.scrollPrev();
    }
    function scrolNext() {
      emblaApi?.scrollNext();
    }


    return(
        <section className="bg-[#FFD449] py-16">
            <div className="container mx-auto px-4">
                <div>
                    <h2 className="text-4xl text-center font-bold mb-12">Depoimentos de nossos Clientes </h2>

                    <div className="relative max-w-4xl mx-auto">

                      <div className='overflow-hidden' ref={emblaRef}>

                        <div className='flex'>
                          {testimonials.map((item) => {
                            //const Icon = item.icon;
                            return (
                              <div key={item.content} className='flex-[0_0_100%] px-3'>
                                <article className='bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col'>
                                  <div className=' flex flex-col items-center text-center space-y-4'>
                                    <div >
                                      <h2 className=' text-3xl text-center font-bold'> {item.author} </h2>
                                    </div>
                                    <div>
                                      <p className='text-gray-400 select-none'>"{item.content}"</p>
                                    </div>
                                    <div>
                                      <span className='text-sm italic text-gray-500'>- {item.role} -</span>
                                    </div>
                                  </div>
                                </article>
                              </div>
                            )
                          })}
                        </div>

                      </div>

                      <button 
                      onClick={scrolPrev}
                      className=' bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-2 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'>
                        <ChevronLeft 
                        className='w-6 h-6 text-gray-700'/>
                      </button>
                      <button 
                      onClick={scrolNext}
                      className=' bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-8 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'>
                        <ChevronRight 
                        className='w-6 h-6 text-gray-700'/>
                      </button>

                    </div>
                </div>                
            </div>
        </section>
    )
}