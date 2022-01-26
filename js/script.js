const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

//Factory Function
const createPet = function (name, species) {
  const pet = {
    name: name,
    species: species,
    isTired: 5,
    sleep: function () {
      console.log(`${this.name} needs a nap. Zzz...`);
      this.isTired = 1;
    },
    play: function () {
      if (this.isTired === 10) {
        console.log("Too tired to play.");
        this.sleep();
      } else {
        console.log(`Yay ${this.name} loves to play!`);
        this.isTired += 1;
      }
    }
  };
  return pet;
};

//Create 5 New Objects

const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "rat");
const francine = createPet("Francine", "turtle");

//----------NEW LS-11.5-----------------------

//Update Properties
clover.isTired = 8;
francine.isTired = 9;

// New Array
const allPets = [sora, clover, baxter, cleo, francine];
// console.log(allPets);

//Function
const showPets = function (petArray) {
  pets.innerHTML = "";

  for (let pet of petArray) {
    let status = "ready to play!";

    if (pet.isTired >= 7) {
      status = "sleeping.";
    }
    const li = document.createElement("li");
    li.innerHTML = `<span class="pet-name">${pet.name}</span> the ${pet.species} is ${status}`;
    pets.append(li);
  }
};

//Add Event Handler
statusButton.addEventListener("click", function () {
  showPets(allPets);
});
