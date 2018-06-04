# Quotes on Dev Worpdress Theme

 Simple Wordpress based application using Wordpress REST API endpoint using Ajax to get and post custom posts. I uses home.php as a front-page and custom page-archives and page-submit php files.

 Theme boilerplate based on underscore.

 JavaScript (jQuery) breakdown:
 1. Uses Ajax to make a GET request to a WP API endpoint to dynamically add a new quote to the front page when a user clicks the 'Get a new Quote' button, and updates the URL using the history API.
 2. Uses Ajax to make a POST request to submit a new quote to the site, but only when a user is logged in
 3. Clears the quote submission form and shows a success message when a quote is successfully submitted to the database.
 4. Shows an error message when a quote is not successfully submitted to the database.

-----------------------------------------------------------------------------------
### personal learning:
I want to use the API to build a custome Wordpress blog reader, fetching data from my favourite blogs' json files. It was not required for the Quotes on Dev, but I found out how to get data such as featured image or category name, which are embeded data in json file.

__________________________________________________________________________________
:computer: [check my other projects](https://github.com/pinaska)