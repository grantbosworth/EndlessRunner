<<<<<<< HEAD
let config = {
    type: Phaser.WEBGL,
    width: 640,
    height: 480,
    scene: [ Menu, LevelOne, LevelTwo ],
    render: {
      pixelArt: true
    },
    physics:{
      default:'arcade',
      arcade: {
        debug: false,
        debugShowBody: true,
        gravity:{
          x: 0,
          y: 0,
        }
      }
    },
    
  }
  let game = new Phaser.Game(config);
  // set UI sizes
  let borderUISize = game.config.height / 15;
  let borderPadding = borderUISize / 3;
  // reserve keyboard vars
  let keyF, keyR, keyLEFT, keyRIGHT;
=======
// Testing git push - Ernani
>>>>>>> 218b64c0d2c0dd2bd2201da72499733bf2b449f8
