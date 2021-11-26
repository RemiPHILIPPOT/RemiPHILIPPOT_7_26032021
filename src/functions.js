export function developTagsSearchResults(listOfInputs, currentInput, recipesObj) {
  listOfInputs.forEach((input) => {
    if (input.inputType != "mainSearch") {
      //Remise à 0
      changePlaceholderOnClosing(input);
      changeInputStyleOnClosing(input);
    }
  });
  //Gestion placeholder
  changePlaceholderOnOpening(currentInput);
  //Visibilité
  currentInput.inputDOM.nextElementSibling.classList.add("invisible");
  currentInput.inputDOM.nextElementSibling.nextElementSibling.classList.remove("invisible");
  currentInput.tagResultsList.classList.remove("invisible");
  currentInput.inputDOM.parentNode.parentNode.classList.remove("col-xl-2");
  currentInput.inputDOM.parentNode.parentNode.classList.add("col-xl-5");
  //Affichage des tags
  recipesObj.filterTagsResultList(currentInput.inputType);
  recipesObj.displayListOfTags(currentInput.tagResultsList);
  recipesObj.clickOnTagsHandler(currentInput.tagResultsList);
}

export function shrinkTagsSearchResults(currentInput) {
  currentInput.inputDOM.value = "";
  //Gestion placeholder
  changePlaceholderOnClosing(currentInput);
  //Visibilité
  changeInputStyleOnClosing(currentInput);
}

function changePlaceholderOnOpening(input) {
  input.inputDOM.classList.remove("closed");
  input.inputDOM.classList.add("opened");
  if (input.inputType == "ingredients") input.inputDOM.setAttribute("placeholder", "Rechercher un ingredient");
  if (input.inputType == "appliance") input.inputDOM.setAttribute("placeholder", "Rechercher un appareil");
  if (input.inputType == "ustensils") input.inputDOM.setAttribute("placeholder", "Rechercher un ustensile");
}
function changePlaceholderOnClosing(input) {
  input.inputDOM.classList.add("closed");
  input.inputDOM.classList.remove("opened");
  if (input.inputType == "ingredients") input.inputDOM.setAttribute("placeholder", "Ingredients");
  if (input.inputType == "appliance") input.inputDOM.setAttribute("placeholder", "Appareils");
  if (input.inputType == "ustensils") input.inputDOM.setAttribute("placeholder", "Ustensiles");
}
function changeInputStyleOnClosing(input) {
  input.tagResultsList.classList.add("invisible");
  input.inputDOM.nextElementSibling.classList.remove("invisible");
  input.inputDOM.nextElementSibling.nextElementSibling.classList.add("invisible");
  input.inputDOM.parentNode.parentNode.classList.remove("col-xl-5");
  input.inputDOM.parentNode.parentNode.classList.add("col-xl-2");
}

/**
 * @param {String} string - Mettre la premiere lettre de cette string en majuscule
 * @returns
 */
export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
