function getRandomGreeting() {
  var greetings = [
    "Beep boop! Are you a robot?",
    "Nijuru IS THE GOAT",
    "This website was too easy to make",
     "Computer Science is the best Subject",
     "Brawl Stars is the best game",
  ];
  var randomIndex = Math.floor(Math.random() * greetings.length);
  return greetings[randomIndex];
}

document.getElementById("subtitle").innerText = getRandomGreeting();
