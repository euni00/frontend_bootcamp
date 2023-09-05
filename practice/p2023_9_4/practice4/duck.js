class Animal {
  constructor(name, sound) {
    /* constructor 완성하기 */
    this.name = name;
    this.sound = sound;
  }

  explain() {
    console.log(`${this.name} says ${this.sound}`);
  }
}

const duck = new Animal("duck", "quack");

module.exports = duck;
