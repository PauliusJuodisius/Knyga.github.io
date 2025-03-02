(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.btn_A = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3A3A3A").ss(1,1,1).p("AKIAAQAAENi+C9Qi9C+kNAAQkLAAi+i+Qi+i9AAkNQAAkLC+i+QC+i+ELAAQENAAC9C+QC+C+AAELg");
	this.shape.setTransform(64.8,64.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#339999").s().p("AnJHKQi+i9AAkNQAAkLC+i+QC+i+ELAAQENAAC9C+QC+C+AAELQAAENi+C9Qi9C+kNAAQkLAAi+i+g");
	this.shape_1.setTransform(64.8,64.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,131.6,131.6);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AtLIzIAAxlIaXAAIAARlg");
	this.shape.setTransform(84.4,56.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,168.8,112.5);


// stage content:
(lib.HTML5_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		
		
		this.btn.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			this.gotoAndStop(1);	
		}
		
		
		
		
		
		this.btn_a.addEventListener("click", fl_ClickToGoToAndStopAtFrame_1.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_1()
		{
			this.gotoAndStop(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_2
	this.btn_a = new lib.btn_A();
	this.btn_a.name = "btn_a";
	this.btn_a.parent = this;
	this.btn_a.setTransform(200.3,686.3,1,1,0,0,0,64.8,64.8);
	this.btn_a._off = true;
	new cjs.ButtonHelper(this.btn_a, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_a).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.btn = new lib.btn();
	this.btn.name = "btn";
	this.btn.parent = this;
	this.btn.setTransform(1084.6,662.7,1,1,0,0,0,84.4,56.2);
	new cjs.ButtonHelper(this.btn, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#730909").ss(1,1,1).p("AtLoyIaXAAIAARlI6XAAg");
	this.shape.setTransform(1084.6,662.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#730909").ss(1,1,1).p("EifhhdOME/DAAAMAAAC6dMk/DAAAg");
	this.shape_1.setTransform(664,383.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("EifhBdPMAAAi6dME/CAAAMAAAC6dg");
	this.shape_2.setTransform(664,383.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.btn}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1639.2,1005.5,170.8,114.5);
// library properties:
lib.properties = {
	id: '90DA58BB1EDC9B44B583519CDB538189',
	width: 1280,
	height: 800,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['90DA58BB1EDC9B44B583519CDB538189'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;