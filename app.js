const button1 = document.querySelector('.button-1');
const button2 = document.querySelector('.button-2');
const button3 = document.querySelector('.button-3');
const edit = document.querySelector('.edit');


const moreSentences = () => {

return arrays: {

 sentences: [
	`Remember, you can't smoke coffee because you don't have that special kind of applesauce that you can put on squirrels without bothering them.`,
	`Rockets fall into the hands of red-finned rhinos.`,
	`The baby is the powerhouse of the uterus`,
	`I found a small banana inside my light-bulb.`,
	`He made me ink in a good way.`,
	`If the ant eats the water gun, then God will overdose on mozzarella cheese.`,
	`He loved eating his bananas in hot dog buns.`,
	`Smoky the Bear secretly started the fires.`,
	`The blue parrot drove by the hitchhiking mongoose.`,
	`His 7 layer'd cake had only 6 layers - it was a bad day.`,
	`The bees decided to have a mutiny against their queen on her jubilee`,
 ],
 jokes: [
	"What do you call a factory that makes okay products? A satisfactory.",
	"What did the janitor say when he jumped out of the closet? Supplies!",
	"Have you heard about the chocolate record player? It sounds pretty sweet.",
	"What did the ocean say to the beach? Nothing, it just waved.",
	"I only know 25 letters of the alphabet. I don't know y.",
	"How do lawyers say goodbye? We'll be suing ya!",
	"Wanna hear a joke about paper? Never mind—it's tearable.",
	"What's the best way to watch a fly fishing tournament? Live stream.",
	"I could tell a joke about pizza, but it's a little cheesy.",
	"Don't trust atoms. They make up everything!",
	"When does a joke become a dad joke? When it becomes apparent.",
	"I wouldn't buy anything with velcro. It's a total rip-off.",
	"What’s an astronaut’s favorite part of a computer? The space bar.",
	"I don't play soccer because I enjoy the sport. I'm just doing it for kicks!",
	"Why are elevator jokes so classic and good? They work on many levels.",
	"What do you call a fake noodle? An impasta.",
	"Which state has the most streets? Rhode Island.",
	"What did the fish say when he hit the wall? Dam.",
	"Is this pool safe for diving? It deep ends.",
	"Why don't eggs tell jokes? They'd crack each other up.",
	"I don't trust those trees. They seem kind of shady.",
	"Where do you learn to make a banana split? Sundae school.",
	"I asked my dog what's two minus two. He said nothing.",
],
 quotes: [
	`"The Best Way To Get Started Is To Quit Talking And Begin Doing." – Walt Disney`,
	`"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty." – Winston Churchill`,
	`"Don’t Let Yesterday Take Up Too Much Of Today." – Will Rogers`,
	`"You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character." – Unknown`,
	`"If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You." – Steve Jobs`,
	`"Develop An ‘Attitude Of Gratitude. Say Thank You To Everyone You Meet For Everything They Do For You." – Encouraging Quote By Brian Tracy`,
	`"Don’t spend time beating on a wall, hoping to transform it into a door.” — Coco Chanel`,
	`"reativity is intelligence having fun.” — Albert Einstein`,
	`"Don’t live the same year 75 times and call it a life.” — Robin Sharma`,
	`"You cannot save people, you can just love them.” — Anaïs Nin`,
	`"It wasn’t raining when Noah built the ark.” — Howard Ruff`,
	`“Take your dreams seriously.” — Author Unknown`,
],

get sentences(){
 return this.sentences;	
 },

get jokes(){
 return this.jokes;
   },

get quotes(){
 return this.quotes;
   },

set sentences(sentences){
 this._buttons.sentences = sentences;	
  },

set jokes(jokes){
 this._buttons.jokes = jokes
 },

set quotes(quotes){
 this._buttons.quotes = quotes;	
 },
},

get _jumble(){
	return this.jokes
	return this.quotes
	return this.sentences	
},
{
addToArray(sentences, jokes, quotes){
return all = {
	sentences: sentences,
	jokes: jokes,
	quotes: quotes,	
};
this._buttons[sentences].push(sentences);
this._buttons[jokes].push(jokes);
this._buttons[quotes].push(quotes);
},

randomArray(array){
 const arrays = this.sentences + this.quotes + this.jokes;
 const randomArray = Math.floor(Math.random() * arrays.length);
 return arrays[randomArray];
},

generateRandom(){
const joke = this.randomArray['jokes'];
const sentences = this.randomArray['quotes'];
const quotes = this.randomArray['sentences'];	
},

button1.addEventListener('click', () => {
edit.innerHTML = `${joke}`;
});

button2.addEventListener('click', () => {
edit.innerHTML = `${quotes}`;	
});

button3.addEventListener('click', () => {
edit.innerHTML = `${sentences}`;	
}),
 };




