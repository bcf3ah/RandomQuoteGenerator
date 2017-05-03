$("#newQuote").click(()=>{
  $.ajax({
    url: 'https://quotesondesign.com/wp-json/posts?     filter[orderby]=rand&filter[posts_per_page]=1&callback=',
    success: function(a) {
      $(".card-title").html(a[0].content);
      $(".card-subtitle").html("- "+a[0].title);
      var quote = $(a[0].content).text();
      $("#tweetIt").attr("href", "https://twitter.com/intent/tweet?text="+quote+"   - "+a[0].title);
    },
    cache: false
  });
})
