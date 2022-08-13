
var hourlyContainer = document.querySelector('#hourlyoption');
var hiringoption = document.querySelector('#usr_hiring');
var questionoption = document.querySelector('#usr_question');
var commentoption = document.querySelector('#usr_comment');

/*
var form = document.querySelector('#contactform');
var hourlyContainer = document.querySelector('#hourlyoption');
var type;
var typeOptions = Array.from(form.name);
typeOptions.forEach(function(selection) {
    if (selection.checked) {
        type = selection.value;
    }
});
if (type == 'hiring') {
    hourlyContainer.removeAttribute('hidden');
}
*/

hiringoption.onclick = function() {
    hourlyContainer.removeAttribute('hidden');
}

questionoption.onclick = function() {
    hourlyContainer.setAttribute('hidden', true);
}

commentoption.onclick = function() {
    hourlyContainer.setAttribute('hidden', true);
}
