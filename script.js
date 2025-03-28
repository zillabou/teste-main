function mostrarMensagem() {
    const mensagemCompleta = `
  Sabe quando alguém chega com uma energia tão boa que só de lembrar o dia já fica mais leve? Então... é você.

Arianíssimo, forte, espontâneo, cheio de presença. É impossível não notar você — seja dançando com aquele sorriso contagiante ou pilotando sua moto como se a vida fosse uma aventura (e, com você, ela realmente é).

Além de bonito (e você sabe disso, né?), é vaidoso na medida certa — do tipo que cuida de si sem perder o charme natural. E ainda me arranca risos do nada, como se tivesse esse dom. 

Sem falar que você é o mestre em encaçapar a bola branca na sinuca (adora perder pra mim 😅) e ainda segura o player 1 nos jogos como ninguém.

Essa página é só um jeitinho carinhoso — e talvez um pouco tímido — de dizer: eu gosto de você. Do seu jeito agitado, do seu alto astral, e dessa vibe única que só você tem.

Enfim... que você tenha muitos anos incríveis pela frente, e que realize tudo o que seu coração deseja. 💙😄

P.S.: Se você sorriu lendo isso... missão cumprida. Agora aproveita sua música favorita do momento. XOXO
`;
  
    const elemento = document.getElementById("mensagem");
    const botao = document.querySelector("button");
  
    // Esconde o botão
    botao.style.display = "none";
  
    // Toca a música
    const audio = document.getElementById("player");
    audio.volume = 0.8;
    audio.play().catch(err => {
      console.warn("Autoplay bloqueado, vai precisar de interação.", err);
    });
  
    // Efeito digitando
    let index = 0;
    elemento.innerHTML = "";
    const intervalo = setInterval(() => {
      elemento.innerHTML += mensagemCompleta[index];
      index++;
      if (index === mensagemCompleta.length) clearInterval(intervalo);
    }, 50);
  }
  
  const emojis = ["🎂", "🎈", "🎉", "🎁", "🕯️", "🍰", "🎊"];
  const emojiContainer = document.getElementById("emojiFesta");
  
  function criarEmoji() {
    const emoji = document.createElement("span");
    emoji.classList.add("emoji-flutuante");
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = `${Math.random() * 100}%`;
    emoji.style.fontSize = `${2 + Math.random() * 2}rem`;
    emojiContainer.appendChild(emoji);
  
    setTimeout(() => {
      emoji.remove();
    }, 6000);
  }
  
  setInterval(criarEmoji, 800);
  
  const fotos = [
    "assets/1.jpeg",
    "assets/2.jpeg",
    "assets/3.jpeg",
    "assets/4.jpeg",
    "assets/5.jpeg",
    "assets/6.jpeg",
    "assets/7.jpeg",
    "assets/8.jpeg",
    "assets/9.jpeg",
    "assets/10.jpeg",
    "assets/11.jpeg",
    "assets/12.jpeg",
    "assets/13.jpeg",
    "assets/14.jpeg",
    "assets/15.jpeg",
    "assets/16.jpeg",
    "assets/17.jpeg",
    "assets/18.jpeg",
    "assets/19.jpeg",
    "assets/20.jpeg",
    "assets/21.jpeg",
    "assets/22.jpeg",
   
    
  ];
  
  const fotoContainer = document.getElementById("fotosDinamicas");
  
  function criarFoto() {
    const foto = document.createElement("img");
    foto.classList.add("foto-flutuante");
    foto.src = fotos[Math.floor(Math.random() * fotos.length)];
    foto.style.left = `${Math.random() * 100}%`;
    foto.style.width = `${80 + Math.random() * 40}px`;
    foto.style.height = foto.style.width;
    fotoContainer.appendChild(foto);
    setTimeout(() => foto.remove(), 10000);
  }
  
  setInterval(criarFoto, 1500);
  