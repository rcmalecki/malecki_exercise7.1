//created a variable to select the desired div element
var emerson = document.getElementById ('emerson');

//set the style attribute of the selected div element
emerson.setAttribute('align','center');

//created the elements
var newHeading = document.createElement('h1');
var newParagraph = document.createElement('p');

//newHeading.innerHTML = 'My Favorite Ralph Waldo Emerson Quote';

//created the child nodes
var h1Text = document.createTextNode('My Favorite Ralph Waldo Emerson Quote');
var paraText = document.createTextNode('To laugh often and much; to win the respect of intelligent people and the affection of children; to earn the appreciation of honest critics and to endure the betrayal of false friends; to appreciate beauty; to find the best in others; to leave the world a bit better whether by a healthy child, a garden patch or a redeemed social condition; to know even one life has breathed easier because you have lived. This is to have succeeded.');

//added the child nodes to the new elements
newHeading.appendChild(h1Text);
newParagraph.appendChild(paraText);

//attached the child nodes to the document
document.getElementById('emerson').appendChild(newHeading);
document.getElementById('emerson').appendChild(newParagraph);


	

