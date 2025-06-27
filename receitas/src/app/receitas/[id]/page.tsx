import InfoPill from "@/components/infoPill";
import { recipes } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface RecipePageProps {
    params: {
        id : string;
    }
}

export default function ReceitaPage( {params} : RecipePageProps) {
    const recipe = recipes.find((recipe) => recipe.id === params.id)

    if(!recipe) {
        return notFound()
    }

    return (
        <main className="flex-grow py-8">
            <div className="container mx-auto">
                <Link className="flex text-blue-500 hover:text-blue-800 mb-6" href='receitas'>
                ← Voltar para receitas</Link>
                <section className="rounded-lg overflow-hidden shado-md">
                    {/*Imagem da capa da receita*/}
                    <div className="relative h-96 w-full">
                        <Image
                            src={recipe.image}
                            fill
                            alt={recipe.title}
                            className="object-cover"
                            />
                    </div>
                    {/*Descricao da receita*/}
                    <div className="flex flex-col p-6 gap-6">
                        {/*Titulo e descricao*/}
                        <div>
                            <h1 className="text-3xl font-bold">{recipe.title}</h1>
                            <p>{recipe.description}</p>
                        </div>

                        {/*Infos de preparo da receita*/}
                        <div className="flex gap-4">
                            <InfoPill title="Preparo" info={recipe.prepTime}/>
                            <InfoPill title="Cozimento" info={recipe.cookTime}/>
                            <InfoPill title="Porçóes" info={recipe.servings}/>
                            <InfoPill title="Categoria" info={recipe.category}/>
                        </div>

                        <div className="">
                            {/* TODO : componentes de info*/}
                        </div>

                        {/*colunas*/}
                        <div className="grid grid-cols-2">
                            {/*coluna dos ingredientes*/}
                            <div>
                                <h2 className="text-xl font-bold mb-4">Ingredientes</h2>
                                <ul className="list-disc list-inside space-y-2">
                                    {recipe.ingredients.map((ingredient) =>(
                                        <li className="marker:text-blue-500">{ingredient}</li>
                                    ))}
                                </ul>
                            </div>

                            {/*coluna do modo preparo*/}
                            <div>
                                <h2 className="text-xl font-bold mb-4">Modo de preparo</h2>
                                {/*TODO: componente de passo de preparo */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}