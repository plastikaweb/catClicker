var catsView = (function (view) {
    'use strict';
    /**
     * on load action
     */
    view.init = function () {
        // cache selectors
        this.divList = $('#catsList > ul');
        // shpw list of cats on view
        this.render();
    };
    /**
     * draw list of cats
     */
    view.render = function () {
        var elements = [];
        this.divList.empty();
        octopusCats.getCats().forEach(function (cat) {
            var li = $('<li/>'),
                img = $('<img/>', {
                    src: cat.pic,
                    alt: cat.name
                });
            img.appendTo(li);
            elements.push(li);
            img.on('click', (function (newCat) {
                return function () {
                    octopusCat.changeCat(newCat);
                };
            })(cat));
        });
        this.divList.append(elements);
    };

    return view;
}(catsView || {}));