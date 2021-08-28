const text = document.querySelector('.quote');
const auth = document.querySelector('.author');
const button = document.querySelector('.twitter-share-button');
const nextBtn = document.querySelector('.next');
const loader = document.querySelector('.loader');

const getQuote = async () => {
    loader.classList.remove('hide');
    const res = await fetch(`https://type.fit/api/quotes`);
    const quotes = await res.json();
    loader.classList.add('hide');
    const num = Math.floor(Math.random()*quotes.length);
    const item = quotes[num];
    const quote = item.text;
    const author = item.author;
    text.innerText = quote;
    auth.innerText = author;
    button.href = `https://twitter.com/intent/tweet?text=${quote} - ${author}`
}

nextBtn.addEventListener('click', getQuote);

getQuote();