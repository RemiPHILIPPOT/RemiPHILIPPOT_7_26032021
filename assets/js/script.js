let arrayOfRecipes = [];
let arrayOfIngredients = [];
let arrayOfAppliance = [];
let arrayOfUstensils = [];
let recipesByAppliance,
  recipesByIngredients,
  recipesByUstensils = [];
let arrayOfRecipesFilteredByTag,
  arrayOfRecipesFilteredByText = [];

const setArrayOfRecipes = (recipes) => (arrayOfRecipes = recipes);

//Init the array of appareil, ustensils, ingredients
const setArray = (recipes) => {
  recipes.forEach((r) => {
    //Init appareil list, push only if not present in arrayOfAppliance
    if (arrayOfAppliance.indexOf(r.appliance.toLowerCase()) === -1)
      arrayOfAppliance.push(r.appliance.toLowerCase());
    //Init ustanciles lists, push only if not includes in arrayOfUstensils
    r.ustensils.map((ustensil) => {
      if (!arrayOfUstensils.includes(ustensil.toLowerCase()))
        arrayOfUstensils.push(ustensil.toLowerCase());
    });
    //Init list of ingredients, push only if not present in arrayOfIngredients
    r.ingredients.forEach((i) => {
      if (arrayOfIngredients.indexOf(i.ingredient.toLowerCase()) === -1) {
        arrayOfIngredients.push(i.ingredient.toLowerCase());
      }
    });
  });
  setTags();
};

//Init tags in dropdown list HTML
const setTags = () => {
  //Add list of ingrédient
  arrayOfIngredients.forEach((ingredient, index) => {
    $("#dropdownIngredientList").append(
      `<li><a href="#" id="ingredient-${index}">${ingredient}</a></li>`
    );
  });
  //Add list of appliance (appareil)
  arrayOfAppliance.forEach((appliance, index) => {
    $("#dropdownAppareilList").append(
      `<li><a href="#" id="appliance-${index}">${appliance}</a></li>`
    );
  });
  //Add list of ustanciles
  arrayOfUstensils.forEach((ustensil, index) => {
    $("#dropdownUstensilList").append(
      `<li><a href="#" id="ustensil-${index}">${ustensil}</a></li>`
    );
  });
};

//Add HTML Recipes
const setRecipesHTML = (recipes) => {
  let recipesList = $("#recipes");
  recipes.forEach((r, index) => {
    recipesList.append(`
            <div class="col-md-4 recipe recipeId-${r.id}">
                <div class="card mb-4 box-shadow no-border">
                    <img class="card-img-top" src="assets/img/bg-recipe.png" alt="Card image cap" />
                    <div class="card-body card-body-style">
                        <div class="d-flex justify-content-between">
                            <label class="card-title">${r.name}</label>
                            <div class="card-time"><img src="./assets/img/clock-icon.png" class="icon clockIcon" /> <span>${r.time} min</span></div>
                        </div>
                        <div class="row d-flex justify-content-between">
                            <ul class="col-md-6 card-ingredients" id="id-card-ingredients-${r.id}"></ul>
                            <small class="col-md-6 card-description">${r.description}</small>
                        </div>
                    </div>
                </div>
            </div>
        `);
    //Init list of ingredients, push only if not present in arrayOfIngredients
    //Add ingredient HTML associate to recipe ID
    r.ingredients.forEach((i) =>
      $(`#id-card-ingredients-${r.id}`).append(
        `<li>${i.ingredient}: <span>${i.quantity ? i.quantity : ""} ${
          i.unit ? i.unit : ""
        }</span></li>`
      )
    );
  });
};

//use constante recipesJson, for prod
// setArrayOfRecipes(recipesJson);
// setArray(recipesJson);
// setRecipesHTML(recipesJson);

//Show / Hide dropdown list
const toggleDropdownList = (dropdownList) => {
  $(`#${dropdownList}`).toggle();
  if ($(`#${dropdownList}`)[0].style.display == "block")
    toggleIconDropdown(true);
  else toggleIconDropdown(false);
};

//Search function/
const search = () => {
    let word = document.getElementById("inputSearchAll").value
    console.log(word);
    let recipestmp = [];
    for (let i=0; i<recipesJson.length; i++){
        let recipetmp = recipesJson[i];
        if (recipetmp.name.toLowerCase().includes(word.toLowerCase())||(recipetmp.description.toLowerCase().includes(word.toLowerCase()))){
            recipestmp.push(recipetmp)
        }
        else {
        const ingredientofrecipe = recipetmp.ingredients ;
        for (let j=0; j<ingredientofrecipe.length; j++) {
            let ingredienttmp = ingredientofrecipe[j];
            if (ingredienttmp.ingredient.toLowerCase().includes(word.toLowerCase())){
                recipestmp.push(recipetmp);
                j=ingredientofrecipe.length
            };


        }
    }
        
       
    }
    console.log(recipestmp);
    setArrayOfRecipes(recipestmp);
    setArray(recipestmp);
    setRecipesHTML(recipestmp);
    
}


