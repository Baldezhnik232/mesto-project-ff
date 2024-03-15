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
    deleteButton.addEventListener('click', handleDelete);
    return newCard;
}


function handleDelete(event) {
  const card = event.target.closest('.card');
  card.remove();
}

initialCards.forEach((cardData) => {
  const cardElement = createCard(cardData, handleDelete);
  document.querySelector('.places__list').appendChild(cardElement);
});

