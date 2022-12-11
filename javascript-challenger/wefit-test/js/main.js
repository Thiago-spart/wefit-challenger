const menu = document.querySelector('[aria-label="Vertical button group"]')

menu.className = "d-grid gap-3"

const header = document.querySelector('.jumbotron')

header.className += " d-flex justify-content-end flex-column align-items-end bg-secondary text-white"

header.lastElementChild.className = "btn btn-success btn-lg"

const secondCardButton = document.getElementsByClassName('card')[1].childNodes[3].lastElementChild

secondCardButton.className = "btn btn-success"

const list = document.querySelector('.list-group')

const fourthListItem = document.createElement("li")
const fifthListItem = document.createElement("li")

fourthListItem.innerText = "Quarto item"
fourthListItem.className = "list-group-item active"

fifthListItem.innerText = "quinto item"
fifthListItem.className = "list-group-item"


list.appendChild(fourthListItem)
list.appendChild(fifthListItem)

list.childNodes[1].className = "list-group-item"

console.log(
	document.querySelector('.list-group')
)