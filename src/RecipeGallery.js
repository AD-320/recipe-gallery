import React from 'react';

const recipes = [
    { 
      id: 1, 
      title: "Spaghetti Carbonara", 
      ingredients: ["Pasta", "Eggs", "Cheese", "Bacon"], 
      image: "https://img.freepik.com/premium-photo/carbonara-pasta-spaghetti-with-pancetta-egg-parmesan-cheese-cream-sauce-old-dark-black-wooden-table-background-traditional-italian-cuisine-dish-pasta-alla-carbonara-top-view_253362-17955.jpg?size=626&ext=jpg&ga=GA1.1.1384240292.1707982490&semt=ais"
    },
    {
      id: 2,
      title: "Spirulina/Moringa Smoothie",
      ingredients: [
        "1 banana",
        "1/2 cup spinach",
        "1 tsp spirulina or moringa powder",
        "1 cup almond milk",
        "1 tbsp honey (optional)",
        "Ice cubes (optional)"
      ],
      image: "https://img.freepik.com/free-photo/green-basil-smoothie_23-2147684385.jpg?size=626&ext=jpg&ga=GA1.2.1384240292.1707982490&semt=ais" 
    }
    // Add more recipes 
];
  

const RecipeGallery = () => {
    return (
        <div className="recipe-gallery">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <h2>{recipe.title}</h2>
              <ul>
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <img src={recipe.image} alt={recipe.title} />
            </div>
          ))}
        </div>
    );
      
};

export default RecipeGallery;
