import React from 'react';
import recipes from './data/recipes';
import Nav from './components/Nav';
import Recipe from './components/Recipe';

const recipe = recipes[0];
// const recipe = recipes[1];
// const recipe = recipes[2];


const App = () => {
  return (
    <div>
      <Nav />
      {
      recipes.map(recipe => {
        return <Recipe recipe={recipe} />
      })
      }
    </div>
  )}
export default App;





  