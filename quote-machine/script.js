$(document).ready(function(){
  $(".tweet-container").hide();
  $(".message").hide();
 $("#quote-button").on("click", function(){
 $.getJSON("https://random-quote-generator.herokuapp.com/api/quotes/random",function(json){

 $(".message").empty();
 $(".message").html('<div class="message">' + '<blockquote>"' + json.quote + '"'+ '</blockquote>' + '<p class="author">\u2014 ' + json.author + '</p>'+ '<br>' +'</div>');
 $('.message').show().delay(7000).fadeOut(500);
 $('.tweet-container').show().delay(7000).fadeOut(500);
tweet(json);

});
});

 function tweet(json){
   var quote = '"'+ json.quote + '" '+ '\u2014 ' + json.author;

 $(".twitter-share-button").attr("href","https://twitter.com/intent/tweet?text=" + quote);

 }
}); 
