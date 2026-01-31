const input = document.querySelector('.input');
const submitBtn = document.querySelector('#submitBtn');
const results = document.querySelector('.results');

submitBtn.addEventListener('click', () => {
  let number = Number(input.value);
  results.textContent = '';
  if (!number) {
    results.textContent = 'invalid';
  }

  for (let i = 1; i <= 10; i++) {
    let line = document.createElement('p');
    line.textContent = `${number} * ${i} = ${number * i}`;
    results.appendChild(line);
  }
});
