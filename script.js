function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Imagem de Bruno Gomes Martins Alves sorrindo em um dia ensolarado, com Sol ao fundo e uma camisa azul."
    )
  } else {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Imagem de Bruno Gomes Martins Alves e um amigo. Bruno está sorrindo com um palito de dentes na boca e seu amigo, com uma camiseta vermelha, com a mão levantada, fazendo um jóia."
    )
  }
}
