# React Recipes!

![LOVE REACT](./assets/love-react.jpg)

To get started with this homework:

- Fork and clone down this repo. Remember this?
- cd into `recipes`.
- Run `npm install` or `npm i`. Your React application will not run if you skip this step.

The `/recipes` directory is a React application that has been created for you already. In it you will find:

- A mostly empty React application.
- An `index.html` (in `/recipes/public/index.html`) with HTML for a recipe site.
- A array of recipes in `/recipes/src/data/recipes.json`.

Your task is to:

- Convert the HTML in `index.html` into JSX and separate it out into components.
- Use the data imported from `/recipes/src/data/recipes.json` to populate information in those components.
- Complete this assignment with a minimum of **4 commits**.

Here are guided steps:

## 1. Move hardcoded HTML into App.js

`npm start` from the root of this React application to see what this app currently looks like in your browser.

Open the React app `recipes` in your code editor and move the HTML from the `/recipes/public/index.html` file into the `App.js` component.

Delete the original HTML from `index.html`.

Convert/modify the HTML now in your `App.js` to JSX. HTML and JSX are similar, but they not the same. Keep an eye on that ```<img>``` tag. What's going on there?

Check out your browser again (it should be updating in real-time). If you've converted the HTML to JSX correctly, everything should look exactly the same.

## 2. Separate JSX into components

Take a look over `App.js`. Consider how you might break your code up into separate components. You might have a component for the `Nav`, another for the `Recipe`, and a third for the `Footer`. You coukd even break the `Recipe` component up into even smaller components like `RecipeHeader` and `RecipeInstructions`. If you want to add even more, go for it! React encourages modularity and reusability.

Check out your browser once again. As with the end of step one, if you've done everything here correctly, your page should look exactly the same as before.

## 3. Pass the data into components using props

So far we have kept all of the information for this recipe (the title, the ingredients, etc) hardcoded into our components. Now, instead of hardcoding this data, we are going to pass it down from the imported `recipe` object in `App.js` as props.

What are props? If you think of a component as just a big fancy function, consider props to work almost exactly like arguments and parameters.

You'll need to manually remove the hardcoded recipe data in your component or components for the
- title
- author name
- img source
- href source
- cooking and prep time
- number of servings,
- list of ingredients
- preparation instructions 

and replace it all with props. Check out the file `/recipes/src/data/recipes.json` if you're having trouble finding the correct paths to the info you want to render. 

_Note: some JSON data may have different values from the original HTML._

If it helps, you can think about, treat and test this imported data the same as if it were data coming from an API call.

## Bonus

What's this? There are two additional recipes included in the `/recipes/src/data/recipes.json` file! Looks like we've got Eggs Benedict and a Nectarine Tart. Re-use the components you've already created to render these two additional recipes below the first.

## CSS Bonus

Go into `index.html` (found in the public directory from step 1) and remove the included stylesheet:
`<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integr...`

Create a new file in the src directory called `App.css`.

Add `import './App.css';` to the top of `App.js`.

Style your awesome recipe app to look as close to this mockup as possible:
<details>
<summary>Click To See</summary>
<img src='./assets/original.png' />
</details>

## Your homework submission should include:

- A pull request created on _this repo_ by 11PM (even if it is incomplete!).
- At least 4 commits.
- A HW submission template with completion, comfort, wins, questions, etc... you know the drill.
