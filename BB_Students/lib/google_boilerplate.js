window.onload = function () {
    'use strict';
    //Preloader.init(300, 600);


    if (Enabler.isInitialized()) {
        enablerInitHandler();

    } else {
        Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
    }


};


function enablerInitHandler() {


    if (Enabler.isPageLoaded()) {
        pageLoadedHandler();
    } else {
        Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, pageLoadedHandler);
    }

}

/*Standard PageLoad Handler*/
function pageLoadedHandler() {
    if (Enabler.isVisible()) {
        adVisibilityHandler();
    } else {
        console.log("_pageLoadedHandler");

        Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, adVisibilityHandler);
    }
}

function adVisibilityHandler() {
    'use strict';

    var creative = new Control();
    creative.init();

}
