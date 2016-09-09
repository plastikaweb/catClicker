var catsView = (function(view) {
    return view = {
        init: function() {
            this.divList = $('#catsList > ul');
            this.render();
        },
        render: function() {
            var elements = [];
            this.divList.empty();
            octopusCats.getCats().forEach(function(cat) {
                var li = $('<li/>'),
                img = $('<img/>', {
                    src: cat.pic,
                    alt: cat.name
                });

                img.appendTo(li);
                elements.push(li);

                img.on('click', (function(newCat) {
                    return function() {
                        octopusCat.changeCat(newCat);
                    };
                })(cat));
            });

            this.divList.append(elements);
        }
    };
}(catsView || {}));