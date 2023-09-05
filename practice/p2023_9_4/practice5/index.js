const duck = {
  name: "duck",
  sound: "quack",
};

/*
  const name = duck.name;
  const sound = duck.sound;
  */

// object destructing
// const {key 값 사용}
const { name, sound } = duck;

// key 값이 아니라 다른 변수를 사용하고 싶을때?
// const { name: newName, sound: newSound } = duck;

console.log("name", name);
console.log("sound", sound);

const animals = ["duck", "cat", "bear"];

/*
  const first = animals[0];
  const second = animals[1];
  const third = animals[2];
  */

// array destructing
const [first, second, third] = animals;

// const [one, two, three] = animals;

console.log("first", first);
console.log("second", second);
console.log("third", third);
