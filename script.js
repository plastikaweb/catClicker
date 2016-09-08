$(function(){
    /** Cat constructor */
    function Cat(name, pic, clicks) {
        this.name = name;
        this.pic = pic;
        this.clicks = clicks || 0;
    }
    Cat.prototype.update = function(name, pic, clicks) {
        this.name = name;
        this.pic = pic;
        this.clicks = clicks || 0;
    }

    /** model */
    var model = {
        cats: [
            new Cat('missy', 'http://cosmouk.cdnds.net/15/42/1445004076-white-cat-bag.jpg'), 
            new Cat('garfield', 'http://www.catster.com/wp-content/uploads/2015/06/can-cats-eat-peanut-butter-02.jpg'), 
            new Cat('isir', 'http://www.catster.com/wp-content/uploads/2015/06/albino-cats-kittens-07.jpg'), 
            new Cat('chuck', 'http://s5.favim.com/orig/51/animals-cats-cute-feline-photography-Favim.com-551634.jpg'), 
            new Cat('rya', 'http://stuffpoint.com/cats/image/87009-cats-cute-cat.jpg')
        ],
        selectedCat: null,
        isAdminShown: false
        
    }

    /** controller */
    var octopus = {
        init: function() {
            catsView.init();
            catView.init();
            adminView.init();
        },
        getCats: function() {
            return model.cats;
        },
        getCurrentCat: function() {
            return model.selectedCat;
        },
        setCurrentCat: function(cat) {
            model.selectedCat = cat;
        },
        setCurrentCatView: function(cat, updateList) {
            catView.render(cat);
            adminView.render(cat);
            this._updateClicksView();
            if(updateList) {
                catsView.render();
            }
        },
        changeCat: function(cat) {
            this.setCurrentCat(cat);
            this.setCurrentCatView(cat);
        },
        countClicks: function() {
            this.getCurrentCat().clicks++; 
            this._updateClicksView();
        },
        _updateClicksView: function() {
            var clicks = this.getCurrentCat().clicks;
            catView.updateClicks(clicks);
            adminView.updateClicks(clicks);
        },
        getAdminState: function() {
            return model.isAdminShown;
        },
        setAdminState: function(state) {
            model.isAdminShown = state;
        },
        changeDataCat: function(data) {
            var indexCat = $.inArray(model.selectedCat, model.cats); 
            var updateList = data.pic !== model.selectedCat.pic || 
                data.name !== model.selectedCat.name;
            if(indexCat > -1) {
                model.cats[indexCat].update(data.name, data.pic, parseInt(data.clicks)); 
                this.setCurrentCatView(this.getCurrentCat(), updateList);           
            }
        }
    };

    /** cats list view */
    var catsView = {
        init: function() {
            this.divList = $('#catsList > ul');
            this.render();
        },
        render: function() {
            var elements = [];
            this.divList.empty();
            octopus.getCats().forEach(function(cat) {
                var li = $('<li/>'),
                img = $('<img/>', {
                    src: cat.pic,
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

            this.divList.append(elements);
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
            name = $('<h2>' + cat.name + '</h2>'),
            img = $('<img/>', {
                src: cat.pic,
                alt: cat.name
            });
            catDiv.empty().append([name, img]);

            img.on('click', function() {
                octopus.countClicks();
            });
        },
        updateClicks: function(clicks) {
            this.clicksEl.html(clicks);
        }
    };

    /** admin view */
    var adminView = {
        init: function() {
            this.nameInput = $('#nameField');
            this.picInput = $('#picField');
            this.clicksInput = $('#clicksField');

            $('.showHideAdmin').on('click', function() {
                var state = octopus.getAdminState();
                $('#admin').toggleClass('hide', state);
                octopus.setAdminState(!state);
            });
            $('#saveAdmin').on('click', $.proxy(function() {
                var data = {
                    name: this.nameInput.val(),
                    pic: this.picInput.val(),
                    clicks: this.clicksInput.val()
                };
                octopus.changeDataCat(data);
            }, this));
        },
        render: function(cat) {
            this.nameInput.val(cat.name);
            this.picInput.val(cat.pic);
            this.clicksInput.val(cat.clicks);
        },
        updateClicks: function(clicks) {
            this.clicksInput.val(clicks);
        },
        saveCatInfo: function() {
            var data = {
                name: this.nameInput.val(),
                pic: this.picInput.val(),
                clicks: (this.clicksInput.val())
            };
            octopus.changeDataCat(data);
        }
    };
    octopus.init();

}());
