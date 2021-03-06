Ship.prototype = Object.create(Phaser.Sprite.prototype);

Ship.prototype.constructor = Ship;

Ship.prototype.force = {x:0.0, y:0.0}; 

function preload () {
    game.load.image('ship', 'ship.png');
    game.load.image('enemy', 'evil.png');
}

function Ship(game, x, y) {
    var ship = Phaser.Sprite.call(this, game, x, y, 'ship');
    this.scale.set(1.0, 1.0);
    this.anchor.setTo(0.5, 0.5);
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.allowRotation = false;
    game.add.existing(this);


}
Ship.prototype.update = function() {

    var mX = game.input.mousePointer.x;
    var mY = game.input.mousePointer.y;
    // /* look at the mouse 
    this.angle = Math.atan2(this.position.x - mX, this.position.y - mY)  * -57.2957795;

    if (wasd.up.isDown) {
        this.y -= 3;
    }
    if (wasd.down.isDown) {
        this.y += 3;
    }
    if (wasd.left.isDown) {
        this.x -= 3;
    }
    if (wasd.right.isDown) {
        this.x += 3;
    } 

}