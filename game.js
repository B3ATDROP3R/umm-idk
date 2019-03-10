(function(Game, Entity, Player, Block) {
	Player.prototype = Object.create(Entity);
	Player.prototype.constructor = Player;
})(function Game(E, P, B) {
	this.player = new P();
	this.entity = [ new E() ];
	this.blocks = [ new B(-25, 50, 50, 10) ]
}, function Entity() {}, function Player() {}, function Block(x, y, w, h) {
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
});