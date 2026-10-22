type Ingredient = {
  name: string;
  amountGrams: number;
};

type Recipe = {
  name: string;
  servings: number;
  vegetarian: boolean;
  ingridients: Ingredient[];
};

const recipe1: Recipe = {
  name: "Recipe1",
  servings: 10,
  vegetarian: true,
  ingridients: [
    { name: "Salt", amountGrams: 3 },
    { name: "Pepper", amountGrams: 1 },
    { name: "Potatoes", amountGrams: 1000 },
  ],
};

const recipe2: Recipe = {
  name: "Recipe2",
  servings: 4,
  vegetarian: false,
  ingridients: [
    { name: "Salt", amountGrams: 6 },
    { name: "Pepper", amountGrams: 2 },
    { name: "Meat", amountGrams: 500 },
  ],
};

function summarize(recipe: Recipe): string {
  const vegetarianDescription = recipe.vegetarian
    ? "vegetarian"
    : "non-vegetarian";

  const ingridient = recipe.ingridients.map(
    (i) => `${i.name}: ${i.amountGrams}g`,
  );

  return `Name: ${recipe.name}  serves ${recipe.servings}. It is ${vegetarianDescription} Ingridients: ${ingridient}`;
}

console.log(summarize(recipe1));
