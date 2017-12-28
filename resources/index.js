$( document ).ready(function() {
    // Quote Variables
    var quote;
    var author;

    // Call quote function on page load
    getQuote();

    // Quote function
    function getQuote(){

        //URL used for the quotes
        var url = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?';

        $.getJSON(url, function(data){
            quote = data.quoteText;
            author = (data.quoteAuthor == '') ? 'Unknown' : data.quoteAuthor;
            $('#quoteArea').html( '<p>"' + quote + '"</p><p>- ' + author + '</p>');
        });
    }
    
    // Quote button function
    $('#quoteButton').click(function(){
        getQuote();
    });

    // Tweet button function
    $('#tweetButton').click(function(){
        window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + quote + '" - ' + author), '_blank');
    });
});
