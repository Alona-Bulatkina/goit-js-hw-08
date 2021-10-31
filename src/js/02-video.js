import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const options = {
    id: 59777392,
    width: 640,
    loop: true
};

const player = new Vimeo.Player('made-in-ny', options);

player.setVolume(0);

player.on('eventName', function(data) {
    
});
