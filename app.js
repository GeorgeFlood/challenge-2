let tag = document.querySelector(".button");
let edit = document.querySelector(".edit");


let quotes = [
'The Best Way To Get Started Is To Quit Talking And Begin Doing. – Walt Disney',
'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty. – Winston Churchill',
'Don’t Let Yesterday Take Up Too Much Of Today. – Will Rogers',
'You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character. – Unknown',
'If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You. – Steve Jobs',
];

let jokes = [
"What do you call a factory that makes okay products? A satisfactory.",
"What did the janitor say when he jumped out of the closet? Supplies!",
"Have you heard about the chocolate record player? It sounds pretty sweet.",
"What did the ocean say to the beach? Nothing, it just waved.",
"I only know 25 letters of the alphabet. I don't know y.",
];



const arrJumble = arr => {
let jumble = arr[Math.floor(Math.random() * arr.length)];
return jumble;	
}


tag.addEventListener('click', (event) => {
const jokes = jumble(jokes);
edit.innerHTML = `${jokes}`;
});