//Properties
var bannerSize = '300x250';
var separationLegalTop = 40;
var numberID = 1234564789;

//Items and main variables
var advert,
    preloader,
    queue,
    stage,
    data,
    animation;

//Containers
var frame1Container,
    frame2Container,
    frame3Container,
    frame4Container;

// Positions outsite Canvas
var outXLeftCanvas,
    outXRightCanvas,
    outYBottomCanvas,
    outYTopCanvas;

// Need it for frame time control
var ctx;

window.onload = function(){
    if (Enabler.isInitialized()) {
        init();
    } else {
        Enabler.addEventListener(studio.events.StudioEvent.INIT, init);
    }
};

function init() {
    if (Enabler.isPageLoaded()) {
    	pageLoadedHandler();
    } else {
    	Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, pageLoadedHandler);
    }
}

function pageLoadedHandler() {
    if (Enabler.isVisible()) {
    	adVisibilityHandler();
    } else {
    	Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, adVisibilityHandler);
    }
}

function adVisibilityHandler() {
    setElements();
    setDynamicProfile();
    addClickHandler();
}

function setElements(){
    advert = document.getElementById('advert');
    preloader = document.getElementById('preloader');
}

function addClickHandler() {
    document.querySelector('.advert-border').onclick = function(e) {
        Enabler.exitOverride('exit', data.Click_Tag);
    };
}

function setDynamicProfile() {
	Enabler.setProfileId(numberID);
    var devDynamicContent = {};
    devDynamicContent.Application_300x250= [{}];
    devDynamicContent.Application_300x250[0]._id = 0;
    devDynamicContent.Application_300x250[0].Click_Tag = "https://www.sky.com";
    devDynamicContent.Application_300x250[0].Image_assets = 'https://s0.2mdn.net/ads/richmedia/studio/NumberFolder/';
    devDynamicContent.Application_300x250[0].Legal_button_copy = 'Legal bits';
    devDynamicContent.Application_300x250[0].Legal_copy = 'Sky Q TV subscription &pound;20-&pound;80 per month. Set-up costs may apply. 18-month minimum terms. All Sky Q kit (this excludes Sky Soundbox) is loaned to you at no cost and must be returned at the end of your relevant subscription. Prices may go up during your contract. \<b\>Exclusive Sky Q Sound:\<\/b\> Requires Sky Q box, Sky TV subscription, HD TV and Sky Soundbox.';

    Enabler.setDevDynamicContent(devDynamicContent);

    data = dynamicContent.Application_300x250[0];
    createPreloader();
}

function createPreloader() {
  var path = 'images/';
  // var path = window.location.host.search('localhost') != -1 ? 'images/' : data.Image_assets;
  queue = new createjs.LoadQueue('true', path);
	queue.addEventListener('complete', loadComplete);
	queue.loadManifest([
        {id:'skylogo', src:'skylogo.png'},
        {id:'f1_text1', src:'f1_text1.png'},
        {id:'f1_text2', src:'f1_text2.png'},
        {id:'f2_text', src:'f2_text.png'},
        {id:'f3_text', src:'f3_text.png'},
        {id:'f4_text1', src:'f4_text1.png'},
        {id:'f4_text2', src:'f4_text2.png'},
        {id:'f4_text3', src:'f4_text3.png'},
        {id:'ss_MPU', src:'ss_MPU.jpg'},
        {id:'cta', src:'cta.png'}
	]);
}

function loadComplete() {
    createCanvasStage();
    setVariablesPositions();
    createContainers();
    removePreloader();
    //Legals.js
    createLegals();
    startAdvert();
}

function createCanvasStage() {
    stage = new createjs.Stage('stage');
    stage.enableMouseOver();
    createjs.Ticker.addEventListener('tick', stage);
    createjs.Ticker.setFPS(20);
    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    createjs.MotionGuidePlugin.install();
    ctx = stage.canvas.getContext('2d');
}

function setVariablesPositions(){
    outXLeftCanvas = -stage.canvas.width;
    outXRightCanvas = stage.canvas.width *2;
    outYTopCanvas = -stage.canvas.width;
    outYBottomCanvas = stage.canvas.height * 2;
}

function createContainers() {
    frame1Container = new createjs.Container();
    frame2Container = new createjs.Container();
    frame2Container.opacity = 0;
    frame3Container = new createjs.Container();
    frame3Container.opacity = 0;
    frame4Container = new createjs.Container();
    frame4Container.opacity = 0;
    frame5Container = new createjs.Container();
    frame5Container.opacity = 0;
    spriteSheetContainer = new createjs.Container();
    skyContainer = new createjs.Container();
    stage.addChild(spriteSheetContainer, frame1Container, frame2Container, frame3Container, frame4Container, frame5Container, skyContainer);
}

