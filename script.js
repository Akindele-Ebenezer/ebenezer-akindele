let saveButton = document.querySelector('#saveButton');
let deleteButton = document.querySelector('#deleteButton');
let textarea = document.querySelector('textarea').value;
let boldP = document.querySelector('.font:first-child');
let italicP = document.querySelector('.font:nth-child(2)');
let underlineP = document.querySelector('.font:nth-child(3)');
let boldBtn = document.querySelector('#right-div section .btn:first-child');
let italicBtn = document.querySelector('#right-div section .btn:nth-child(2)');
let underlineBtn = document.querySelector('#right-div section .btn:nth-child(3)');
let h1 = document.querySelector('h1');
let decreaseFont = document.querySelector('#right-div .btn:nth-child(4)');
let increaseFont = document.querySelector('#right-div .btn:nth-child(5)'); 
let quickFontP = document.querySelector('p.font'); 
 
let fontSize = function(e) {
	let fontNum = document.querySelector('section .num');
	let textarea = document.querySelector('textarea');
	let content = document.querySelector('#right-div #content');
	let mobileFont = document.querySelector('#mobile-content');
	mobileFont.style.fontSize = '' + e.textContent + 'px'; 
	textarea.style.fontSize = '' + e.textContent + 'px';
	content.style.fontSize = '' + e.textContent + 'px';
} 

let textColor = function(e) {
	let fontColor = document.querySelector('section ');
	let textarea = document.querySelector('textarea');
	let content = document.querySelector('#right-div #content');
	let mobileFont = document.querySelector('#mobile-content');
	mobileFont.style.color = '' + e.textContent + ''; 
	textarea.style.color = '' + e.textContent + '';
	content.style.color = '' + e.textContent + '';
	
} 

//style formatting pending.............................................................. from
let fontFamily = function(e) {
	let fontFam = document.querySelector('section');
	let textarea = document.querySelector('textarea');
	let content = document.querySelector('#right-div #content ');
	let mobileFont = document.querySelector('#mobile-content');
	mobileFont.style.fontFamily = '' + e.innerText + ''; 
	textarea.style.fontFamily = '' + e.innerText + '';
	content.style.fontFamily = '' + e.innerText + '';
}
//............................................................................. to


let _bold = function() {
	bold();
}
boldBtn.addEventListener('click', _bold);

let _italic = function() {
	italic();
}
italicBtn.addEventListener('click', _italic);

let _underline = function() {
	underline();	
}
underlineBtn.addEventListener('click', _underline);

let _decreaseFont = function() {  
	let content = document.querySelector('#right-div #content');
	let mobileFont = document.querySelector('#mobile-content'); 
 
	let num = 20;
	if (num < 50) {
	num -= 7; 
		content.style.fontSize = '' + num + 'px';
		mobileFont.style.fontSize = '' + num + 'px'; 
	}  
}
decreaseFont.addEventListener('click', _decreaseFont);

let _increaseFont = function() {  
	let content = document.querySelector('#right-div #content');
	let mobileFont = document.querySelector('#mobile-content'); 
 
	let num = 25;
	if (num <= 50) {
	num += 10; 
		content.style.fontSize = '' + num + 'px';
		mobileFont.style.fontSize = '' + num + 'px'; 
	}  
}
increaseFont.addEventListener('click', _increaseFont);

let save = function() {
	let save = document.querySelector('#right-div #content');
	let textarea = document.querySelector('textarea');
if (textarea.value === ' ') {
	save.innerHTML += ' '; 
}	else {
	save.innerHTML += '<br><p class="notes"> ' + textarea.value + '<button onclick="del_X(this)" class="note-button"><abbr title="Delete Text">x</abbr></button><br></p>' + ''; 
	} 
	//save.innerHTML += '<br> <p class="notes">' + textarea.value + '<button onclick="del_X(this)" class="note-button"><abbr title="Delete Text">x</abbr></button><br> </p>' + ' '; 
	save.style.color = '#fff';
	textarea.value = ' ';
	let boldBox = document.querySelector('p:first-child');
	boldBox.style.border = '1px solid #000';
	boldBox.style.borderRadius = '0 0 0 0';	
	let italic = document.querySelector('p:nth-child(2)');
	italic.style.border = '1px solid #000';	
	let underline = document.querySelector('p:nth-child(3)');
	underline.style.border = '1px solid #000';
	textarea.value = ' ';
	italic.style.borderRadius = '0 0 0 0';
	underline.style.borderRadius = '0 0 0 0';
}
saveButton.addEventListener('click', save);
 
