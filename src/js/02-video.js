import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const iframeRef = document.querySelector("iframe")

const player = new Player(iframeRef);
const TIME_PLAYER = "videoplayer-current-time"

setPlayerTime();

player.on('timeupdate', throttle(function(data) {
    const time = data.seconds;
   // console.log(time);
    localStorage.setItem(TIME_PLAYER, time);
},1000));

function setPlayerTime() {
    let currentTime = localStorage.getItem(TIME_PLAYER);
    if(currentTime) {
        player.setCurrentTime(currentTime);
        console.log(currentTime);
    }
}


