var getHTML = require('../httpFunctions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function print1337 (html) {
  let newHtml = '';
  for (i = 0; i < html.length; i++) {
    if (html[i] === 'c' && html[i+1] === 'k') {
      newHtml += 'x';
      i ++;
    } else if (html[i] === 'e' && html[i+1] === 'r') {
      newHtml += '0r';
      i ++;
    } else if (html[i] === 'y' && html[i+1] === 'o' && html[i+2] === 'u') {
      newHtml += 'j00';
      i += 2;
    } else {
      newHtml += html[i];
    };
  };
  newHtml = replace(newHtml, 'a', '4');
  newHtml = replace(newHtml, 'e', '3');
  newHtml = replace(newHtml, 'l', '1');
  newHtml = replace(newHtml, 'o', '0');
  newHtml = replace(newHtml, 's', '5');
  newHtml = replace(newHtml, 't', '7');
  console.log(newHtml);
};

function replace(string, char, newChar) {
  let newString = '';
  for (i = 0; i < string.length; i++) {
    if (string[i] === char) {
      newString += newChar;
    } else {
      newString += string[i];
    };
  };
  return newString;
};

getHTML(requestOptions, print1337);