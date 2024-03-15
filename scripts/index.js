// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу



function createCard(data) {
    const template = document.querySelector('#card-template');
    const newCard = template.content.cloneNode(true).querySelector('.places__item.card');

    newCard.querySelector('.card__image').src = data.link;
    newCard.querySelector('.card__image').alt = data.name;
    newCard.querySelector('.card__title').textContent = data.name;
  
    const deleteButton = newCard.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', function() {
    newCard.remove();  
  });

   return newCard;
}

function renderInitialCards() {
    const cardsContainer = document.querySelector('.places__list');
    initialCards.forEach((data) => {
    const cardElement = createCard(data);
    cardsContainer.append(cardElement);
  });
}

document.addEventListener('DOMContentLoaded', renderInitialCards);