function removePreloader() {
    advert.removeChild(preloader);
}

function startAdvert() {
    var timeFrame1 = 3200;
    var timeFrame2 = 3500;
    var timeFrame3 = 3000;
    var timeFrame4 = 3000;

    createSkyIcons();
    createFrameOne();
    setTimeout(cleanFrameOne, timeFrame1);
    setTimeout(createFrameTwo, timeFrame1);
    setTimeout(cleanFrameTwo, timeFrame1 + timeFrame2);
    setTimeout(createFrameThree, timeFrame1 + timeFrame2);
    setTimeout(cleanFrameThree, timeFrame1 + timeFrame2 + timeFrame3);
    setTimeout(createFrameFour, timeFrame1 + timeFrame2 + timeFrame3);

}

function cleanFrameOne(){
    frame1Container.alpha = 0;
}

function cleanFrameTwo(){
    frame2Container.alpha = 0;
}

function cleanFrameThree(){
    frame3Container.alpha = 0;
}

function cleanFrameFour(){
    frame4Container.alpha = 0;
}

function createSkyIcons(){
    skylogo = new createjs.Bitmap(queue.getResult('skylogo'));
    skylogo.setCenterImage('center', 'center');
    skylogo.setPositions(263, 225);
}

function createSpriteSheet(){
    var spriteSheetCount = 294;
    var spritesheet_MPU = new createjs.SpriteSheet({
        framerate: 25,
        "images": [queue.getResult("ss_MPU")],
        "frames": {
            "width": 300,
            "height": 250,
            "count": spriteSheetCount
        },

        "animations": {
            "start": [0, spriteSheetCount - 1,'stop'],
            "stop": [spriteSheetCount - 1]
        }
    });
	var spritesheetHolder = new createjs.Sprite(spritesheet_MPU);
    spriteSheetContainer.addChild(spritesheetHolder);
    TweenLite.delayedCall(0.2, function(){
        spritesheetHolder.gotoAndPlay("start");
    });
}

function createFrameOne(){
    createSpriteSheet();
    createiItemsFrameOne();
    animationFrameOne();
}

function createiItemsFrameOne(){
    f1_text1 = new createjs.Bitmap(queue.getResult('f1_text1'));
    f1_text2 = new createjs.Bitmap(queue.getResult('f1_text2'));
    f1_text1.alpha = f1_text2.alpha = 0;
    frame1Container.alpha = 1;
    frame1Container.addChild(f1_text1, f1_text2);
    skyContainer.addChild(skylogo);
}

function animationFrameOne(){
    TweenLite.to(f1_text1, 0.5, {delay: 0, alpha: 1});
    TweenLite.to(f1_text2, 0.5, {delay: 0.5, alpha: 1});
    TweenLite.to([f1_text1,f1_text2], 0.5, {delay: 2.5, alpha: 0});
}

function createFrameTwo(){
    createiItemsFrameTwo();
    animationFrameTwo();
}

function createiItemsFrameTwo(){
    f2_text = new createjs.Bitmap(queue.getResult('f2_text'));
    f2_text.alpha = 0;
    frame2Container.addChild(f2_text);
}

function animationFrameTwo(){
    TweenLite.to(f2_text, 0.5, {delay: 0, alpha: 1});
    TweenLite.to(f2_text, 0.5, {delay: 2.5, alpha: 0});
}

function createFrameThree(){
    createiItemsFrameThree();
    animationFrameThree();
}

function createiItemsFrameThree(){
    f3_text = new createjs.Bitmap(queue.getResult('f3_text'));
    f3_text.alpha = 0;
    frame3Container.addChild(f3_text);
}

function animationFrameThree(){
    TweenLite.to(f3_text, 0.5, {delay: 0, alpha: 1});
    TweenLite.to(f3_text, 0.5, {delay: 2.5, alpha:0});
}

function createFrameFour(){
    createiItemsFrameFour();
    animationFrameFour();
}

