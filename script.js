const background = document.getElementById('background')

const password = document.getElementById('password')

password.addEventListener('input', (e) => {
  const input = e.target.value
  const lengh = input.length
  const blurLenght = 20 - lengh * 2

  background.style.filter = `blur(${blurLenght}px)`
})
