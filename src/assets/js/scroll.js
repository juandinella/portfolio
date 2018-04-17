const scrollTo = (element) => {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop
  });
}

document.getElementById('scroll').addEventListener('click', () => {
  scrollTo(document.getElementById('works'));
});
