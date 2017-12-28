$( document ).ready(function() {
    $.ajaxSetup({ cache: false });

    // Quote Variables
    var quote;
    var author;

    // Call quote function on page load
    getQuote();

    // Quote function
    function getQuote(){

        //URL used for the quotes
        var url = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';

        $.getJSON(url, function(data){
            quote = data[0].content;
            author = (data.quoteAuthor == '') ? 'Unknown' : data[0].title;
            $('#quoteArea').html( quote + '<p>- ' + author + '</p>');
        });
    }
    
    // Quote button function
    $('#quoteButton').click(function(){
        getQuote();
    });

    // Tweet button function
    $('#tweetButton').click(function(){
        window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent($('#quoteArea').text()));
    });
});
