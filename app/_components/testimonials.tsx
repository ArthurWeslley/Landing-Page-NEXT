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
                          {services.map((item) => {
                            const Icon = item.icon;
                            return (
                              <div key={item.title} className='flex-[0_0_100%] min-w-0 px-3'>
                                <article className='bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col'>

                                    

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