//get html references
const form = document.querySelector(".inputForm");
const inputString = document.querySelector(".inputString");
const result = document.querySelector(".result");

//create a function that accepts the passed string and count the vowels
function vowelCounter(str) {
  const vowels = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];

  let count = 0;
  str.split("").forEach((char) => {
    if (vowels.includes(char)) {
      count++;
    }
  });

  let html = `
  <p>
  The number of vowels in "${str}" is: ${count}
  </p>
  `;
  result.innerHTML = html;
}

//create a submit event
form.addEventListener("submit", (e) => {
  //prevent default
  e.preventDefault();

  const str = inputString.value;
  vowelCounter(str);
  form.reset();
});
