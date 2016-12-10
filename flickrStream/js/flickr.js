$.getJSON("https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=41a5fe023d56112c2f4cc2617eb6a750&per_page=25&format=json&nojsoncallback=1").then(function(photos) {


// $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?&lang=en-us&format=json&jsoncallback=?").then(function(photos) {

console.log(photos);

        $(function() {

        var searchTerm="New Zealand";
        $('#search').keypress( function(e) {
                if (e.keyCode == 13) {
                    $('button[id = btnSearch]').click();
                    return false;  
                }
        });

        $("#btnSearch").click(function(){
          console.log("Clicked")
            searchTerm=$("#search").val();
            if(!searchTerm){
              alert("please type something to search!");
              return false;
            }
            $('.carousel-indicators').empty();
            $('.carousel-inner').empty();
         
            search();
        })


        function search(){
            $.getJSON('https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?',
            {
              tags: searchTerm ,
              format: 'json'
            },
            function(data)
            {
         

                $.each(data.items, function(i, item)
                {
                  $('<div class="item"><img src="'+item.media.m+'"><div class="carousel-caption"><p>'+item.title+'</p></div></div>').appendTo('.carousel-inner');
                  
                  $('<li data-target="#myCarousel" data-slide-to="'+i+'"></li>').appendTo('.carousel-indicators');
                  $('.item').first().addClass('active');
                  $('.carousel-indicators > li').first().addClass('active');

                }) ;

            }) ;
         } 

      //    $(function(){

      //       $('.carousel-control').click(function(e){
      //       e.preventDefault();
      //       $('#myCarousel').carousel( $(this).data() );
      //   });

      // });

    })

});


