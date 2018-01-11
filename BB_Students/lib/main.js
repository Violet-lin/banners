var Control = (function() {
  'use strict';
  var elemArray;
  var frameContainer;

  var endOfFrame1 = 7; //end of frame 1
  var endOfFrame2 = 17; //end of frame 2
  var endOfFrame3 = 29; //end of frame 3
  var endOfFrame4 = 37; //end of frame 4
  var endOfArray;

  function Control(width, height) {
    this.width = 300;
    this.height = 600;
  }

  Control.prototype.loadData = function() {

    this.legal_btn_copy = "";
    this.legals_copy = "Sky Network areas only. New Sky Broadband, Talk and Line Rental customers only. Speeds vary by location. Set up costs may apply. £6.95 router delivery applies. 9 month minimum term. After 9 months, standard price for Broadband Unlimited applies (currently £10 per month plus Line Rental). Sky Talk Pay as you Talk £0pm. Compatible line required otherwise £20 connection charge may apply. Replaces any other others. Further terms apply.";
    this.loadAssets();

  };

  /******* ASSET LOADER *******/
  Control.prototype.loadAssets = function() {

    var _this = this;
    var path = 'images/';
    _this.queue = new createjs.LoadQueue('true', path);
    _this.queue.on("complete", handleComplete, _this);
    _this.queue.loadManifest([

      {
        id: "bg",
        src: "bg.jpg"
      }, {
        id: "f1_yo",
        src: "img_f1_yo.png"
      }, {
        id: "f1_hey",
        src: "img_f1_hey.png"
      }, {
        id: "f1_exclaim",
        src: "img_f1_exclaim.png"
      }, {
        id: "f1_students1",
        src: "img_f1_students1.png"
      }, {
        id: "f1_students2",
        src: "img_f1_students2.png"
      }, {
        id: "f1_students3",
        src: "img_f1_students3.png"
      }, {
        id: "f2_heart",
        src: "img_f2_heart.png"
      }, {
        id: "f2_get",
        src: "img_f2_get.png"
      }, {
        id: "f2_sky",
        src: "img_f2_sky.png"
      }, {
        id: "f2_unlimited",
        src: "img_f2_broadband_unlimited.png"
      }, {
        id: "f2_free",
        src: "img_f2_free.png"
      }, {
        id: "f2_for_9_months",
        src: "img_f2_for_9_months.png"
      }, {
        id: "f2_line_rental",
        src: "img_f2_line_rental.png"
      }, {
        id: "f2_rock",
        src: "img_f2_rock.png"
      }, {
        id: "f2_molecule",
        src: "img_f2_molecule.png"
      }, {
        id: "f3_heart",
        src: "img_f3_heart.png"
      }, {
        id: "f3_blocks",
        src: "img_f3_blocks.png"
      }, {
        id: "f3_on_a",
        src: "img_f3_on_a.png"
      }, {
        id: "f3_9_month",
        src: "img_f3_9_month.png"
      }, {
        id: "f3_contract",
        src: "img_f3_contract.png"
      }, {
        id: "f3_eye",
        src: "img_f3_eye.png"
      }, {
        id: "f3_its_even",
        src: "img_f3_its_even.png"
      }, {
        id: "f3_without",
        src: "img_f3_without.png"
      }, {
        id: "f3_sky_tv",
        src: "img_f3_sky_tv.png"
      }, {
        id: "f4_heart",
        src: "img_f4_heart.png"
      }, {
        id: "f4_get",
        src: "img_f4_get.png"
      }, {
        id: "f4_sky",
        src: "img_f4_sky.png"
      }, {
        id: "f4_unlimited",
        src: "img_f4_unlimited.png"
      }, {
        id: "f4_free",
        src: "img_f4_free.png"
      }, {
        id: "f4_for_9_months",
        src: "img_f4_for_9_months.png"
      }, {
        id: "f4_line_rental",
        src: "img_f4_line_rental.png"
      }, {
        id: "f4_find_out_more",
        src: "img_f4_find_out_more.png"
      }, {
        id: "f4_logo",
        src: "img_f4_logo.png"
      }, {
        id: "legal_btn",
        src: "img_legal_btn.png"
      }, {
        id: "legal_close_btn",
        src: "img_legal_close_btn.png"
      }, {
        id: "img_legal_content",
        src: "img_legal_content.png"
      }
    ]);

    function handleComplete() {

      console.log("_handleComplete");
      _this.initView();

    }

  };

  /******** INIT *******/
  Control.prototype.initView = function() {
    var _this = this;

    document.getElementById("preloader").parentNode.removeChild(document.getElementById("preloader"));

    _this.stage = new createjs.Stage('CANVAS');
    _this.img_bg = new createjs.Bitmap(_this.queue.getResult('img_bg'));
    _this.bg = new createjs.Bitmap(_this.queue.getResult('bg'));
    _this.f1_yo = new createjs.Bitmap(_this.queue.getResult('f1_yo'));
    _this.f1_hey = new createjs.Bitmap(_this.queue.getResult('f1_hey'));
    _this.f1_exclaim = new createjs.Bitmap(_this.queue.getResult('f1_exclaim'));
    _this.f1_students1 = new createjs.Bitmap(_this.queue.getResult('f1_students1'));
    _this.f1_students2 = new createjs.Bitmap(_this.queue.getResult('f1_students2'));
    _this.f1_students3 = new createjs.Bitmap(_this.queue.getResult('f1_students3'));

    _this.bg2 = new createjs.Bitmap(_this.queue.getResult('bg'));
    _this.f2_heart = new createjs.Bitmap(_this.queue.getResult('f2_heart'));
    _this.f2_get = new createjs.Bitmap(_this.queue.getResult('f2_get'));
    _this.f2_sky = new createjs.Bitmap(_this.queue.getResult('f2_sky'));
    _this.f2_unlimited = new createjs.Bitmap(_this.queue.getResult('f2_unlimited'));
    _this.f2_free = new createjs.Bitmap(_this.queue.getResult('f2_free'));
    _this.f2_for_9_months = new createjs.Bitmap(_this.queue.getResult('f2_for_9_months'));
    _this.f2_line_rental = new createjs.Bitmap(_this.queue.getResult('f2_line_rental'));
    _this.f2_rock = new createjs.Bitmap(_this.queue.getResult('f2_rock'));
    _this.f2_molecule = new createjs.Bitmap(_this.queue.getResult('f2_molecule'));

    _this.bg3 = new createjs.Bitmap(_this.queue.getResult('bg'));
    _this.f3_heart = new createjs.Bitmap(_this.queue.getResult('f3_heart'));
    _this.f3_blocks = new createjs.Bitmap(_this.queue.getResult('f3_blocks'));
    _this.f3_on_a = new createjs.Bitmap(_this.queue.getResult('f3_on_a'));
    _this.f3_9_month = new createjs.Bitmap(_this.queue.getResult('f3_9_month'));
    _this.f3_contract = new createjs.Bitmap(_this.queue.getResult('f3_contract'));
    _this.f3_eye = new createjs.Bitmap(_this.queue.getResult('f3_eye'));
    _this.f3_its_even = new createjs.Bitmap(_this.queue.getResult('f3_its_even'));
    _this.f3_without = new createjs.Bitmap(_this.queue.getResult('f3_without'));
    _this.f3_sky_tv = new createjs.Bitmap(_this.queue.getResult('f3_sky_tv'));
    _this.f3_rock = new createjs.Bitmap(_this.queue.getResult('f2_rock'));
    _this.f3_molecule = new createjs.Bitmap(_this.queue.getResult('f2_molecule'));

    _this.bg4 = new createjs.Bitmap(_this.queue.getResult('bg'));
    _this.f4_heart = new createjs.Bitmap(_this.queue.getResult('f4_heart'));
    _this.f4_get = new createjs.Bitmap(_this.queue.getResult('f4_get'));
    _this.f4_sky = new createjs.Bitmap(_this.queue.getResult('f4_sky'));
    _this.f4_unlimited = new createjs.Bitmap(_this.queue.getResult('f4_unlimited'));
    _this.f4_free = new createjs.Bitmap(_this.queue.getResult('f4_free'));
    _this.f4_for_9_months = new createjs.Bitmap(_this.queue.getResult('f4_for_9_months'));
    _this.f4_line_rental = new createjs.Bitmap(_this.queue.getResult('f4_line_rental'));
    _this.f4_find_out_more = new createjs.Bitmap(_this.queue.getResult('f4_find_out_more'));
    _this.f4_rock = new createjs.Bitmap(_this.queue.getResult('f2_rock'));
    _this.f4_logo = new createjs.Bitmap(_this.queue.getResult('f4_logo'));

    _this.legal_btn = new createjs.Bitmap(_this.queue.getResult('legal_btn'));
    _this.legal_close_btn = new createjs.Bitmap(_this.queue.getResult('legal_close_btn'));
    _this.img_legal_content = new createjs.Bitmap(_this.queue.getResult('img_legal_content'));

    elemArray = [
      _this.bg,
      _this.f1_yo,
      _this.f1_hey,
      _this.f1_exclaim,
      _this.f1_students1,
      _this.f1_students2,
      _this.f1_students3,
      _this.bg2,
      _this.f2_heart,
      _this.f2_get,
      _this.f2_sky,
      _this.f2_unlimited,
      _this.f2_free,
      _this.f2_for_9_months,
      _this.f2_line_rental,
      _this.f2_rock,
      _this.f2_molecule,
      _this.bg3,
      _this.f3_heart,
      _this.f3_blocks,
      _this.f3_on_a,
      _this.f3_9_month,
      _this.f3_contract,
      _this.f3_eye,
      _this.f3_its_even,
      _this.f3_without,
      _this.f3_sky_tv,
      _this.f3_rock,
      _this.f3_molecule,
      _this.bg4,
      _this.f4_heart,
      _this.f4_get,
      _this.f4_sky,
      _this.f4_unlimited,
      _this.f4_free,
      _this.f4_for_9_months,
      _this.f4_line_rental,
      _this.f4_find_out_more,
      _this.f4_rock,
      _this.f4_logo
    ];

    endOfArray = elemArray.length;

    frameContainer = new createjs.Container();

    TweenLite.ticker.addEventListener("tick", function() {
      _this.stage.update();
    });

    this.initLegals();
    this.initExitButton();
    _this.startFrame();

  };

  /******* MAIN ANIMATION PROTOTYPE *******/
  Control.prototype.startFrame = function() {
    var numTime = 2; // to change the amt of time the animation loops

    var _this = this;

    /** TIMELINE ANIMS **/
    _this.frameTimeline = new TimelineLite();

    /** ADDING ALL ELEMENTS TO STAGE **/
    _this.stage.addChild(frameContainer);
    clearVisible();

    /** Start animation **/
    frame_1();

    // ** FRAME 1 **//
    function frame_1() {
      playAnimation(0, endOfFrame1);
      _this.frameTimeline.add(TweenLite.delayedCall(2.5, frame_2));
    }

    // ** FRAME 2 **//
    function frame_2() {
      playAnimation(endOfFrame1, endOfFrame2);
      _this.frameTimeline.add(TweenLite.delayedCall(2.5, frame_3));
    }

    // ** FRAME 3 **//
    function frame_3() {
      playAnimation(endOfFrame2, endOfFrame3);
      _this.frameTimeline.add(TweenLite.delayedCall(2.5, frame_4));
    }

    // ** FRAME 4 **//
    function frame_4() {
      playAnimation(endOfFrame3, endOfArray);

      if (numTime > 1) {
        _this.frameTimeline.add(TweenLite.delayedCall(4, reset_All));
        _this.frameTimeline.add(TweenLite.delayedCall(2.5, frame_1));
        numTime--;
      }
    }

    function reset_All() {
      // btmContainer.addChild(_this.img_bg);
      frameContainer.removeAllChildren();
      clearVisible();
    }

    function playAnimation(x, y) {
      for (var i = x; i < y; i++) {
        _this.frameTimeline.add(TweenLite.to(elemArray[i], 0.1, {
          delay: 0.03,
          alpha: 1
        })); //control the speed of the animation here

      }
    }

    function clearVisible() {
      for (var i = 0; i < endOfArray; i++) {
        /** ADDING ALL IMAGES TO STAGE **/
        frameContainer.addChild(elemArray[i]);
        /** set elements opacity to 0 **/
        _this.frameTimeline.add(TweenLite.to(elemArray[i], 0, {
          alpha: 0
        }));
      }
    }

  };

  /******* LEGALS *******/
  Control.prototype.initLegals = function() {

    var _this = this;
    _this.legals = document.querySelector('.legals');
    _this.legalsBtn = document.getElementById('legals-btn');
    _this.legalsBtnClose = document.getElementById('legals-btn-close');
    _this.legals.style.visibility = "visible";
    _this.legalsBtn.style.visibility = "visible";
    _this.legals.style.top = _this.height + "px";
    _this.legalsBtn.innerHTML = _this.legal_btn_copy;
    _this.legalsCopy = document.getElementById('legals-copy');
    _this.legalsCopy.innerHTML = _this.legals_copy;

    _this.legalsBtnClose.addEventListener('click', function() {
      _this.legals.style.top = _this.height + "px";

    });

    _this.legalsBtn.addEventListener('click', function() {
      _this.legals.style.top = _this.height - _this.legals.offsetHeight + "px";

    });

  };

  /******* DYNAMIC EXIT *******/
  Control.prototype.initExitButton = function() {

    var _this = this;
    _this.exitButton = document.getElementById('exit-button');
    _this.exitButton.addEventListener('click', function() {
      _this.killTimeLine();
      Enabler.exit('Primary Exit');
    });
  };

  Control.prototype.init = function() {

    console.log("Control.prototype.loadData");
    var _this = this;
    _this.loadData();
  };

  Control.prototype.killTimeLine = function() {

    var _this = this;
    _this.frameTimeline.progress(1, false);
    createjs.Tween.removeAllTweens();

  };
  return Control;
}());
