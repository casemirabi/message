// ...existing code...
document.addEventListener('DOMContentLoaded', function() {
  const botao = document.getElementById('cliqueBotao');

  botao.addEventListener('click', function() {
    Swal.fire({
      title: '💖 Minha declaração pra você 💖',
      html: `
        <p style="text-align: center;">
          Desde que você chegou, tudo ficou mais bonito.<br>
          Cada risada sua é o meu som favorito, e cada momento ao seu lado é um pedacinho de paraíso.<br><br>
          O meu carinho por você cresce a cada dia que se passa!<br><br>
          Adoro todo o seu cuidado, e quero que saiba que tudo vai dar certo no tempo ideal.<br><br>
          Seu pai rico que vai te fazer herdeira não apareceu ainda, mas quem sabe em breve! 😄 OREMOS<br><br>
          Eu te amo com todo o meu coração, e se eu pudesse escolher de novo,<br>
          ainda escolheria você. Sempre você. ❤️
        </p>
      `,
      showConfirmButton: true,
      confirmButtonText: 'Te amo também 💕',
      background: '#fff3f3',
      color: '#51052bff',
      confirmButtonColor: '#ff69b4'
    })
    .then((result) => {
      if (result.isConfirmed) {
        // pega o popup do SweetAlert e cria corações a partir do centro dele
        const popup = document.querySelector('.swal2-popup');
        const rect = popup ? popup.getBoundingClientRect() : { left: window.innerWidth/2, top: window.innerHeight/2, width: 0, height: 0 };
        const cx = rect.left + (rect.width / 2);
        const cy = rect.top + (rect.height / 2);
        spawnHearts(cx, cy, 14); // quantidade mínima de mudanças no seu código
      }
    });
  });

  // adiciona estilos necessários (apenas uma vez)
  function ensureHeartStyles() {
    if (document.getElementById('hearts-style')) return;
    const style = document.createElement('style');
    style.id = 'hearts-style';
    style.textContent = `
      .heart{ position: fixed; pointer-events: none; user-select: none; font-size:26px;
        transform: translateY(0); transition: transform 1.2s cubic-bezier(.15,.9,.22,1), opacity 1.2s ease-out;
        will-change: transform, opacity; z-index:9999; opacity:1;}
      .heart.rise{ transform: translateY(-300px) translateX(var(--x,0px)) scale(var(--s,1)); opacity:0; }
    `;
    document.head.appendChild(style);
  }

  // cria vários corações
  function spawnHearts(x, y, count = 12) {
    ensureHeartStyles();
    for (let i = 0; i < count; i++) {
      createHeart(x + ((Math.random() * 60) - 30), y + ((Math.random() * 30) - 15));
    }
  }

  // cria um coração e anima
  function createHeart(x, y) {
    const heart = document.createElement('span');
    heart.className = 'heart';
    const emojis = ['💖','💗','💘','💕','❤'];
    heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    heart.style.setProperty('--x', ((Math.random() * 160) - 80) + 'px');
    heart.style.setProperty('--s', (0.8 + Math.random() * 1).toFixed(2));

    document.body.appendChild(heart);
    requestAnimationFrame(() => heart.classList.add('rise'));
    heart.addEventListener('transitionend', () => heart.remove());
  }
});
// ...existing code...