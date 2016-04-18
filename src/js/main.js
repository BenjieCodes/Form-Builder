import $ from 'jquery';

var url = 'http://json-data.herokuapp.com/forms';
//text input
var formInner = $('.formInner');

// Made a function template for the form inputs
function inputTemplate (obj) {
  return `
  <div class="formElement" id="${obj.id}">
  <input type="${obj.type}" placeholder="${obj.label}">
  <i class ="fa ${obj.icon}"></i>
  </div>
  `;
}


// Get the data from the URL
var dataRequest = $.getJSON(url);
dataRequest.then(function (response) {
// Made a variable for the data from the url
  var data = response;

// Made a function to grab data from each object
  data.forEach(function (object) {
// Made a variable to grab the function template
    var objectData = inputTemplate(object);
// Appended a function template onto the class '.forminner' for all the objects
    formInner.append(objectData);
  });


});
