const changeImage = document.getElementById('change-image');
const healthy = 'healthy';
const sick = 'sick';
const image = document.getElementById('nature-img');

function healthySickNature() {
  if (changeImage.classList.contains(healthy)) {
    changeImage.classList.remove(healthy);
    image.src = './img/arvore-morta.png';
    changeImage.textContent = 'Clique na imagem e faça sua escolha!';
  } else {
    changeImage.classList.add(healthy);
    image.src = './img/floresta.png';
    changeImage.textContent = 'Clique na imagem e faça sua escolha!';
  }
}

changeImage.addEventListener('click', healthySickNature);
image.addEventListener('click', healthySickNature);
