var model = (function (model) {
    'use strict';
    /**
     * Cat
     * @param {string} name
     * @param {string} pic
     * @param {number} clicks
     * @constructor
     */
    function Cat(name, pic, clicks) {
        this.name = name;
        this.pic = pic;
        this.clicks = clicks || 0;
    }

    /**
     * update all Cat parameters
     * @param {string} name
     * @param {string} pic
     * @param {number} clicks
     */
    Cat.prototype.update = function (name, pic, clicks) {
        this.name = name;
        this.pic = pic;
        this.clicks = clicks || 0;
    };

    /**
     * array of Cats
     * @type {Cat[]}
     */
    model.cats = [
        new Cat('missy', 'http://cosmouk.cdnds.net/15/42/1445004076-white-cat-bag.jpg'),
        new Cat('garfield', 'http://www.catster.com/wp-content/uploads/2015/06/can-cats-eat-peanut-butter-02.jpg'),
        new Cat('isir', 'http://www.catster.com/wp-content/uploads/2015/06/albino-cats-kittens-07.jpg'),
        new Cat('chuck', 'http://s5.favim.com/orig/51/animals-cats-cute-feline-photography-Favim.com-551634.jpg'),
        new Cat('rya', 'http://stuffpoint.com/cats/image/87009-cats-cute-cat.jpg')
    ];
    /**
     * The current cat selected
     * @type {Cat}
     */
    model.selectedCat = null;
    /**
     * The admin area state (visible or not)
     * @type {boolean}
     */
    model.isAdminShown = false;

    return model;
}(model || {}));