const Villains = [
    ['CO2', 'The biggest contributor of Greenhouse gases, the colourless, odourless, CO2 wreaks havoc on the world by preventing heat from escaping the planet. This in turn leads to global warming, which causes draughts, increased temperatures, and melting glaciers amongst other problems'],
    ['Viruses', 'Small, microscopic infectors, Viruses invade living organisms and use the hosts own cells to replicate. This causes a multitude of diseases in Humans and Animals alike.'],
    ['UV Radiation', 'UV Radiation is split into 3 types, UVA, UVB, and UVC. These come from the Sun and can cause skin cancer through destruction of DNA in cells.'],
    ['Poachers', 'People that seek to illegally hunt and farm game, for their own gain, or as part of a larger organization. The animals hunted are generally endangered and will face extinction at the hands of overhunting.'],
    ['Carrion / Disease', 'The body of animals passed is the perfect breeding ground for bacteria and disease. These diseases can then spread elsewhere, poisoning the nearby environment.'],
];

const Heroes = [
    ['Trees', 'Covering about ~30% of the Earth’s land surface, trees filter out the air through the process of photosynthesis. This creates sugars for the plant, as well as gives off oxygen to the environment.'],
    ['Vaccines', 'An invention originating in 1796, vaccines have helped bolster the human immune system against a variety of infections and disease.'],
    ['Ozone Layer', 'Surrounding the Earth is a layer known as the Ozone layer. This layer helps keep certain types of radiation from entering the atmosphere.'],
    ['Wildlife Sanctuaries', 'As certain species face extinction, Sanctuaries are made in order to preserve these animals by giving them a safe, protected environment.'],
    ['Scavengers / Decomposers', 'Sometimes seen as a bad omen, scavengers such as vultures and buzzards are generally not wanted around as they feast on dead animals. They are; however, the cleanup crew of the animal kingdom, keeping the landscape clean of rotting carcasses and other waste material.'],
];

const VillainsImages = [
    ['CO2.png'],
    ['Virus.png'],
    ['Radiation.png'],
    ['Poacher.png'],
    ['carrion.png'],
];

const HeroImages = [
    ['Tree.png'],
    ['vaccine.png'],
    ['ozone.png'],
    ['Sanctuary.png'],
    ['Scavenger.png'],
];

//0 to 5
let currentVillain = Math.floor(Math.random() * 5);

function setHeroAnswers() {
    let i = 0;
    document.querySelectorAll('.hero-box').forEach(el =>  {
        el.src = HeroImages[i];
        i++;
      });


}

let userClicked = 0;

document.getElementById("hero-one").addEventListener('click', event =>{
    userClicked = 1;
});

document.getElementById("hero-two").addEventListener('click', event =>{
    userClicked = 2;
});

document.getElementById("hero-three").addEventListener('click', event =>{
    userClicked = 3;
});

document.getElementById("hero-four").addEventListener('click', event =>{
    userClicked = 4;
});

document.getElementById("hero-five").addEventListener('click', event =>{
    userClicked = 5;
});





function modifyAnswerImage() {
    document.getElementById("hero-answer").src = HeroImages[userClicked-1];
    document.getElementById("hero-drag-description").style.display = "none";
}

function modifyVillainImage(){
    document.getElementById("villain-image").src = VillainsImages[currentVillain];
}

function modifyVillainText() {
    document.getElementById("villain-name").innerHTML = Villains[currentVillain][0];
    document.getElementById("villain-description").innerHTML = Villains[currentVillain][1];
    document.getElementById("villain-name").style.color= "red";
}

function modifyHeroText() {
    document.getElementById("hero-name").innerHTML = Heroes[userClicked-1][0];
    document.getElementById("hero-name").style.color = "orange";
    document.getElementById("hero-description").innerHTML = Heroes[userClicked-1][1];
    document.getElementById('combat-image').src = "ezgif.gif";
    document.getElementById('running-fast-image').src = "3frame.gif";
    document.getElementById("hero-answer").style.display = "initial";
}

function clearHeroTextAndAnswer(){
    document.getElementById("hero-name").innerHTML = "";
    document.getElementById("hero-description").innerHTML = "";
    document.getElementById("hero-answer").src = "";
    document.getElementById("hero-answer").style.display = "none";
    document.getElementById('combat-image').src = "white.png";
    document.getElementById('running-fast-image').src = "white.png";
    document.getElementById("hero-drag-description").style.display = "initial";
}

function determineVictory(){
    if ((userClicked - 1) == currentVillain)
        return true;
    return false;
}

function updateVictoryDefeatText(){
    if (determineVictory()){
        document.getElementById("victory-defeat-prompt").innerHTML = `${Heroes[userClicked-1][0]} has saved the day against ${Villains[currentVillain][0]}`;
        document.getElementById("victory-defeat-prompt").style.color= "#8DFD6C";
    }
    else{
        document.getElementById("victory-defeat-prompt").innerHTML = `${Heroes[userClicked-1][0]} wasn't a good hero to beat ${Villains[currentVillain][0]}. Oh no! Who will defeat ${Villains[currentVillain][0]} now?`;
        document.getElementById("victory-defeat-prompt").style.color="red";
    }
}

function clearVictoryDefeatText(){
    document.getElementById("victory-defeat-prompt").innerHTML = "";
}


function reroll(){
    let prevVillain = currentVillain;
    while (prevVillain === currentVillain){
        currentVillain = Math.floor(Math.random() * 5);
    }
    modifyVillainText();
    modifyVillainImage();
    clearVictoryDefeatText();
}

const divs = document.querySelectorAll('.hero-img');

divs.forEach(el => el.addEventListener('click', event => {
    modifyAnswerImage();
    modifyHeroText();
    updateVictoryDefeatText();
}));

  

  document.querySelector("#victory-or-defeat-bottom-box").addEventListener('click', function(){
    clearHeroTextAndAnswer();
    reroll();
  });


function main(){
    clearHeroTextAndAnswer()
    modifyVillainText();
    modifyVillainImage();
    setHeroAnswers();
}

main();