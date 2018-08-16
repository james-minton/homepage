// Scrobbler output    
    
    $(document).ready(function() {
        $.getJSON("http://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=vast_expanse&api_key=937b5452bfdba28a90348c6772e2eb4c&limit=10&&format=json&callback=?", function(data) {
               var html = '';
               var html2 = '';
               var counter = 1;
                $.each(data.recenttracks.track, function(i, item) {
                       if(counter == 1) {
                                html += '<span><a href="' + item.url + '" target="_blank">' + item.name + '</a> - ' + item.artist['#text'] + '</span>';
                        }
                       counter++
                });
                $('.listening-to').append(html);
                $.each(data.recenttracks.track, function(i, item) {
                   // if(counter == 1) {
                              html2 += '<li><span><a href="' + item.url + '" target="_blank">' + item.name + '</a> - ' + item.artist['#text'] + '</span></li>';
                   //  }
                  // counter++
             });
             $('.listening-to2').append(html2);
        });
});