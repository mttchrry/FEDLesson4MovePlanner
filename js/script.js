

function displayArticles(data) {
  console.log('JSON data is : '+ data);
  // var items = [];
  // $.each( data, function( key, val) {
  //   items.push("<li id='" + key + "'>" + val + "</li>" );
  // });

  // $( "<ul/>", {
  //   "class": "my-new-list",
  //   html: items.join( "" )
  // }).appendTo( "body" );
  //   }
}


function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    $('.bgimg').remove();
    // YOUR CODE GOES HERE!
    var inputStreet = $('#street').val();
    var inputCity = $('#city').val();
    var address = inputStreet + ', ' + inputCity;
    var streetimgaddress = 'https://maps.googleapis.com/maps/api/streetview?location=' +
         address + '&size=600x400'
    $body.append('<img class="bgimg" src="'+ streetimgaddress + '">');

    $greeting.text('So, you want to live at '+ address+ '?')

    $.getJSON('http://api.nytimes.com/svc/search/v2/articlesearch.json?q='+ address +
        '&apt-key=ec612587cb260600bc67a560ab4342ef:8:71766984', displayArticles(data));

    //return false;
};

$('#form-container').submit(loadData);

// loadData();