let saveSmallScreen = function() {
	let save = document.querySelector('#mobile-content');
	let textarea = document.querySelector('textarea#mobile-text-view'); 
if (textarea.value === ' ') {
	
	save.innerHTML += ' '; 
}	else {
	save.innerHTML += '<br><p class="notes"> ' + textarea.value + '<button onclick="del_X(this)" class="note-button"><abbr title="Delete Text">x</abbr></button><br></p>' + ''; 
	} 
	//save.innerHTML += '<br><p class="notes"> ' + textarea.value + '<button onclick="del_X(this)" class="note-button"><abbr title="Delete Text">x</abbr></button><br></p>' + '';
	textarea.value = ' '; 
}
document.querySelector('#saveButton.mobile').addEventListener('click', saveSmallScreen);
 
let bold = function() {
	let bold = document.querySelector('#right-div #content');
	let textarea = document.querySelector('textarea'); 
	let boldBox = document.querySelector('p:first-child');
if (textarea.value === ' ') {
	bold.innerHTML += ' '; 
}	else { 
	bold.innerHTML += '<br><p class="notes" id="bold-note"> ' + textarea.value + '<button onclick="del_X(this)" class="note-button"><abbr title="Delete Text">x</abbr></button><br></p>' + ''; 
	} 
	//bold.innerHTML += '<br><p class="notes" id="bold-note"> ' + textarea.value + '<button onclick="del_X(this)" class="note-button"><abbr title="Delete Text">x</abbr></button><br></p>' + ''; 
	bold.style.color = '#fff';
	textarea.value = ' ';
	
	boldBox.style.border = '1px solid red';
	boldBox.style.borderRadius = '50% 0 0 0';	
	let italic = document.querySelector('p:nth-child(2)');
	italic.style.border = '1px solid #000';	
	let underline = document.querySelector('p:nth-child(3)');
	underline.style.border = '1px solid #000';
	textarea.value = ' ';
	italic.style.borderRadius = '0 0 0 0';
	underline.style.borderRadius = '0 0 0 0';
}
boldP.addEventListener('click', bold);
boldBtn.addEventListener('click', _bold);
quickFontP.addEventListener('click', bold); 

let boldSmallScreen = function() {
	let bold = document.querySelector('#mobile-content');
	let textarea = document.querySelector('textarea#mobile-text-view');  
if (textarea.value === ' ') {
	bold.innerHTML += ' '; 
}	else {
	bold.innerHTML += '<br><p class="notes" id="bold-note"> ' + textarea.value + '<button onclick="del_X(this)" class="note-button"><abbr title="Delete Text">x</abbr></button><br></p>' + ''; 
	} 
	//bold.innerHTML += '<br><p class="notes" id="bold-note"> ' + textarea.value + '<button onclick="del_X(this)" class="note-button"><abbr title="Delete Text">x</abbr></button><br></p>' + '';
	textarea.value = ' '; 
}
document.querySelector('section#quick-format p.font:first-child').addEventListener('click', boldSmallScreen);

let deleteAll = function() {
	let deleteButton = document.getElementById('deleteButton');
	let text = document.querySelector('#content'); 
	text.textContent = ' ';
	let bold = document.querySelector('p:first-child');
	let italic = document.querySelector('p:nth-child(2)');
	let underline = document.querySelector('p:nth-child(3)');
	bold.style.borderRadius = '0 0 0 0';
	italic.style.borderRadius = '0 0 0 0';
	underline.style.borderRadius = '0 0 0 0';

	let boldBox = document.querySelector('p:first-child');
	bold.style.border = '1px solid #000';
	italic.style.border = '1px solid #000';	
	underline.style.border = '1px solid #000';
}
deleteButton.addEventListener('click', deleteAll);
 
let deteteAllSmallScreen = function() {
	let deteteAll = document.querySelector('#mobile-content');
	let textarea = document.querySelector('textarea#mobile-text-view'); 
	let text = document.querySelector('#mobile-content');
	text.textContent = ' '; 
	textarea.value = ' '; 
}
document.querySelector('#deleteButton.mobile').addEventListener('click', deteteAllSmallScreen);
 
let del_X = function(e) {
	e.parentElement.remove();
}

