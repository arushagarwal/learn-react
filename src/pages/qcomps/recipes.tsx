export const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: new Set(['tomatoes', 'cucumber', 'onion', 'olives', 'feta'])
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: new Set(['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple'])
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: new Set(['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini'])
}];

function getIngredientList(ingredients : Set<String>){
 const ingredientList = Array.from(ingredients).map((ingredient, index) => 
  <li key={index}>{ingredient}</li>
 );
 return ingredientList;
}


export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe => 
        <div>Dish : {recipe.name}
          <p>Ingredients : </p>
          <ul>
            {getIngredientList(recipe.ingredients)}
          </ul>
        </div>
      )}
    </div>
  );
}