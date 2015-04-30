#Console
##constructor

**Params**:  
-  __[init]__ _Object_ - init options
    -  __[canvas]__ _HTMLElement_ 
    -  __[fullscreen]__ _Boolean_
    -  __[sprites]__ _Object_ - spritesheet options
        -  __src__ _String_ - spritesheet img source path
        -  __count__ _Number_ - number of sprites in sheet
        -  __width__ _Number_ - width of each sprite in pixels
        -  __height__ _Number_ - height of each sprite in pixels
    -  __[colors]__ _Array_ - string of hex and/or rgb/rgba colors to prerender sprites to
    -  __[base]__ _Object_ - base tile to draw
    -  __[callback]__ _Function_ - will be executed when console is ready to draw on

####Example
```js
var myConsole;

myConsole = new Console({
    canvas: document.createElement('canvas'),
    fullscreen: true,
    sprites: {
        src: './img/sprites20.png',
        count: 256,
        width: 20,
        height: 20
    },
    colors: [
        '#000000', // 0
        '#333333', // 1
        '#666666', // 2
        '#999999', // 3
        '#cccccc', // 4
        '#ffffff', // 5
        '#b21f35', // 6
        '#d82735', // 7
        '#ff7435', // 8
        '#ffa135', // 9
        '#ffcb35', // 10
        '#fff735', // 11
        '#00753a', // 12
        '#009e47', // 13
        '#16dd36', // 14
        '#0052a5', // 15
        '#0079e7', // 16
        '#06a9fc', // 17
        '#681e7e', // 18
        '#7d3cb5', // 19
        '#bd7af6'  // 20
     ]
});
```


##Properties

###canvas

DOM reference to canvas element

**type**: HTMLElement

**default**:
`
document.createElement('canvas');
`

###base

default tile drawn to console to fill tiles

**type**: Object  

**default**: 
```js
{
    c: 0,
    f: '#fff',
    b: '#000'
}
```

###isFullscreen

make console fullscreen

**type**: Boolean  

**default**: `true`

###width

console width in tiles

**type**: Number

**default**: `10`

###height

console height in tiles

**type**: Number

**default**: `10`

###colors

Prerendered sprites CSS colors, which can be referred to by index or the string you pass them in with.
If you wish to support Mobile devices, ensure the following is true:
- for iPhone 3gs era and older devices:
`sprites.height * colors.length * sprites.width * sprites.count < 3000000`
- for new era devices:
`sprites.height * colors.length * sprites.width * sprites.count < 5000000`

**type**: Array  

**default**: 
```js
[
/* grayscale dark  */
    '#000000',      // 0
    '#333333',      // 1
    '#666666',      // 2

/* grayscale light */
    '#999999',      // 3
    '#cccccc',      // 4
    '#ffffff',      // 5

/* red/orange      */
    '#b21f35',      // 6
    '#d82735',      // 7
    '#ff7435',      // 8

/* orange/yellow   */
    '#ffa135',      // 9
    '#ffcb35',      // 10
    '#fff735',      // 11

/* green           */
    '#00753a',      // 12
    '#009e47',      // 13
    '#16dd36',      // 14

/* blue            */
    '#0052a5',      // 15
    '#0079e7',      // 16
    '#06a9fc',      // 17

/* purple          */
    '#681e7e',      // 18
    '#7d3cb5',      // 19
    '#bd7af6'       // 20
]
```

###tileWidth

sprite widths in pixels

**type**: Number

###tileHeight

sprite heights in pixels

**type**: Number

##Methods

###rAF

convenience method for window.requestAnimationFrame

###cAF

convenience method for window.cancelAnimationFrame

###clear

clear console to color provided (will change letterboxing color if console has any margins)

**Params**:  
- __[rgba]__ _String_ - string hex of color to clear to


###draw

replace a single tile at coords

**Params**:  
- __x__ _Number_ - x-coord of tile
- __y__ _Number_ - y-coord of tile
- __t__ _Object_ - tile containing only non-coordinate data
    - __[c]__ _Number_ - index of sprite to draw
    - __[f]__ _String|Number_ - color to paint sprite foreground
    - __[b]__ _String|Number_ - color to paint sprite background


###forceRedraw

force console to redraw every tile

###paint

redraw array of tiles

**Params**:  
- __tiles__ _Array_ - tiles to redraw *see Console.draw() for tile params

###start

render the console continuously

###stop

stop continuous console render loop

