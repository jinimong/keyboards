const modal = document.querySelector('.modal');
const result = document.querySelector('.modal .title');

const typing = typingChecker();

const makeResult = (data) => {
  result.innerText = data;
  modal.classList.remove('hidden');
  document.addEventListener('keydown', handleModal);
};

const handleModal = (event) => {
  event.preventDefault();
  if (event.code === 'Enter') {
    modal.classList.add('hidden');
    document.removeEventListener('keydown', handleModal);
    typing.initialize(makeResult);
  }
};

document.addEventListener('keydown', handleModal);
