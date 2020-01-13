import React from 'react'

const Recipe=(props)=>
{
    console.log(props)
    const {recipe}= props
// deconstructing to pull recipe out of props, 

    return(
        <header>
             <h1>{recipe.title}</h1>
            <cite className="contributors">
                   <div>By John Doe</div>
                   <div><a href="https://cooking.nytimes.com/recipes/5593-chicken-and-apricot-masala" target="_blank">Source</a></div>
                   </cite>
             <ul id="recipe_meta_data" class="list-group">
               <li className="list-group-item">Active: 1 Hour</li>
               <li className="list-group-item">Total: 5 Hours</li>
               <li className="list-group-item">6 Servings</li>
             </ul>
           </header>

//  <article className="article">
//      <img id="food_image" src="./media/tikka.jpg" alt="" className="img-thumbnail">

//      <div id="Ingredients_cont">
//        <h1>Ingredients</h1>
//        <ul>
//          <li> 6 garlic cloves, finely grated</li>
//          <li>4 teaspoons finely grated peeled ginger</li>
//          <li>4 teaspoons ground turmeric</li>
//          <li>2 teaspoons garam masala</li>
//          <li>2 teaspoons ground cumin</li>
//          <li>1 tablespoon kosher salt</li>
//          <li>2 pounds skinless, boneless chicken breasts</li>
//          <li>3 tablespoons ghee (clarified butter) or vegetable oil</li>
//          <li>1 small onion, thinly sliced...</li>
//        </ul>
//      </div>
//      <h1>Preparation</h1>
//      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
//        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
//        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//      </p>
//    </article> 
    )

}


export default Recipe