
import { propertyOf } from 'lodash';
import { initialCards } from './components/cards.js';
import './pages/index.css';


import {createCard, handleDelete, toggleLikeButton} from './components/cards.js'

import { popup, openPopupButton, closePopupButton} from './components/modal.js'

import {openPopup, closePopup} from './components/modal.js'

import{popupCard, openNewPlace, closeNewPlace} from './components/modal.js'

import {openPopupPlace, closePopupPlace} from './components/modal.js'


const template = document.querySelector('#card-template');
const placesList = document.querySelector('.places__list');
const profileImage = document.querySelector('.profile__image');
profileImage.style.backgroundImage = `url(${require('./images/avatar.jpg')})`;


initialCards.forEach((cardData) => {
  const cardElement = createCard(cardData, handleDelete, toggleLikeButton, handleCardClick);
  placesList.appendChild(cardElement);
});



function handleCardClick(imageLink, imageTitle) {
  const imageModal = document.querySelector('.popup_type_image'); 
  const modalImage = imageModal.querySelector('.popup__image'); 
  const modalCaption = imageModal.querySelector('.popup__caption'); 
  const closeButton = imageModal.querySelector('.popup__close');
  
  modalImage.src = imageLink;
  modalImage.alt = imageTitle;
  modalCaption.textContent = imageTitle;

  imageModal.classList.add('popup_is-opened'); 
  closeButton.addEventListener('click', closeImagePopup);
}
function closeImagePopup() {
  const imageModal = document.querySelector('.popup_type_image'); 
  imageModal.classList.remove('popup_is-opened');
}

openPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);



const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const nameInput = document.querySelector('.popup__input_type_name');

const descriptionInput = document.querySelector('.popup__input_type_description');
nameInput.value = profileName.textContent;
descriptionInput.value = profileDescription.textContent;

const formElement = document.querySelector('.popup__form[name="edit-profile"]');

function handleFormSubmit(evt) {
    evt.preventDefault(); 
    
    const nameValue = nameInput.value;
    const descriptionValue = descriptionInput.value;

    profileName.textContent = nameValue;
    profileDescription.textContent = descriptionValue;
    closePopup();
}

formElement.addEventListener('submit', handleFormSubmit);

openNewPlace.addEventListener('click', openPopupPlace);
closeNewPlace.addEventListener('click', closePopupPlace);

const newCardForm = document.querySelector('.popup__form[name="new-place"]');

newCardForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

    const placeName = newCardForm.querySelector('.popup__input_type_card-name').value;

    const placeLink = newCardForm.querySelector('.popup__input_type_url').value

    const cardData = { name: placeName, link: placeLink };
    const cardElement = createCard(cardData, handleDelete, toggleLikeButton, handleCardClick );

    placesList.prepend(cardElement);


    newCardForm.reset();
    closePopupPlace();
});






