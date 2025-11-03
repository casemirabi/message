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
    });
  });
});