let italic = function() {
	let italic = document.querySelector('#right-div #content');
	let textarea = document.querySelector('textarea');
if (textarea.value === ' ') {
	italic.innerHTML += ' '; 
}	else {
	italic.innerHTML += '<br><p class="notes" id="italic-note"> ' + textarea.value + '<button onclick="del_X(this)" class="note-button"><abbr title="Delete Text">x</abbr></button><br></p>' + ''; 
	} 
	//italic.innerHTML += '<br> <p class="notes" id="italic-note">' + textarea.value + '<button onclick="del_X(this)" class="note-button"><abbr title="Delete Text">x</abbr></button><br> </p>' + ''; 
	italic.style.color = '#fff';
	textarea.value = ' ';
	let italicBox = document.querySelector('p:nth-child(2)');
	italicBox.style.border = '1px solid red';
	italicBox.style.borderRadius = '50% 0 0 0';
	let underline = document.querySelector('p:nth-child(3)');
	underline.style.border = '1px solid #000';
	let bold = document.querySelector('p:nth-child(1)');
	bold.style.border = '1px solid #000';
	textarea.value = ' ';
	bold.style.borderRadius = '0 0 0 0';
	underline.style.borderRadius = '0 0 0 0';
}
italicP.addEventListener('click', italic);
italicBtn.addEventListener('click', _italic);

let italicSmallScreen = function() {
	let italic = document.querySelector('#mobile-content');
	let textarea = document.querySelector('textarea#mobile-text-view'); 
if (textarea.value === ' ') {
	italic.innerHTML += ' '; 
}	else {
	italic.innerHTML += '<br><p class="notes" id="italic-note"> ' + textarea.value + '<button onclick="del_X(this)" class="note-button"><abbr title="Delete Text">x</abbr></button><br></p>' + ''; 
	} 
	//italic.innerHTML += '<br><p class="notes" id="italic-note"> ' + textarea.value + '<button onclick="del_X(this)" class="note-button"><abbr title="Delete Text">x</abbr></button><br></p>' + '';
	textarea.value = ' '; 
}
document.querySelector('section#quick-format p.font:nth-child(2)').addEventListener('click', italicSmallScreen);

let underline = function() {
	let underline = document.querySelector('#right-div #content');
	let textarea = document.querySelector('textarea');
if (textarea.value === ' ') {
	underline.innerHTML += ' '; 
}	else {
	underline.innerHTML += '<br><p class="notes" id="underline-note"> ' + textarea.value + '<button onclick="del_X(this)" class="note-button"><abbr title="Delete Text">x</abbr></button><br></p>' + ''; 
	} 
	//underline.innerHTML += '<br><p class="notes" id="underline-note">' + textarea.value + '<button onclick="del_X(this)" class="note-button"><abbr title="Delete Text">x</abbr></button><br> </p>' + ''; 	
	underline.style.color = '#fff';
	textarea.value = ' ';
	let underlineBox = document.querySelector('p:nth-child(3)');
	underlineBox.style.border = '1px solid red';
	underlineBox.style.borderRadius = '50% 0 0 0';
	let italic = document.querySelector('p:nth-child(2)');
	italic.style.border = '1px solid #000';	
	let bold = document.querySelector('p:nth-child(1)');
	bold.style.border = '1px solid #000';
	textarea.value = ' ';
	bold.style.borderRadius = '0 0 0 0';
	italic.style.borderRadius = '0 0 0 0';
}
underlineP.addEventListener('click', underline);
underlineBtn.addEventListener('click', _underline);

let underlineSmallScreen = function() {
	let underline = document.querySelector('#mobile-content');
	let textarea = document.querySelector('textarea#mobile-text-view');
if (textarea.value === ' ') {
	underline.innerHTML += ' '; 
}	else {
	underline.innerHTML += '<br><p class="notes" id="underline-note"> ' + textarea.value + '<button onclick="del_X(this)" class="note-button"><abbr title="Delete Text">x</abbr></button><br></p>' + ''; 
	} 
	 
	//underline.innerHTML += '<br><p class="notes" id="underline-note"> ' + textarea.value + '<button onclick="del_X(this)" class="note-button"><abbr title="Delete Text">x</abbr></button><br></p>' + '';
	textarea.value = ' '; 
}
document.querySelector('section#quick-format p.font:nth-child(3)').addEventListener('click', underlineSmallScreen);

let textArea = document.querySelector('#right-div textarea');
let moveSectionFormat = function() {
	document.querySelector('#right-div section#quick-format').style.marginTop = '18rem';
	document.querySelector('#right-div section#quick-format').style.transition = '1.5s';
	document.querySelector('#right-div section#quick-format').style.transitionDelay = '2s';
}
textArea.addEventListener('mouseover', moveSectionFormat);


let textArea1 = document.querySelector('#right-div textarea');
let defaultSectionFormat = function() {
	document.querySelector('#right-div section#quick-format').style.marginTop = '8rem';
	document.querySelector('#right-div section#quick-format').style.transition = '1.5s';
}
textArea1.addEventListener('mouseout', defaultSectionFormat);  