const sentences = [
  "The tears of a clown make my lipstick run, but my shower cap is still intact.",
  "You should never take advice from someone who thinks red paint dries quicker than blue paint.",
  "Although it wasn't a pot of gold, Nancy was still enthralled at what she found at the end of the rainbow.",
];

const msg = document.getElementById("sentence");
const typingSpace = document.getElementById("typingspace");
const btn = document.getElementById("btn");
let startTime, endTime;

const playgame = () => {
  let randomNumber = Math.floor(Math.random() * sentences.length);
  msg.innerText = sentences[randomNumber];
  let date = new Date();
  startTime = date.getTime();
  btn.innerText = "Done";
};

const endPlay = () => {
  let date = new Date();
  endTime = date.getTime();
  let totalTime = (endTime - startTime) / 1000;
  console.log(totalTime);
  let totalStr = typingSpace.value;
  let wordCount = wordCounter(totalStr);
  let speed = Math.round((wordCount / totalTime) * 60);
  console.log(speed);
  let finalmsg =
    "You typed " + wordCount + " words at " + speed + " words per minute.";
  msg.innerText = finalmsg;
};

const wordCounter = (str) => {
  let response = str.split(" ").length;
  console.log(response);
  return response;
};

btn.addEventListener("click", function () {
  // console.log(this);
  if (btn.innerText == "Start") {
    typingSpace.disabled = false;
    playgame();
  } else if (btn.innerText == "Done") {
    typingSpace.disabled = true;
    btn.innerText = "Start";
    endPlay();
  }
});

console.log("hi");
