class Player {
  constructor(name, type) {
    console.log("Player this:", this);
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`My name is ${this.name} and I'm a ${this.type} player. ✨`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type); //parent Class's constructor()
    console.log("Wizard this:", this);
  }
  play() {
    console.log(`Weeee! I'm a ${this.type} 🪄`);
  }
}

const wizard1 = new Wizard("Skyy", "Healer");
const wizard2 = new Wizard("Soumadip", "Dark-Magic");

wizard1.play();
wizard1.introduce();

/*
Player this: Wizard {}
Wizard this: Wizard { name: 'Skyy', type: 'Healer' }
Player this: Wizard {}
Wizard this: Wizard { name: 'Soumadip', type: 'Dark-Magic' }
Weeee! I'm a Healer 🪄
My name is Skyy and I'm a Healer player. ✨
*/

// Older Codebases - Prototypal Inheritance
// Modern Codebases - class keyword
