var catView = (function (view) {
    return view = {
        init: function () {
            this.catDiv = $('#catView');
            this.clicksEl = $('#clicks');
        },
        render: function (cat) {
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
        },
        updateClicks: function (clicks) {
            this.clicksEl.html(clicks);
        }
    };
}(catView || {}));