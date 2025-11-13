"use client"

import { ChevronLeft, ChevronRight, Stethoscope , Scissors, Syringe, CarTaxiFront, Hotel, Clock, ShoppingBag, Microscope } from 'lucide-react'
import { WhatsappLogoIcon } from "@phosphor-icons/react"
import type { ElementType } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

interface Service {
  title: string;
  description: string;
  duration: string;
  price: string;
  icon: ElementType;
  linkText: string;
}

const services: Service[] = [
  {
    title: "Consultas Veterinárias",
    description: "Atendimento clínico completo com avaliação geral da saúde do pet, incluindo consultas presenciais e a domicílio.",
    duration: "30 min",
    price: "R$ 100,00",
    icon: Stethoscope,
    linkText: "Olá! Veja as informações no site, gostaria de agendar,"
  },
  {
    title: "Exames e Diagnósticos",
    description: "Exames laboratoriais, ultrassom e raio-X com tecnologia moderna para diagnósticos rápidos e precisos.",
    duration: "1 h",
    price: "R$ 150,00",
    icon: Microscope,
    linkText: "Olá! Veja as informações no site, gostaria de agendar,",
  },
  {
    title: "Vacinação e Vermifugação",
    description: "Aplicação de vacinas e vermífugos conforme o calendário indicado, mantendo seu pet sempre protegido.",
    duration: "20 min",
    price: "R$ 80,00",
    icon: Syringe,
    linkText: "Olá! Veja as informações no site, gostaria de agendar,",
  },
  {
    title: "Banho e Tosa",
    description: "Inclui banho com produtos específicos, corte de unhas, limpeza das orelhas e tosa personalizada (higiênica ou estilizada).",
    duration: "45 min",
    price: "R$ 80,00",
    icon: Scissors,
    linkText: "Olá! Veja as informações no site, gostaria de agendar,",
  },
  {
    title: "Hotel Canino",
    description: "Hospedagem segura e confortável, com alimentação balanceada, recreação e cuidados dedicados.",
    duration: "Diária",
    price: "R$ 90,00",
    icon: Hotel,
    linkText: "Olá! Veja as informações no site, gostaria de reservar,",
  },
  {
    title: "Rações e Acessórios",
    description: "Variedade de rações premium, petiscos saudáveis e acessórios modernos para o seu pet.",
    duration: "—",
    price: "Sob consulta",
    icon: ShoppingBag,
    linkText: "Olá! Veja as informações no site, gostaria de conferir,",
  },
  {
    title: "Táxi Dog",
    description: "Transporte seguro e confortável para levar e buscar seu pet onde for necessário.",
    duration: "Conforme trajeto",
    price: "A partir de R$ 30,00",
    icon: CarTaxiFront,
    linkText: "Olá! Veja as informações no site, gostaria de solicitar,",
  }
];

export function Services() { 

    const [emblaRef, emblaApi] = useEmblaCarousel ({
        loop: false ,
        align: "start" ,
        slidesToScroll: 1 , 
        breakpoints:{
            "(min-width: 768px)": {slidesToScroll: 3}
        }
    })


    function scrolPrev() {
      emblaApi?.scrollPrev();
    }
    function scrolNext() {
      emblaApi?.scrollNext();
    }


    return(
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                <div>
                    <h2 className="text-4xl font-bold mb-12">Nossos Serviços</h2>

                    <div className="relative">

                      <div className='overflow-hidden' ref={emblaRef}>

                        <div className='flex'>
                          {services.map((item) => {
                            const Icon = item.icon;
                            return (
                              <div key={item.title} className='flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3'>
                                <article className='bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col'>
                                  <div className='flex-1 items-stat justify-between'>

                                    <div className='gap-3 flex'>
                                      <Icon className='text-3xl' />
                                      <div>
                                        <h2 className='font-bold text-xl my-1 select-none'>{item.title}</h2>
                                        <p className='text-gray-400 select-none'>{item.description}</p>
                                      </div>
                                    </div>

                                  </div>

                                  <div className='border-t border-gray-500 flex items-center pt-3 justify-between select-none'>
                                    <div className='flex gap-2 items-center text-sm'>
                                      <Clock className='w-4 h-4'/>
                                      <span>{item.duration}</span>
                                    </div>
                                    <div>
                                      <a href="#"
                                      className='flex items-center gap-1 justify-center selec-none hover:bg-gray-500 px-4 py-1 rounded-md duration-300'>
                                        <WhatsappLogoIcon className='w-4 h-4'/>
                                        Entrar em Contáto
                                        
                                      </a>
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