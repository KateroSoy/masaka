import { recipes } from './src/data/recipes.ts';

const unsplashCount = recipes.filter(r => r.heroImageUrl.includes('unsplash.com')).length;
const totalCount = recipes.length;

console.log(`Total recipes: ${totalCount}`);
console.log(`Recipes with Unsplash images: ${unsplashCount}`);
console.log(`Recipes with updated images: ${totalCount - unsplashCount}`);

const unsplashRecipes = recipes.filter(r => r.heroImageUrl.includes('unsplash.com')).map(r => r.title);
console.log('\nRecipes still using Unsplash:');
console.log(unsplashRecipes.join(', '));
