
import golden from '../../public/golden.png'
import natural from '../../public/natural.png'
import primier from '../../public/primier.png'
import royal from '../../public/royal.png'
import whiskas from '../../public/whiskas.png'
import Image from 'next/image'
import { FacebookLogo, InstagramLogo, YoutubeLogo} from '@phosphor-icons/react/dist/ssr'


const brands = [
  { name: "Royal Canin", logo: royal },
  { name: "Golden", logo: golden },
  { name: "Premier", logo: primier },
  { name: "Fórmula Natural", logo: natural },
  { name: "Whiskas", logo: whiskas }
];


export function Footer() {
    return (
        <section className="bg-[#E84c3d] py-16">

            <div className='container mx-auto px-4'>

                <div className='border-b border-white/20 pb-8'>
                    <h4 className='text-3xl font-semibold mb-8 text-center text-white'>Marcas Parceiras</h4>
                    
                    <div className='grid grid-cols-2 lg:grid-cols-5 gap-8 items-center justify-items-center'>
                        {brands.map((item, index) => (
                            <div key={index}>
                                <Image
                                src={item.logo}
                                alt={item.name}
                                width={100}
                                height={50}
                                quality={100}
                                style={{
                                    width:"auto",
                                    height:"auto",
                                }}
                                className="object-contain" />
                            </div>
                        ))}
                    </div>

                </div>

                <footer className='text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5'>
                    <div>
                        <h3 className='text-2xl font-semibold text-white mb-2'>Ana Pets</h3>
                        <p className='mb-4'>Cuidadndo do seu melhor amigo com amor e dedicação.</p>
                        <a href={`https://wa.me/5591987125924?text=Olá vim pelo site e gostaria de mais informações.`}
                        target="_blank"
                         className='mt-2 inline-block bg-green-500 px-4 py-2 rounded-md'>
                            Contato via WhatsApp
                        </a>
                    </div>
                    
                    <div>
                        <h3 className='text-2xl font-semibold mb-2'>Contatos</h3>
                        <p>Email: test@test.com</p>
                        <p>Telefone: (11) 99999-9999</p>
                        <p>Endereço: Rua Exemplo, 123 - Cidade, Estado</p>
                    </div>

                    <div>
                        <h3 className='text-2xl font-semibold mb-2'>Redes Sociais</h3>
                        <div className='flex gap-4'>

                            <a href="#" target='_blank' className='ml-4'>
                                <FacebookLogo className='w-8 h-8'/>
                            </a>
                            <a href="#" target='_blank' className='ml-4'>
                                <InstagramLogo className='w-8 h-8'/>
                            </a>
                            <a href="#" target='_blank' className='ml-4'>
                                <YoutubeLogo className='w-8 h-8'/>
                            </a>

                        </div>
                    </div>

                </footer>
                
            </div>

        </section>
    )
}