var dig1 = {
    nome:"Agumon",        
    imagem:"image/Agumon.gif",
    audio: "sound/brave-heart.mp3",
    atributos:{
      Ataque: 71,
      Defesa: 67,
      Especial: 88
    }
  }
  var dig2 = {
    nome:"Gabumon",
    imagem:"image/Gabumon.gif",
    audio: "sound/brave-heart.mp3",
    atributos:{
      Ataque: 79,
      Defesa: 48,
      Especial: 85
    }
  }
  var dig3 = {
    nome:"Patamon",
    imagem:"image/Patamon.gif",
    audio: "sound/brave-heart.mp3",
    atributos:{
      Ataque: 66,
      Defesa: 74,
      Especial: 91
    }
  }
  var dig4 = {
    nome:"Piyomon",
    imagem:"image/Piyomon.gif",
    audio: "sound/brave-heart.mp3",
    atributos:{
       Ataque: 59,
       Defesa: 86,
       Especial: 65
    }
  }
  
  var dig5 = {
    nome:"Tentomon",
    imagem:"image/Tentomon.gif",
    audio: "sound/brave-heart.mp3",
    atributos:{
       Ataque: 43,
       Defesa: 72,
       Especial: 58
    }
  }
  
  var dig6 = {
    nome:"Palmon",
    imagem:"image/Palmon.gif",
    audio: "sound/brave-heart.mp3",
    atributos:{
       Ataque: 55,
       Defesa: 47,
       Especial: 70
    }
  }
  
  var dig7 = {
    nome:"Gamamon",
    imagem:"image/Gamamon.gif",
    audio: "sound/brave-heart.mp3",
    atributos:{
       Ataque: 49,
       Defesa: 80,
       Especial: 67
    }
  }
  
  const youwin = new Audio();
  youwin.src="sound/youWin.mp3";
  
  const youlose = new Audio();
  youlose.src="sound/youLose.mp3";
  
  const empatou = new Audio();
  empatou.src="sound/Empate.mp3";
  
  
  var cartaMaquina
  var cartaJogador
  var cartas = [dig1, dig2, dig3, dig4, dig5, dig6, dig7];
  
  function sortearCarta() {
      const somCard = new Audio();
    
      var numeroCartaMaquina = parseInt(Math.random() * 7)
      cartaMaquina = cartas[numeroCartaMaquina]
  
      var numeroCartaJogador = parseInt(Math.random() * 7)
      while (numeroCartaJogador == numeroCartaMaquina) {
          numeroCartaJogador = parseInt(Math.random() * 7)
      }
      cartaJogador = cartas[numeroCartaJogador]
    
      somCard.src = cartaJogador.audio;
      somCard.play();
  
      document.getElementById('btnSortear').disabled = true
      document.getElementById('btnJogar').disabled = false
    
    exibeCartaJogador()
    
  }
    
  function exibeCartaJogador(){
    var divCartaJogador = document.getElementById('carta-jogador')
    var moldura = '<img src="image/modeloCarta.png" style=" width: inherit; height: inherit; position: absolute;">';
    
    divCartaJogador.style.backgroundImage=`url(${cartaJogador.imagem})`
    
    var nome = `<p class="carta-subtitle">${cartaJogador.nome} </p>`
    var opcoesTexto = ""
    
    for (var atributo in cartaJogador.atributos) {
          opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" +atributo + ": " + cartaJogador.atributos[atributo] + " pontos" + "<br>"
      }
    
     var html = "<div id='opcoes' class='carta-status'>"
    
    divCartaJogador.innerHTML = moldura+nome+html+opcoesTexto+'</div>'  
  }
  
  function obtemAtributoSelecionado() {
      var radioAtributo = document.getElementsByName('atributo')
      for (var i = 0; i < radioAtributo.length; i++) {
          if (radioAtributo[i].checked) {
              return radioAtributo[i].value
          }
      }
  }
  
  function jogar() {
      var divResultado = document.getElementById("resultado")
      var atributoSelecionado = obtemAtributoSelecionado()
  
      if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
          htmlResultado = '<p class= "resultado-final">Venceu</p>'
      youwin.play();
      } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
          htmlResultado = '<p class= "resultado-final">Perdeu</p>'
        youlose.play();
      } else {
          htmlResultado = '<p class= "resultado-final">Empatou</p>'
        empatou.play();
      }
     divResultado.innerHTML = htmlResultado
     exibeCartaMaquina()
  }
  
  function exibeCartaMaquina(){
    
    var divCartaMaquina = document.getElementById('carta-maquina')
    var moldura = '<img src="image/modeloCarta.png" style=" width: inherit; height: inherit; position: absolute;">';
    // Não foi preciso utilizar o innerHTML aqui pois foi realizada uma manipulação direta no CSS
    divCartaMaquina.style.backgroundImage=`url(${cartaMaquina.imagem})`
    //  Aqui já irá ser preciso o uso do innerHTML pois, o JS está realizando uma manipulação no HTML
    var nome = `<p class="carta-subtitle"> ${cartaMaquina.nome} </p>`
    var opcoesTexto = ""
    
    for (var atributo in cartaMaquina.atributos) {
          opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + ": " + cartaMaquina.atributos[atributo] + " pontos" + "</p>"
      }
    
     var html = "<div id='opcoes' class='carta-status --spacing'>"
    
    // divCartaJogador.innerHTML += nome
    divCartaMaquina.innerHTML = moldura+nome+html+opcoesTexto+'</div>'  
  
  }