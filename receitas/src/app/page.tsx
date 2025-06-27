import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex-grow">
        {/*secao Hero*/}
        <section className='bg-orange-50 py-12'>
          <div className="flex flex-col gap-6 items-center container mx-auto">
            <h1 className='text-5xl font-bold'>Receitas Deliciosas</h1>
            <p className='text-xl'>Descubra receitas simples e deliciosas!</p>

            <Link className='bg-blue-500 hover:bg-blue-800 transition-colors text-white font-bold rounded-lg px-3 py-2' href='/receitas'>
              Ver todas as receitas
            </Link>
          </div>
        </section>

        {/* secao receitas em destaque*/}
        <section className='py-12'>
          <div className=' flex flex-col items-center container mx-auto gap-8'>
            <h2 className='text-lg font-bold'>Receitas em destaque</h2>

            {/* cards de receitas*/}  

            <Link className='flex text-blue-500 hover:text-blue-800 transition-colors' href='/receitas'>
              Ver todas as receitas →
            </Link>
          </div>
        </section>
    </main>
  );
}
