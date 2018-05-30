(function($) {
  'use strict';

  // remove this body append code, just for initial test
  // $('body').append('js file is working');

  /**
   * Ajax-based random post fetching & History API
   */
  $('#new-quote-button').on('click', function(e){
    e.preventDefault();
    // console.log('click');
    $.ajax({
      method:'get',
      url:api_vars.root_url + 'wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      cache:false,
    }).done(function(data){
      console.log(data);

//append the data to html, look at content.php 



    }).fail(function(){

      return 'There was an error';

    });

  });



  /**
   * Ajax-based front-end post submissions.
   */
//take a look at the wp javascripts slides for post request, also in readsprout theme

})(jQuery);
