import Link from 'next/link';
import { recipes } from '@/lib/data';
import RecipeCard from '@/components/RecipeCard';

export default function Home() {
  const featuredRecipes = recipes.slice(0,3)

  return (
    <main className="flex-grow">
        {/*secao Hero*/}
        <section className='bg-blue-50 py-12'>
          <div className="flex flex-col gap-6 lg:items-start items-center container mx-auto">
            <h1 className='text-center lg:text-start text-5xl font-bold'>Receitas Deliciosas</h1>
            <p className='text-xl text-center'>Descubra receitas simples e deliciosas!</p>

            <Link className='bg-blue-500 hover:bg-blue-800 transition-colors text-white font-bold rounded-lg px-3 py-2' href='/receitas'>
              Ver todas as receitas
            </Link>
          </div>
        </section>

        {/* secao receitas em destaque*/}
        <section className='py-12'>
          <div className=' flex flex-col items-center container mx-auto gap-8'>
            <h2 className='text-lg font-bold'>Receitas em destaque</h2>

            <div className='lg:flex lg:w-full gap-8 '>
              {featuredRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe}/>
              ))}
            </div>

            <Link className='flex text-blue-500 hover:text-blue-800 transition-colors' href='/receitas'>
              Ver todas as receitas →
            </Link>
          </div>
        </section>
    </main>
  );
}
