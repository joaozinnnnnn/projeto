function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode,adicionar a imagem light
    img.setAttribute("src", "./avatar-light.png")
    img.setAttribute(
      "alt",
      "fotot do João victor tocando bateria,com uma camiseta preta com um 100 dourado,com duas baquetas na mao,com uma bateria verde no fundo"
    )
  } else {
    //se tiver sem light mode,manter a imagem normal
    img.setAttribute("src", "./avatar.png.png")
    img.setAttribute(
      "alt",
      'Foto do João Victor tocando bateria,com camiseta preta com um 100 dourada, com o fundo de uma bateria verde."'
    )
  }
}
