const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? '×' : '☰';
  });
}
const form = document.querySelector('#contactForm');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent('Lời nhắn từ ' + data.get('name'));
    const body = encodeURIComponent(
      'Tên: ' + data.get('name') + '\nEmail: ' + data.get('email') +
      '\n\nLời nhắn:\n' + data.get('message')
    );
    // Thay email bên dưới bằng địa chỉ email thật của bạn.
    window.location.href = `mailto:YOUR_EMAIL@example.com?subject=${subject}&body=${body}`;
  });
}
