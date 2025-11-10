function switchTheme() {
  document.body.classList.add('bg-dark')
  const navbar = document.getElementById('navbar')
  navbar.classList.remove('navbar-light', 'bg-light')
  navbar.classList.add('navbar-dark', 'bg-dark')
 
 const card = document.getElementsByClassName('card')
  card.classList.add('text-white', 'bg-dark', 'border-light ')
}