export const salutations = [
  "Hi",
  "Hello",
  "Hey there",
  "hi",
  "hello",
  "hey there",
];

const salutationsMod = salutations.slice(0, 3);

export const welcomeMessage = (username) => {
  return `${shuffle(salutationsMod)} ${username},\n\nHow may I help you?`;
};

export const unsupported_message = "I don't quite understand.";

// shuffle array
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array[0];
}

export const commands = [
  {
    command: "test",
    description: "Test command",
  },
  {
    command: "greetings",
    description: "Greetings command",
  },
];

export const getCommands = commands.map(commandObject => commandObject.command);
