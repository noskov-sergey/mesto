let redact = document.querySelector('.profile__redact_btn');
let popup = document.querySelector('.popup');
let popopclose = document.querySelector('.popup__btn_action_close')

function OpenPopup() {
    popup.classList.add('popup_opened');
};

function ClosePopup() {
    popup.classList.remove('popup_opened');
};

redact.addEventListener('click', OpenPopup);
popopclose.addEventListener('click', ClosePopup);
///////////////////////////////////////////////////

let formElement = document.querySelector('.popup__form')

function formSubmitHandler(evt) {
    evt.preventDefault();
    let nameInput = formElement.querySelector('.popup__item_type_name');
    let jobInput = formElement.querySelector('.popup__item_type_info');
    let oldname = document.querySelector('.profile__name');
    let oldwork = document.querySelector('.profile__profession');
    oldname.textContent = nameInput.value;
    oldwork.textContent = jobInput.value;
    popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler);