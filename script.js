const objectnameCardTemplate = document.querySelector("[data-objectname-template]")
const objectnameCardContainer = document.querySelector("[data-objectname-cards-container")
const searchInput = document.querySelector("[data-search]")

let objectnames = []

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  objectnames.forEach(objectname => {
    const isShown = objectname.attribute1.toLowerCase().includes(value) || objectname.attribute2.toLowerCase().includes(value)
    objectname.element.classList.toggle("hide", !isShown)
  })
})

fetch("")
.then(data =>{
  objectnames = data.map(objectname => {
  const card = objectnameCardTemplate.content.cloneNode(true).children[0]
  const header = card.querySelector("[data-header]")
  const body = card.querySelector("[data-body]")
  header.textContent = objectname.attribute1
  body.textContent = objectname.attribute2
  objectnameCardContainer.append(card)
  return { attribute1: objectname.attribute1, attribute2: objectname.attribute2, element: card}
  })
})
