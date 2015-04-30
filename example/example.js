"use strict";

var Console = require('../lib/console'),
	con,
	example;

example = function(){
	var l = 1000;

	// draw random characters to console
	while(l--) con.draw(((Math.random() * con.width) >> 0), ((Math.random() * con.height) >> 0), {
			c: ((Math.random() * 256) >> 0),
			f: ((Math.random() * 21) >> 0),
			b: ((Math.random() * 21) >> 0)
		});
};

con = new Console({
	canvas: document.getElementById('canvas'),
	fullscreen: true,
	sprites: {
		src: './img/sprites20.png',
		count: 256,
		width: 20,
		height: 20
	},
	colors: [
        /* grayscale dark  */
        '#000000', // 0 - black
        '#333333', // 1
        '#666666', // 2
        /* grayscale light */
        '#999999', // 3
        '#cccccc', // 4
        '#ffffff', // 5
        /* red/orange      */
        '#b21f35', // 6
        '#d82735', // 7
        '#ff7435', // 8
        /* orange/yellow   */
        '#ffa135', // 9
        '#ffcb35', // 10
        '#fff735', // 11
        /* green           */
        '#00753a', // 12
        '#009e47', // 13
        '#16dd36', // 14
        /* blue            */
        '#0052a5', // 15
        '#0079e7', // 16
        '#06a9fc', // 17
        /* purple          */
        '#681e7e', // 18
        '#7d3cb5', // 19
        '#bd7af6'  // 20
    ],
	callback: function() {
		setInterval(example, 1000/16);
	}
});