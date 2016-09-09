var octopusCats = (function(controller) {
    /** controller */
    return controller = {
        init: function() {
            catsView.init();
        },
        getCats: function() {
            return model.cats;
        }
    };
}(octopusCats || {}));