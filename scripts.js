//Capture URL's
var quoteUrl = "https://api.forismatic.com/api/1.0/?format=jsonp&method=getQuote&jsonp=?&lang=en";  
var twitterUrl = "https://twitter.com/intent/tweet?text=";

//Create event handler
$("button").on("click", function() {
  getQuote();
});

//Do something with the data
function getQuote() {  
  $.getJSON(quoteUrl, function(response) {
    $("#quote").html(response.quoteText);
    $("#author").html(response.quoteAuthor);
    $("#twitter-share").attr("href", 
      twitterUrl + response.quoteText + " ― " + response.quoteAuthor);
  }); 
}

getQuote();  
