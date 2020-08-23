const COL = document.querySelectorAll(".col-sm");
const INPUT_TARGET = document.querySelector(".textInputValue");
const LINEAR_SEARCH_BTN = document.querySelector(".linear");
const BINARY_SEARCH_BTN = document.querySelector(".binary");
const REASULT = document.querySelector(".result");
const ALL_VALUES_ARRAY = document.querySelectorAll(".value");
const ALL_INDEXES_ARRAY = document.querySelectorAll(".index");
const NUMBERS_ARRAY = [];

for (let i = 0; i < ALL_VALUES_ARRAY.length; i++) {
  const number = Math.floor(Math.random() * 1000);
  NUMBERS_ARRAY.push(number);
}

for (let j = 0; j < ALL_VALUES_ARRAY.length; j++) {
  NUMBERS_ARRAY.sort((a, b) => a - b);
  ALL_VALUES_ARRAY[j].textContent = NUMBERS_ARRAY[j];
  ALL_INDEXES_ARRAY[j].textContent = j;
}

const delay = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

const linearSearch = async (arr, value) => {
  const speed = document.querySelector(".textInputSpeed").value;
  LINEAR_SEARCH_BTN.disabled = true;
  INPUT_TARGET.disabled = true;
  if (value !== "" && speed !== "") {
    parseInt(speed);
    for (let i = 0; i < arr.length; i++) {
      const currentHTMLElement = arr[i];
      currentHTMLElement.classList.add("active");
      if (currentHTMLElement.textContent == value) {
        LINEAR_SEARCH_BTN.disabled = false;
        INPUT_TARGET.disabled = false;
        return (REASULT.innerHTML = "index of the target = " + i);
      }

      await delay(speed);
      currentHTMLElement.classList.remove("active");

      if (i === arr.length - 1) {
        REASULT.innerHTML = "Element not found = " + -1;
        LINEAR_SEARCH_BTN.disabled = false;
        INPUT_TARGET.disabled = false;
      }
    }
    currentHTMLElement.classList.remove("active");
  } else {
    alert("Enter all values");
  }
};

LINEAR_SEARCH_BTN.addEventListener("click", () => {
  for (let i = 0; i < ALL_VALUES_ARRAY.length; i++) {
    if (ALL_VALUES_ARRAY[i].classList.contains("active")) {
      ALL_VALUES_ARRAY[i].classList.remove("active");
    }
  }
  linearSearch(ALL_VALUES_ARRAY, INPUT_TARGET.value);
});
