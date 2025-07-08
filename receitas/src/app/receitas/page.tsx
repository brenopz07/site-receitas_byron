"use client"

import RecipeCard from "@/components/RecipeCard";
import RecipeFormModal from "@/components/RecipeFormModal";
import { recipes } from "@/lib/data";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function ReceitasPage() {
  const [isRecipeModalOpen, setIsRecipeModalOpen] = useState(false)

    return(
        <main className="flex-grow py-8">
            <div className="container mx-auto">
                <div className="flex justify-between w-full">
                    <h1 className="text-center lg:text-start text-3xl font-bold">Todas as receitas</h1>

                    <button onClick={() => setIsRecipeModalOpen(true)} className="flex items-center gap-2 px-4 py-2 rounded-lg text-white bg-black hover:bg-gray-800 transition-colors"> 
                        <Plus size={16}/>
                        Nova receita
                    </button>
                </div>
                
                <div className="lg:grid lg:grid-cols-3 gap-8 mt-8 md:grid md:grid-cols-2 px-10 lg:px-0">
                    {recipes.map(recipe => (
                        <RecipeCard key={recipe.id} recipe={recipe}/>
                    ))}
                </div>
            </div>
                <RecipeFormModal isOpen={isRecipeModalOpen} onClose={() => setIsRecipeModalOpen(false)} />
        </main>
    )
}
