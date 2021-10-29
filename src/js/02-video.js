import Player from '@vimeo/player';

var options = {
    id: 59777392,
    width: 640,
    loop: true
};

var player = new Vimeo.Player('made-in-ny', options);

player.setVolume(0);

player.on('play', function() {
    console.log('played the video!');
});
