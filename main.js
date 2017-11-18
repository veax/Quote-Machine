$(document).ready(function(){

	var randomQuote;
	var randomAuthor;
	function getQuote(){

		//1. store url:
		var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
		$.getJSON(url, function(data){
			$(".quote").html('"'+data.quoteText+'"');
			$(".author").html("- " + data.quoteAuthor);
		});
	}

	$("#newQuote").on("click", function(){
		getQuote();
	});
	/*$("#getQuote").on("click", function(){
		$.ajaxSetup({cache:false});
		$.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&callback=", function(json){
			$(".message").html(json[0].content + "— " + json[0].title)
		});

	});*/
});
