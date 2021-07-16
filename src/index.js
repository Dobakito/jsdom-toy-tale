let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
        addToy = !addToy;
        if (addToy) {
          toyFormContainer.style.display = "block";
        } else {
          toyFormContainer.style.display = "none";
        }
      });
    });

function getToysData(){
  fetch('http://localhost:3000/toys')
    .then(resp => resp.json())
    .then(toysData => {
      toysData.forEach(toy => renderToyCards(toy))
  })
}
function renderToyCards(data){
  let toyCollect = document.querySelector('#toy-collection')
  let card = document.createElement('div')
    card.classList.add('card')
    toyCollect.append(card)

  let h2 = document.createElement('h2')
    h2.innerText = data.name

  let img = document.createElement('img')
    img.classList.add('toy-avatar')
    img.src = data.image

  let p = document.createElement('p')
    p.innerText = `${data.likes} likes`

  let button = document.createElement('button')
    button.classList.add('like-btn')
    button.innerText = `like`
  card.append(h2, img, p, button)
}

getToysData()
