function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  const expression = document.getElementById('display').value;
  
  try {
    const result = eval(expression);
    if (isNaN(result) || !isFinite(result)) {
      throw new Error('Erro: Expressão inválida!');
    }
    document.getElementById('display').value = result;
  } catch (error) {
    document.getElementById('display').value = 'Erro: Expressão inválida!';
  }
}

function animateDisplay() {
  document.getElementById('display').classList.add('fade-out')
}
function removeAnimation() {
  document.getElementById('display').classList.remove('fade-out')
}

function updateDisplay() {
  const display = document.getElementById('display')
  display.textContent = newValue;
  // ativar a transicao no display
  display.style.transform = 'scale(1.1)';
  // definir um tempo limite para remover a classe de transicao
  setTimeout(() => {
    display.style.transform = 'scale(1)';
  }, 300)
}