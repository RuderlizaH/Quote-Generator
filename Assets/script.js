console.log('file linked')
const text=document.getElementById("quoteHere");
const author=document.getElementById("author");

const getNewQuote = async () =>
{
    //api for quotes
    var url="https://type.fit/api/quotes";    

    // fetch the data from api
    const response=await fetch(url);
    console.log(typeof response);
    //convert response to json and store it in quotes array
    const allQuotes = await response.json();

    // Generates a random number between 0 and the length of the quotes array
    const indx = Math.floor(Math.random()*allQuotes.length);

    //Store the quote present at the randomly generated index
    const quote=allQuotes[indx].text;

    //Store the author of the respective quote
    const auth=allQuotes[indx].author;

    if(auth==null)
    {
        author = "Anonymous";
    }

    //function to dynamically display the quote and the author
    text.innerHTML= `"${quote}"`;
    author.innerHTML="~ "+auth;

}
getNewQuote();





//Page version 1

//Quote generated on page load
window.addEventListener('load', function getQuote() {
   const randomQuote = Math.floor(Math.random() * quotes.length);
   const generate = quotes[randomQuote];
   quoteArea.innerHTML = generate;
});

//button 
const genQuote = document.getElementById('genbtn');

//Quote Area
const quoteArea = document.getElementById('quote');

//Quotes Array
const quotes = ['"There\'\s no place like home."', '"Don\'t leave for tomorrow what you can do today."', '"There is only one you."', '"The purpose of our lives is to be happy."', '"If you want to live a happy life, tie it to a goal, not to people or things. ~ Albert Einstein"',
   '"Never let the fear of striking out keep you from playing the game. ~ Babe Ruth"', '"In order to write about life first you must live it. ~ Ernest Hemingway."'];


//Event
genQuote.addEventListener('click', function getQuote() {
   const randomQuote = Math.floor(Math.random() * quotes.length);
   const generate = quotes[randomQuote];
   quoteArea.innerHTML = generate;
});

//version2 button
/*const btnVtwo = document.getElementById('v2Btn');
btnVtwo.addEventListener =('click', function(){
   location.href = //192.168.0.143:5500/Assets/v2index.html;
});*/






