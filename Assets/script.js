console.log('file linked')

window.addEventListener('load', function getQuote(){
   const randomQuote = Math.floor(Math.random()*quotes.length);
   const generate = quotes[randomQuote];
   quoteArea.innerHTML = generate;});


//button 
const genQuote = document.getElementById('genbtn');

//Quote Area
const quoteArea = document.getElementById('quote');

//Quotes Array
const quotes = ['"There\'\s no place like home"','"Don\'t leave for tomorrow what you can do today."','"There is only one you."'];


 //Event
 genQuote.addEventListener('click',function getQuote(){
    const randomQuote = Math.floor(Math.random()*quotes.length);
    const generate = quotes[randomQuote];
    quoteArea.innerHTML = generate;
 });





