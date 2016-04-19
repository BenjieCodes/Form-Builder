import $ from 'jquery';

var url = 'http://json-data.herokuapp.com/forms';
//text input
var formInner = $('.formInner');

// Made a function template for the form inputs
function inputText (obj) {
  return `
  <div class="formElement" id="${obj.id}">
  <input type="${obj.type}" placeholder="${obj.label}">
  <i class ="fa ${obj.icon}"></i>
  </div>
  `;
}

// Made a function template for the form select
function inputSelect (obj) {

  var options = "";

  obj.options.forEach(function (language) {
    options += `<option value="${language.value}">${language.label}</option>
    `;
  })
  return `
  <div class="formElement" id="${obj.id}">
  <select>
    <option>${obj.label}...</option>
    ${options}
  </select>
  `;
}

// Made a function template for the form comment
function inputComment (obj) {
  return `
  <div class="formElement" id="${obj.id}">
  <textarea placeholder="${obj.label}"></textarea>
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

// Make an if statement to target the select
  if (object.type === "select") {
    var objectData = inputSelect(object);
  }
  else if (object.type === "textarea") {
    // Made a variable to grab the comment template function
    var objectData = inputComment(object);
  }
  else {
    // Made a variable to grab the text template function
    var objectData = inputText(object);
  }



    // var objectData = inputSelect(object);
// Appended a function template onto the class '.forminner' for all the objects
    formInner.append(objectData);

  });



// var languages = data[4];
// function languagechange () {
//   if (data.type = "select") {
//     return `<select>
//       <option>${languages}</option>
//     </select>`;
//   }
// }
//   formInner.append(languagechange);




});
