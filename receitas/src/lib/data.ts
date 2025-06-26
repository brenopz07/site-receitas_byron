export type Recipe = {
    id: string;
    title: string;
    description: string;
    image: string;
    prepTime: string;
    cookTime: string;
    servings: number;
    ingredients: string[];
    instructions: string[];
    category: string;
}

export const recipes: Recipe[] = [
    {
        id: "1",
        title: "Panqueca de Banana",
        description: "Uma panqueca saudável e rápida feita com banana e aveia.",
        image: "/receitas/panqueca.png",
        prepTime: "5 min",
        cookTime: "10 min",
        servings: 2,
        ingredients: [
            "1 banana madura",
            "2 ovos",
            "1/2 xícara de aveia em flocos",
            "1 colher de chá de canela (opcional)",
            "Óleo para untar a frigideira"
        ],
        instructions: [
            "Amasse a banana em uma tigela.",
            "Adicione os ovos e misture bem.",
            "Acrescente a aveia e a canela.",
            "Aqueça uma frigideira antiaderente com um pouco de óleo.",
            "Despeje porções da massa e cozinhe por 2-3 minutos de cada lado.",
            "Sirva quente com mel ou frutas."
        ],
        category: "Café da manhã"
    },
    {
        id: "2",
        title: "Lasanha à Bolonhesa",
        description: "Clássica lasanha com molho bolonhesa e queijo gratinado.",
        image: "/receitas/lasanha.png",
        prepTime: "20 min",
        cookTime: "40 min",
        servings: 6,
        ingredients: [
            "500g de carne moída",
            "1 cebola picada",
            "2 dentes de alho picados",
            "2 latas de molho de tomate",
            "500g de massa para lasanha",
            "400g de queijo mussarela",
            "200g de presunto",
            "Queijo parmesão a gosto",
            "Sal e pimenta a gosto",
            "Azeite para refogar"
        ],
        instructions: [
            "Refogue a cebola e o alho no azeite.",
            "Adicione a carne moída e cozinhe até dourar.",
            "Coloque o molho de tomate, sal e pimenta e cozinhe por 10 minutos.",
            "Em um refratário, monte camadas de molho, massa, presunto e mussarela.",
            "Repita as camadas e finalize com queijo parmesão.",
            "Leve ao forno preaquecido a 200°C por 30 minutos.",
            "Sirva quente."
        ],
        category: "Almoço"
    },
    {
        id: "3",
        title: "Brownie de Chocolate",
        description: "Brownie úmido e intenso, perfeito para sobremesas.",
        image: "/receitas/brownie.png",
        prepTime: "15 min",
        cookTime: "25 min",
        servings: 8,
        ingredients: [
            "200g de chocolate meio amargo",
            "150g de manteiga",
            "3 ovos",
            "1 xícara de açúcar",
            "1/2 xícara de farinha de trigo",
            "1 pitada de sal",
            "1 colher de chá de essência de baunilha"
        ],
        instructions: [
            "Derreta o chocolate com a manteiga em banho-maria.",
            "Bata os ovos com o açúcar até formar um creme claro.",
            "Adicione o chocolate derretido, a baunilha e o sal.",
            "Misture a farinha delicadamente.",
            "Despeje em uma forma untada e enfarinhada.",
            "Asse em forno preaquecido a 180°C por 25 minutos.",
            "Deixe esfriar antes de cortar."
        ],
        category: "Sobremesa"
    }
]