function createiItemsFrameFour(){
    f4_text1 = new createjs.Bitmap(queue.getResult('f4_text1'));
    f4_text2 = new createjs.Bitmap(queue.getResult('f4_text2'));
    f4_text3 = new createjs.Bitmap(queue.getResult('f4_text3'));
    cta = new createjs.Bitmap(queue.getResult('cta'));
    cta.setCenterImage('center', 'center');
    cta.setPositions((stage.canvas.width*0.5), 223);
    f4_text1.setCenterImage('center', 'center');
    f4_text1.setPositions((stage.canvas.width*0.5), 28);
    f4_text2.setCenterImage('center', 'center');
    f4_text2.setPositions((stage.canvas.width*0.5), 60);
    f4_text1.alpha = f4_text2.alpha = f4_text3.alpha = cta.alpha = 0;
    frame4Container.addChild(f4_text1, f4_text2, f4_text3, cta);

}

function endAnimated(){
    createjs.Ticker.removeAllEventListeners();
}

function animationFrameFour(){
    TweenLite.to(f4_text1, 0.5, {delay: 0, alpha: 1});
    TweenLite.to(f4_text2, 0.5, {delay: 0.5, alpha: 1});
    TweenLite.to([f4_text3,cta], 0.5, {delay: 1, alpha: 1});
    addSheenToImage(f4_text1, 1500, 2500 )
    addSheenToImage(f4_text2, 1500, 2500 )
    addSheenToImage(cta, 2500, 2500 )
    setTimeout(endAnimated, 3500)
}

createjs.Bitmap.prototype.setPositions = function(x, y){
    if(x === 'Center' || x === 'center') {
        if(this.regX !== 0){
            this.x = Math.floor(stage.canvas.width/2);
        } else {
            this.x = Math.floor(stage.canvas.width/2 - this.image.width/2);
        }
    } else {
        this.x = x;
    }

    if(y === 'Center' || y === 'center') {
        if(this.regY !== 0){
            this.y = Math.floor(stage.canvas.height/2);

        } else {
            this.y = Math.floor(stage.canvas.height/2 - this.image.height/2);
        }
    } else {
        this.y = y;
    }
    return this;
};

createjs.Bitmap.prototype.setCenterImage = function(regX, regY){
    if(typeof regX === 'string' && (regX == 'Center' || regX ===  'center')){
        this.regX = Math.floor(this.image.width/2);
    } else if(typeof regX == 'number'){
        this.regX = regX;
    } else {
        this.regX = 0;
    }
    if(typeof regY == 'string' && (regY === 'Center' || regY ===  'center')){
        this.regY = Math.floor(this.image.height/2);
    } else if(typeof regY == 'number'){
        this.regY = regY;
    } else {
        this.regY = 0;
    }
    return this;
};

createjs.Container.prototype.setCenterContainer = function(regX, regY){
    if(typeof regX === 'string' && (regX == 'Center' || regX ===  'center')){
        this.regX = Math.floor(this.getBounds().width/2);
    } else if(typeof regX == 'number'){
        this.regX = regX;
    } else {
        this.regX = 0;
    }
    if(typeof regY == 'string' && (regY === 'Center' || regY ===  'center')){
        this.regY = Math.floor(this.getBounds().height/2);
    } else if(typeof regY == 'number'){
        this.regY = regY;
    } else {
        this.regY = 0;
    }
    return this;
};

var addSheenToImage = function (image, delay, speed) {
    var _width = image.getBounds().width;
    var _height = image.getBounds().height;
    var _X = image.x;
    var _Y = image.y;

    ctaMask = new createjs.Shape();
    ctaMask.graphics.beginFill('black').drawRoundRect(0, 0, _width, _height, 8);
    ctaMask.regX = _width * 0.5;
    ctaMask.regY = _height * 0.5;
    ctaMask.x = _X;
    ctaMask.y = _Y;

    ctaSheen = new createjs.Shape();
    ctaSheen.graphics.beginLinearGradientFill(['rgba(255,255,255,0)', '#ffffff', 'rgba(255,255,255,0)'], [0, 0.5, 1], 0, 0, 100, 0).drawRect(0, 0, _height, _width);
    ctaSheen.x = _X - _width;
    ctaSheen.y = _Y -10;     //higher, for the sheen to cover the image.
    ctaSheen.rotation = -48;
    ctaSheen.alpha = 0.8;
    stage.addChild(ctaSheen);

    createjs.Tween.get(ctaSheen).wait(delay).to({
        x: ctaMask.x + _width + 100
    }, speed, createjs.Ease.getPowOut(2));
    ctaSheen.mask = ctaMask;
};
createjs.Container.prototype.setPositions = createjs.Sprite.prototype.setPositions = createjs.Bitmap.prototype.setPositions;
