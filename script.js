$(function(){
    /** Cat constructor */
    function Cat(name) {
        this.name = name;
        this.pic = name + '.jpg';
        this.clicks = 0;
    }

    /** model */
    var model = {
        cats: [
            new Cat('missy'), 
            new Cat('garfield'), 
            new Cat('isir'), 
            new Cat('chuck'), 
            new Cat('rya')
        ],
        selectedCat: null
        
    }

    /** controller */
    var octopus = {
        init: function() {
            catsView.init();
            catView.init();
        },
        getCats: function() {
            return model.cats;
        },
        changeCat: function(cat) {
            model.selectedCat = cat;
            catView.render(model.selectedCat);
            this._updateClicksView();
        },
        countClicks: function() {
            model.selectedCat.clicks++; 
            this._updateClicksView();
        },
        _updateClicksView: function() {
            catView.updateClicks(model.selectedCat.clicks);
        }
    };

    /** cats list view */
    var catsView = {
        init: function() {
            var thumbsDir = 'cats/thumbs/',
            divList = $('#catsList > ul'),
            elements = [];

            octopus.getCats().forEach(function(cat) {
                var li = $('<li/>'),
                img = $('<img/>', {
                    src: thumbsDir + cat.pic,
                    alt: cat.name
                });

                img.appendTo(li);
                elements.push(li);

                img.on('click', (function(newCat) {
                    return function() {
                        octopus.changeCat(newCat);
                    };
                })(cat));
            });

            divList.append(elements);
        }
    };

    /** single cat view */
    var catView = {
        init: function() {
            this.catDiv = $('#catView');
            this.clicksEl = $('#clicks');
        },
        render: function(cat) {
            var catDiv = this.catDiv,
            imagesDir = 'cats/images/',
            name = $('<h2>' + cat.name + '</h2>'),
            img = $('<img/>', {
                src: imagesDir + cat.pic,
                alt: cat.name
            });
            catDiv.html('').append([name, img]);

            img.on('click', function() {
                octopus.countClicks(cat);
            });
        },
        updateClicks: function(clicks) {
            this.clicksEl.html(clicks);
        }
    }
    octopus.init();

}());
