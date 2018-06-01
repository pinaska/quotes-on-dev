(function($) {
  // 'use strict';

  //before the button click
  var lastPage = '';
  $('#new-quote-button').on('click', function(e){
    e.preventDefault();

    lastPage = document.URL;

    $.ajax({
      method:'get',
      url:api_vars.root_url + 'wp/v2/posts?_embed=true&filter[orderby]=rand&filter[posts_per_page]=1',
      cache:false,

    }).done(function(data){
        history.pushState(null, null, data[0].slug);



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
    

        //trying to get category from json, using wp/v2/posts?_embed=true&filter[orderby]=rand&filter[data[0]s_per_page]=1 in url
        console.log(data[0]._embedded['wp:term']);
        // console.log(data[0]._embedded[1][0]);
        // // var postCat= data._embedded['wp:term'].
        // $('body').append(data._embedded['wp:term'][2]);

    }).fail(function(){

      return 'There was an error';

    });

  });

        $('input[type=submit]').on('click', function(e) {
          e.preventDefault();
          $.ajax({
             method: 'post',
             url: api_vars.root_url + 'wp/v2/posts/',
             data: {
              status: 'pending',
              title: $('#quote-author').val(),
              content: $('#quote-content').val(),
              _qod_quote_source: $('#quote-source').val(),
              _qod_quote_source_url: $('#quote-source-url').val()

            },

             beforeSend: function(xhr) {
                xhr.setRequestHeader( 'X-WP-Nonce', api_vars.nonce );
             },
        }).done(function () {
            $('#quote-submission-form').hide('slow');
            $('.entry-title').after('<p> '+ api_vars.success +'</p>');

             });
        }).error(function(){
          $('#quote-submission-form').hide('slow');
          $('.entry-title').after('<p> '+ api_vars.failure +'</p>');

        });


//Widnow Pop State //when you click arrows
        $(window).on('popstate', function(){
          window.location.replace(lastPage);
      })

})(jQuery);
