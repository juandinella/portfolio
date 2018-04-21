function toggleCanvas (element, className) {
  if (!element || !className) {
    return;
  }

  let classString = element.className
  let nameIndex = classString.indexOf(className);
  if (nameIndex === -1) {
    classString += ' ' + className;
  } else {
    classString = classString.substr(0, nameIndex) + classString.substr(nameIndex + className.length);
  }
  element.className = classString;
}

const toggle = document.getElementById('magic');
const text = document.getElementById('magic-text');

toggle.addEventListener('click', function () {
  toggleCanvas(document.getElementById('canvas'), 'is-visible');
  toggleCanvas(document.querySelector('body'), 'magic');
  if (text.getAttribute('data-text-swap') === text.innerHTML) {
    text.innerHTML = text.getAttribute('data-text-original');
  } else {
    text.setAttribute('data-text-original', text.innerHTML);
    text.innerHTML = text.getAttribute('data-text-swap');
  }
}, false);

export default toggleCanvas
