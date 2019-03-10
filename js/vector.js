function Vector(x, y) {
	this.x = x;
	this.y = y;
}
Vector.prototype.add = function add(vector) {
	this.x += vector.x;
	this.y += vector.y;
}
Vector.prototype.sub = function sub(vector) {
	this.x -= vector.x;
	this.y -= vector.y;
}