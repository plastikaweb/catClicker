var octopusCats = (function (controller) {
    controller.init = function () {
        catsView.init();
    };
    controller.getCats = function () {
        return model.cats;
    };

    return controller;
}(octopusCats || {}));