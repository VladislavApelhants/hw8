import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

 const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('timeupdate', throttle(onTimeUpdate, 1000));

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

player.setCurrentTime(localStorage.getItem('videoplayer-current-time')).then(function (seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            console.log(error.name);
            break;

        default:
            // some other error occurred
            break;
    }
});

function onTimeUpdate(e) {
    console.log('played the video!', e.seconds);
    savePlayingTime(e.seconds)
}
    
function savePlayingTime(time) {
    localStorage.setItem('videoplayer-current-time', time)
}

