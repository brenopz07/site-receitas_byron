import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex-grow">
      <div className="container mx-auto">
        {/*secao Hero*/}
        <section>
          <h1>Receitas Delisciosas</h1>
          <p>Descubra receitas simples e deliciosas</p>

          <Link href='/receitas'>
            Ver todas as receitas
          </Link>
        </section>
      </div>
    </main>
  );
}
