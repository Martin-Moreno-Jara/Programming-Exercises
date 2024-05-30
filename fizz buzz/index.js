const fizzbuzzDiv = document.getElementById("fizzBuzz");

const createP = (content) => {
  let element = document.createElement("p");
  element.innerHTML = content;
  fizzbuzzDiv.appendChild(element);
};

const fizzBuzz = (max) => {
  for (let i = 1; i <= max; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log(`${i} FizzBuzz`);
      createP(`${i} FizzBuzz`);
    } else if (i % 3 == 0) {
      console.log(`${i} Fizz`);
      createP(`${i} Fizz`);
    } else if (i % 5 == 0) {
      console.log(`${i} Buzz`);
      createP(`${i} Buzz`);
    }
  }
};

fizzBuzz(100);
