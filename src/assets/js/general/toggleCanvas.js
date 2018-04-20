function toggleCanvas (element, className) {
  if (!element || !className) {
    return;
  }

  var classString = element.className
  var nameIndex = classString.indexOf(className);
  if (nameIndex === -1) {
    classString += ' ' + className;
  } else {
    classString = classString.substr(0, nameIndex) + classString.substr(nameIndex + className.length);
  }
  element.className = classString;
}

document.getElementById('magic').addEventListener('click', function () {
  toggleCanvas(document.getElementById('canvas'), 'is-visible');
  toggleCanvas(document.querySelector('body'), 'magic');
});

export default toggleCanvas
