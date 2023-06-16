function main() {}

fetch("https://swapi.dev/api/people")
  .then((response) => response.json())
  .then((data) => {

    const characterList = document.getElementById("character-names");

    data.results.forEach((character) => {
      const listItem = document.createElement("li");
      const characterName = character.name;
      listItem.textContent = characterName;

      listItem.addEventListener("click", () => {
        displayCharacterDetails(character);
      });

     
      characterList.appendChild(listItem);

      
      const characterIndex = data.results.indexOf(character) + 1;
      const characterImageUrl = `https://starwars-visualguide.com/assets/img/characters/${characterIndex}.jpg`;

      
      const characterImage = document.createElement("img");
      characterImage.src = characterImageUrl;
      characterImage.alt = characterName;
      characterImage.classList.add("character-image");

     
      listItem.appendChild(characterImage);
    });
  })
  .catch((error) => {
    console.log("Error fetching character data:", error);
  });


function displayCharacterDetails(character) {
  
  const characterInfo = document.getElementById("character-info");


  characterInfo.innerHTML = "";

  
  const nameHeading = document.createElement("h3");
  nameHeading.textContent = character.name;


  const genderParagraph = document.createElement("p");
  genderParagraph.textContent = "Gender: " + character.gender;

  const heightParagraph = document.createElement("p");
  heightParagraph.textContent = "Height: " + character.height + " cm";

  
  characterInfo.appendChild(nameHeading);
  characterInfo.appendChild(genderParagraph);
  characterInfo.appendChild(heightParagraph);
}

module.exports = { main };
