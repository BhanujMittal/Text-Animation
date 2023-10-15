let text = document.getElementsByClassName('sec-text')[0]
const textLoad = () => {
  setTimeout(() => {
    text.textContent = 'Everything'
  }, 0);
  
  setTimeout(() => {
    text.textContent = 'Love'
  }, 2000);

  setTimeout(() => {
    text.textContent = 'Addiction'
  }, 4000);

  setTimeout(() => {
    text.textContent = 'Passion'
  }, 6000);
}

textLoad()
setInterval(textLoad, 8000)