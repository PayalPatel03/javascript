//Start
let quote=document.querySelector('.blockquote p');
let footer=document.querySelector('.blockquote-footer');

//Diffrent quotes
const quotes = [
    { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { quote: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { quote: "Happiness depends upon ourselves.", author: "Aristotle" },
    { quote: "Act as if what you do makes a difference. It does.", author: "William James" },
    { quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" }
  ];

  let changeQuote=()=>{
    let index=Math.floor(Math.random()*quotes.length);

    quote.textContent=quotes[index].quote;
    footer.textContent=quotes[index].author;
  }
  changeQuote();

  setInterval(() => {
    changeQuote();
  }, 3000);

