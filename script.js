const counter = document.getElementById("count");
const butminus = document.querySelector(".minus");
const butplus = document.querySelector(".plus");
const input = document.querySelector('#input')
const reset = document.querySelector('.buttonreset')

butminus.addEventListener("click", () => {
  const update = parseInt(counter.innerText);
  console.log(update);
  counter.innerText = update - parseInt(input.value);
});

butplus.addEventListener("click", () => {
    const update = parseInt(counter.innerText);
    console.log(update);
  counter.innerText = update + parseInt(input.value)
});


reset.addEventListener('click' , () => {
    counter.innerText = 0
    input.value = 1
})