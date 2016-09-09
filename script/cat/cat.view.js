var catView = (function (view) {
    view.init = function () {
        this.catDiv = $('#catView');
        this.clicksEl = $('#clicks');
    };
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
    view.updateClicks = function (clicks) {
        this.clicksEl.html(clicks);
    };

    return view;
}(catView || {}));