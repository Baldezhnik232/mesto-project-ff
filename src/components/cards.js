

export const initialCards = [
    {
      name: "Архыз",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Челябинская область",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
      name: "Иваново",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
      name: "Камчатка",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
      name: "Холмогорский район",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
      name: "Байкал",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    }
];


export function createCard(data, handleDelete, handleLike, handleCardClick) {
  const template = document.querySelector('#card-template').content.querySelector('.card');
  const newCard = template.cloneNode(true);

  const cardImage = newCard.querySelector('.card__image');
  cardImage.src = data.link;
  cardImage.alt = data.name;
  newCard.querySelector('.card__title').textContent = data.name;
  
  const deleteButton = newCard.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', () => handleDelete(newCard));
  
  const likeButton = newCard.querySelector('.card__like-button');
  likeButton.addEventListener('click', () => handleLike(likeButton));
  
  cardImage.addEventListener('click', () => handleCardClick(data.link, data.name));
  
  return newCard;
}

export function handleDelete(card) {
  card.remove();
}

export function toggleLikeButton(likeButton) {
  likeButton.classList.toggle('card__like-button_is-active');
}



