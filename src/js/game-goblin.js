function changePosition() {
  const position = [...document.querySelectorAll('.cell')];
  const goblin = document.querySelector('.goblin');
  const posGoblin = position.indexOf(goblin);
  const posRandom = Math.floor(Math.random() * position.length);
  if (posGoblin !== posRandom) {
    position[posGoblin].classList.remove('goblin');
    position[posRandom].classList.add('goblin');
  }
}

export default function Game() {
  const position = [...document.querySelectorAll('.cell')];
  const posRandom = Math.floor(Math.random() * position.length);
  position[posRandom].classList.add('goblin');
  setInterval(changePosition, 2000, position);
}
