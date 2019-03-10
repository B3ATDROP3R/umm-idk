function Player(x, y) {
	Entity.prototype.constructor.bind(this)(x, y);
}
Player.prototype = Object.create(Entity);
Player.prototype.constructor = Player;