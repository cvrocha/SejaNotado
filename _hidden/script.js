// Timer de contagem regressiva
function updateCountdown() {
  const now = new Date().getTime();

  // Data inicial e período de reinício
  const startDate = new Date();
  startDate.setHours(0, 0, 0, 0); // Reset no início do dia
  const countdownPeriod = 12 * 24 * 60 * 60 * 1000; // 12 dias em milissegundos

  // Calcula a data final do ciclo atual
  const timeElapsed = now - startDate.getTime();
  const cyclesElapsed = Math.floor(timeElapsed / countdownPeriod);
  const nextCycleEnd = startDate.getTime() + (cyclesElapsed + 1) * countdownPeriod;

  const distance = nextCycleEnd - now;

  // Calcula os valores de tempo restantes
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Exibe o tempo restante no elemento HTML
  document.getElementById('countdown').textContent =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // Caso o timer chegue a 0, ele reinicia automaticamente (implementado pelo cálculo acima)
  
  // Atualiza os elementos HTML com os valores calculados
  document.getElementById('days').textContent = days < 10 ? `0${days}` : days;
  document.getElementById('hours').textContent = hours < 10 ? `0${hours}` : hours;
  document.getElementById('minutes').textContent = minutes < 10 ? `0${minutes}` : minutes;
  document.getElementById('seconds').textContent = seconds < 10 ? `0${seconds}` : seconds;
}

// Atualiza o timer a cada segundo
setInterval(updateCountdown, 1000);
updateCountdown(); // Primeira atualização imediata


// Adicionar funcionalidade para abrir e fechar perguntas
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const faqItem = question.parentElement;
    faqItem.classList.toggle('active');
  });
});
