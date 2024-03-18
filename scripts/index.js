// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу


const template = document.querySelector('#card-template');
const placesList = document.querySelector('.places__list');
const templateElement = document.querySelector('#card-template').content.querySelector('.card');

function createCard(data, handleDelete) {
  const newCard = templateElement.cloneNode(true);

  const cardImage = newCard.querySelector('.card__image'); 
  cardImage.src = data.link;
  cardImage.alt = data.name;
  newCard.querySelector('.card__title').textContent = data.name;
  
  const deleteButton = newCard.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', () => handleDelete(newCard));
  
  return newCard;
}

function handleDelete(card) {
  card.remove();
}

initialCards.forEach((cardData) => {
  const cardElement = createCard(cardData, handleDelete);
  placesList.appendChild(cardElement);
});





