const text =
  ""Hey there, Tanaaaz! 🌟 Just a little note to remind you how incredibly special you are to me. You're not just my best friend, you're my confidante, my partner-in-crime, and my source of endless joy! Here's to all the laughter, the adventures, and the countless memories we've shared—and to the many more yet to come! Thanks for being the amazing friend that you are. Sending you all the hugs and high-fives in the world!";

const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();
