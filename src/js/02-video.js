import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const iframeRef = document.querySelector("iframe")
const player = new Player(iframeRef);
const TIME_PLAYER = "videoplayer-current-time"

player.on('timeupdate', throttle(function(data) {

localStorage.getItem(TIME_PLAYER)
const second = data.seconds;
console.log(second);

localStorage.setItem(TIME_PLAYER, second)
console.log(TIME_PLAYER);

// localStorage.getCurrentTime()
},1000))

// мені не дуже получилося це відео зробити, 
// воно не грає довше 31секунди я незнаю ,
 
