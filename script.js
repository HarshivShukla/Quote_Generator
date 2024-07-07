const text = document.getElementById("quote");
const author = document.getElementById("author");

const getNewQuote = async () => {
  var url = "https://type.fit/api/quotes";
  const response = await fetch(url);
  const allQuotes = await response.json();
  const indx = Math.floor(Math.random() * allQuotes.length);
  const quote = allQuotes[indx].text;
  const auth = allQuotes[indx].author;

  if (auth == null) {
    author.innerHTML = "~ Anonymous";
  } else {
    const cleanAuth = auth.replace('type.fit', '');
    author.innerHTML = "~ " + cleanAuth;
  }
  text.innerHTML = quote;
}

getNewQuote();