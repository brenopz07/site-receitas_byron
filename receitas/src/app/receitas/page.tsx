import RecipeCard from "@/components/RecipeCard"
import { recipes } from "@/lib/data"

export default function ReceitasPage(){
    return(
        <main className="flex-grow py-8">
            <div className="container mx-auto">
                <h1 className="text-center lg:text-start text-3xl font-bold">Todas as receitas</h1>
                <div className="lg:grid lg:grid-cols-3 gap-8 mt-8 md:grid md:grid-cols-2 px-10 lg:px-0">
                    {recipes.map(recipe => (
                        <RecipeCard key={recipe.id} recipe={recipe}/>
                    ))}
                </div>
            </div>
        </main>
    )
}
