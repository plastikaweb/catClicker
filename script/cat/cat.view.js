var catView = (function (view) {
    'use strict';
    /**
     * on load action
     */
    view.init = function () {
        // cache selectors
        this.catDiv = $('#catView');
        this.clicksEl = $('#clicks');
    };
    /**
     * renders single cat on view
     * @param {Cat} cat
     */
    view.render = function (cat) {
        var catDiv = this.catDiv,
            name = $('<h2>' + cat.name + '</h2>'),
            img = $('<img/>', {
                src: cat.pic,
                alt: cat.name
            });
        catDiv.empty().append([name, img]);

        img.on('click', function () {
            octopusCat.countClicks();
        });
    };
    /**
     * updates #clicks on view
     * @param {number} clicks
     */
    view.updateClicks = function (clicks) {
        this.clicksEl.html(clicks);
    };

    return view;
}(catView || {}));