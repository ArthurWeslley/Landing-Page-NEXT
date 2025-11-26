
import golden from '../../public/golden.png'
import natural from '../../public/natural.png'
import primier from '../../public/primier.png'
import royal from '../../public/royal.png'
import whiskas from '../../public/whiskas.png'
import Image from 'next/image'


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

                <div>
                    
                </div>
                
            </div>

        </section>
    )
}