// war.js

// Fetch character data from the Star Wars API
fetch("https://swapi.dev/api/people")
  .then((response) => response.json())
  .then((data) => {
    // Retrieve the character list element
    const characterList = document.getElementById("character-names");

    // Loop through the character data and create list items
    data.results.forEach((character) => {
      const listItem = document.createElement("li");
      const characterName = character.name;
      listItem.textContent = characterName;

      // Attach a click event listener to each list item
      listItem.addEventListener("click", () => {
        displayCharacterDetails(character);
      });

      // Append the list item to the character list
      characterList.appendChild(listItem);

      // Retrieve the character image URL
      const characterIndex = data.results.indexOf(character) + 1;
      const characterImageUrl = `https://starwars-visualguide.com/assets/img/characters/${characterIndex}.jpg`;

      // Create an image element for the character
      const characterImage = document.createElement("img");
      characterImage.src = characterImageUrl;
      characterImage.alt = characterName;
      characterImage.classList.add("character-image");

      // Append the image to the list item
      listItem.appendChild(characterImage);
    });
  })
  .catch((error) => {
    console.log("Error fetching character data:", error);
  });

// Function to display character details
function displayCharacterDetails(character) {
  // Retrieve the character info element
  const characterInfo = document.getElementById("character-info");

  // Clear any existing content
  characterInfo.innerHTML = "";

  // Create the heading element for the character name
  const nameHeading = document.createElement("h3");
  nameHeading.textContent = character.name;

  // Create paragraph elements for gender and height
  const genderParagraph = document.createElement("p");
  genderParagraph.textContent = "Gender: " + character.gender;

  const heightParagraph = document.createElement("p");
  heightParagraph.textContent = "Height: " + character.height + " cm";

  // Append the elements to the character info container
  characterInfo.appendChild(nameHeading);
  characterInfo.appendChild(genderParagraph);
  characterInfo.appendChild(heightParagraph);
}
