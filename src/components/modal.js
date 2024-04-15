export const popup = document.querySelector('.popup_type_edit'); 
export const openPopupButton = document.querySelector('.profile__edit-button'); 
export const closePopupButton = document.querySelector('.popup__close'); 

export function openPopup() {
  popup.style.display = "flex";
  popup.style.visibility = 'visible';
  popup.style.opacity = "1";
  popup.style.transition = 'all 0.3s ease-in-out'
}

export function closePopup() {
  popup.style.visibility = 'hidden';
  popup.style.opacity = "0";
  popup.style.transition = "all 0.3 s ease-in-out"
}



popup.addEventListener('click', (event) => {
  if (event.target.classList.contains('popup')) {
    closePopup();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && popup.classList.contains('popup')) {
    closePopup();
  }
});



export const popupCard = document.querySelector('.popup_type_new-card');
export const openNewPlace = document.querySelector('.profile__add-button');
export const closeNewPlace = popupCard.querySelector('.popup__close');
 

export function openPopupPlace() {
    popupCard.style.display = "flex";
    popupCard.style.visibility = 'visible';
    popupCard.style.opacity = "1";
    popupCard.style.transition = 'all 0.3s ease-in-out'
}

export function closePopupPlace() {
   popupCard.style.visibility = 'hidden';
   popupCard.style.opacity = "0";
   popupCard.style.transition = "unset"
}