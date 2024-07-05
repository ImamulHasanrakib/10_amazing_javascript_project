const container = document.querySelector('.box-shadow-container');
const message = document.querySelector('.message');
const opacities = [
  '0.05',
  '0.10',
  '0.15',
  '0.20',
  '0.25',
  '0.30',
  '0.35',
  '0.40',
];
for (let i = 1; i < 100; i++) {
  const x = getRandomInt(-1, 1);
  const y = getRandomInt(-1, 1);
  const blur = getRandomInt(0, 30);
  const spread = getRandomInt(0, 5);
  const opacity = opacities[getRandomInt(0, opacities.length - 1)];
  const boxShadow = `${x}px ${y}px ${blur}px ${spread}px rgba(54, 54, 54, ${opacity})`;

  const div = document.createElement('div');
  const span = document.createElement('span');
  span.innerText = `Click to copy box-shadow #${i}`;
  div.classList.add('box-shadow');
  div.innerText = `#${i}`;
  div.style.boxShadow = boxShadow;

  div.addEventListener('click', function () {
    copyToClipboard(`box-shadow: ${boxShadow}`);
    message.classList.add('show');
    message.innerText = `box-shadow: ${boxShadow}`;
    setTimeout(() => {
      message.classList.remove('show');
    }, 4000);
  });
  div.appendChild(span);
  container.appendChild(div);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function copyToClipboard(text) {
  const el = document.createElement('textarea');
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}
