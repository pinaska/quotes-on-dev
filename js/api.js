(function($) {
  // 'use strict';
  //before the button click
  var lastPage = '';
  $('#new-quote-button').on('click', function(e){
    e.preventDefault();

    //button click update the lastPage before the ajax request
    lastPage = document.URL;

    $.ajax({
      method:'get',
      url:api_vars.root_url + 'wp/v2/posts?filter[orderby]=rand&filter[data[0]s_per_page]=1',
      cache:false,

    }).done(function(data){
      console.log(data);

        //History Push State in get request try looking wp slug, should update the url with the slug
        history.pushState(null, null, data[0].slug);
      //append the data to html, look at content.php


        //replace the current quote with the new quote
          $('.entry-content').html( data[0].content.rendered );
          $( '.entry-title' ).html( '&mdash; ' + data[0].title.rendered );
          if ( data[0]._qod_quote_source !== '' && data[0]._qod_quote_source_url !== ''){
            $( '.source' ).html(' , ' + '<a href="' + data[0]._qod_quote_source_url+ '">' + data[0]._qod_quote_source + '</a>');
          }
          else if (data[0]._qod_quote_source !== '') {
          $('.source').html(', ' + data[0]._qod_quote_source)
         }
          else {
          $( '.source' ).html('');
        }

    }).fail(function(){

      return 'There was an error';

    });

  });

//Widnow Pop State //when you click arrows
        $(window).on('popstate', function(){
          window.location.replace(lastPage);
      })

//take a look at the wp javascripts slides for data[0] request, also in readsprout theme

})(jQuery);
