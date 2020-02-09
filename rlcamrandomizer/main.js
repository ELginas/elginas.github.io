class Setting {
	constructor(id, name, minRange, maxRange, round, isBoolean) {
		this.id = id;
		this.name = name;
		this.minRange = minRange;
		this.maxRange = maxRange;
		this.round = round;
		this.isBoolean = isBoolean;
	}
	
	randomize() {
		var value;
		if (!this.isBoolean){
			value = Math.floor(Math.random() * (this.maxRange - this.minRange)) + this.minRange;
		}
		else {
			value = Math.floor(Math.random() * 2) >= 1 ? "On" : "Off";
		}
		document.getElementById(this.id).innerHTML = this.name + ": " + value;
	}
};

var settings = [
	new Setting('cs', 'Camera Shake', 0, 0, 0, true),
	new Setting('fov', 'FOV', 60, 110, 1, false),
	new Setting('dist', 'Distance', 100, 400, 10, false),
	new Setting('height', 'Height', 40, 200, 10, false),
	new Setting('angle', 'Angle', -15, 0, 1, false),
	new Setting('stiff', 'Stiffness', 0, 1, 0.05, false),
	new Setting('swivel', 'Swivel Speed', 1, 10, 0.1, false),
	new Setting('transition', 'Transition Speed', 1, 2, 0.1, false),
	new Setting('invert', 'Invert Swivel', 0, 0, 0, true),
];


function randomize() {
	console.log(document.getElementById('title').offsetWidth);
	console.log(document.getElementById('title').getBoundingClientRect());
	var i;
	for (i = 0; i < settings.length; i++) {
	  settings[i].randomize();
	}
}