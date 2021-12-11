      import MediaPlayer from './MediaPlayer.js';
      import AutoPlay from './plugins/AutoPlay.js'; 

      const video = document.querySelector("video");

      const player = new MediaPlayer( { el: video, plugins:[

      ] } );
      
      const button = document.querySelector("#playButton");
      button.onclick = () => player.togglePlay();

      const buttonMute = document.querySelector("#muteButton");
      buttonMute.onclick = () => {
            if(player.media.muted){
                  player.unmute();
            }else {
                  player.mute();
            }
      };


