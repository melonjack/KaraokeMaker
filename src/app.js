var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      export var player;
      window.onYouTubeIframeAPIReady = function() {
        player = new YT.Player('video_play', {
          width: window.innerWidth,
          height: window.innerHeight,
          playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          modestbranding: 1,
          showinfo: 0,
          },
          events: {
            'onStateChange': onPlayerStateChange
          }
        });
      }
      async function onPlayerStateChange(event) {
        if(event.data === YT.PlayerState.ENDED){
            window.scroll({ top: 0, left: 0, behavior: 'smooth' });
            await sleep(500);
            video_area.style.display="";
        }

      }

      function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

var video_area = document.getElementById('video_area');
var input = document.getElementById("link_input_field");
input.addEventListener('keypress', function (e) {
    if (e.keyCode == 13) {
        var valUrl = validateYouTubeUrl(input.value);
        if (valUrl != null) {
            video_area.style.display = "block";
            player.loadVideoById(getYoutubeID(input.value));
            video_area.scrollIntoView({ behavior: 'smooth' });

            return;
        }
        else {
            alert(false);
        }
    }
});

function validateYouTubeUrl(url) {
    if (url != undefined || url != '') {
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
        if (match && match[2].length == 11) {
            // Do anything for being valid
            // if need to change the url to embed url then use below line
            return 'https://www.youtube.com/embed/' + match[2] + '?vq=hd1080&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0"';
        }
        else {
            return null;
            // Do anything for not being valid
        }
    }
}
function getYoutubeID(url) {
    if (url != undefined || url != '') {
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
        return match[2];
    }
}
