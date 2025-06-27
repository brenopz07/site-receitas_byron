import Image from "next/image";
import Link from "next/link";

export default function ReceitaPage() {
    return (
        <main className="flex-grow py-8">
            <div className="container mx-auto">
                <Link className="flex text-blue-500 hover:text-blue-800" href='receitas'>
                ← Voltar para receitas</Link>
                <section>
                    {/*Imagem da capa da receita*/}
                    <div className="relative h-96 w-full">
                        <Image
                            src=''
                            fill
                            alt='Titulo da receita'
                            />
                    </div>
                    {/*Descricao da receita*/}
                    <div>
                        <h1>Titulo da receita</h1>
                        <p>Descricao</p>

                        {/*Infos de preparo da receita*/}

                        <div>
                            {/* TODO : componentes de info*/}
                        </div>

                            {/*colunas*/}
                        <div>
                            {/*coluna dos ingredientes*/}
                            <div>

                            </div>
                            {/*coluna do preparo*/}
                            <div>
                                {/*TODO: componente de passo de preparo */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}