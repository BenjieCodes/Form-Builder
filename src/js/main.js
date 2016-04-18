import $ from 'jquery';

var url = 'http://json-data.herokuapp.com/forms';
//text input


function input (obj) {
  return `
  <div class="formElement" id="${obj.id}">
  <input type="${obj.type}" placeholder="${obj.label}">
  <i class ="fa=${obj.icon}"></i>
  </div>
  `;
}

import $ from 'jquery';
var url = 'http://json-data.herokuapp.com/forms';
//text input
function inputText (obj) {
  return `
  <div class="formElement" id="${obj.id}">
  <input type="${obj.type}" placeholder="${obj.label}">
  <i class ="fa=${obj.icon}"></i>
  </div>
  `;
}

function buildForm (dataArr) {
dataArr.forEach(function (field){
  var html = inputText (field);
  formArea.append(html);
});


var dataRequest = $.getJSON(url);
dataRequest.then(function (response) {
});
