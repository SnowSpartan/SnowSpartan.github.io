(function(window) {
awesome_sherman = function() {
	this.initialize();
}
awesome_sherman._SpriteSheet = new createjs.SpriteSheet({images: ["idle sherman-JS.png"], frames: [[436,372,381,366,0,0,0]]});
var awesome_sherman_p = awesome_sherman.prototype = new createjs.Sprite();
awesome_sherman_p.Sprite_initialize = awesome_sherman_p.initialize;
awesome_sherman_p.initialize = function() {
	this.Sprite_initialize(awesome_sherman._SpriteSheet);
	this.paused = false;
}
window.awesome_sherman = awesome_sherman;
sherman_animation = function() {
	this.initialize();
}
sherman_animation._SpriteSheet = new createjs.SpriteSheet({images: ["idle sherman-JS.png"], frames: [[3,3,433,369,0,51.3,-80.75],[3,3,433,369,0,51.3,-80.75],[3,3,433,369,0,51.3,-80.75],[3,372,433,369,0,51.3,-80.75],[3,372,433,369,0,51.3,-80.75],[3,372,433,369,0,51.3,-80.75],[436,3,433,369,0,51.3,-80.75],[436,3,433,369,0,51.3,-80.75],[436,3,433,369,0,51.3,-80.75]]});
var sherman_animation_p = sherman_animation.prototype = new createjs.Sprite();
sherman_animation_p.Sprite_initialize = sherman_animation_p.initialize;
sherman_animation_p.initialize = function() {
	this.Sprite_initialize(sherman_animation._SpriteSheet);
	this.paused = false;
}
window.sherman_animation = sherman_animation;
sherman_mouse = function() {
	this.initialize();
}
sherman_mouse._SpriteSheet = new createjs.SpriteSheet({images: ["idle sherman-JS.png"], frames: [[3,741,417,362,0,-24.4,-4.95],[3,741,417,362,0,-24.4,-4.95],[3,741,417,362,0,-24.4,-4.95],[3,741,417,362,0,-24.4,-4.95],[3,741,417,362,0,-24.4,-4.95],[3,741,417,362,0,-24.4,-4.95],[3,741,417,362,0,-24.4,-4.95],[3,741,417,362,0,-24.4,-4.95],[3,741,417,362,0,-24.4,-4.95]]});
var sherman_mouse_p = sherman_mouse.prototype = new createjs.Sprite();
sherman_mouse_p.Sprite_initialize = sherman_mouse_p.initialize;
sherman_mouse_p.initialize = function() {
	this.Sprite_initialize(sherman_mouse._SpriteSheet);
	this.paused = false;
}
window.sherman_mouse = sherman_mouse;
}(window));

