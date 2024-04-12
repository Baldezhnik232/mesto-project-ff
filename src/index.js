import { initialCards } from './cards';
import './pages/index.css';
console.log(require('./images/avatar.jpg'));

const images = importAll(require.context('./images', false, /\.(png|svg|jpe?g|gif)$/));
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

function importAll(r) {
  return r.keys().map(r);
}

function openModal(modal) {
  modal.classList.add('popup_opened'); 
}


function closeModal(modal) {
  modal.classList.remove('popup_opened'); 
}


const editModal = document.querySelector('.popup_type_edit');
const newCardModal = document.querySelector('.popup_type_new-card');
const imageModal = document.querySelector('.popup_type_image');

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

const closeButtons = document.querySelectorAll('.popup__close');

editButton.addEventListener('click', () => openModal(editModal));
addButton.addEventListener('click', () => openModal(newCardModal));

closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.popup'); 
    closeModal(modal);
  });
});


document.querySelectorAll('.popup').forEach(popup => {
  popup.addEventListener('click', (event) => {
    if (event.target === popup) {
      closeModal(popup);
    }
  });
});


document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    document.querySelectorAll('.popup_opened').forEach((popup) => {
      closeModal(popup);
    });
  }
});

