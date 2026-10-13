const modal = document.getElementById('loginModal');
const openButtons = [document.getElementById('openLoginTop'), document.getElementById('openLoginHero')];
const closeButton = document.getElementById('closeLogin');
const tabs = [...document.querySelectorAll('.tab')];
const nicknameField = document.getElementById('nicknameField');
const authSubmit = document.getElementById('authSubmit');
const formMessage = document.getElementById('formMessage');
let mode = 'login';

function openModal() {
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  formMessage.textContent = '';
}
function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = '';
}
openButtons.forEach(button => button.addEventListener('click', openModal));
closeButton.addEventListener('click', closeModal);
modal.addEventListener('click', event => { if (event.target === modal) closeModal(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !modal.hidden) closeModal(); });

tabs.forEach(tab => tab.addEventListener('click', () => {
  mode = tab.dataset.mode;
  tabs.forEach(item => item.classList.toggle('active', item === tab));
  nicknameField.hidden = mode !== 'register';
  nicknameField.querySelector('input').required = mode === 'register';
  authSubmit.innerHTML = mode === 'register' ? 'Создать аккаунт <span>↗</span>' : 'Войти <span>↗</span>';
  document.getElementById('loginTitle').textContent = mode === 'register' ? 'Создай свой аккаунт.' : 'С возвращением.';
  formMessage.textContent = '';
}));

document.getElementById('authForm').addEventListener('submit', event => {
  event.preventDefault();
  formMessage.textContent = 'Это демонстрационный макет: сервер авторизации ещё не подключён. Не вводи настоящие данные.';
});
document.getElementById('previewPlay').addEventListener('click', () => {
  alert('Это только превью интерфейса. Запуск Minecraft подключим в приложении-лаунчере.');
});
