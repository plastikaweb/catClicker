var octopusCats = (function (controller) {
    /**
     * on load action
     */
    controller.init = function () {
        catsView.init();
    };
    /**
     * ask the model for the Cat list
     * @returns {Cat[]}
     */
    controller.getCats = function () {
        return model.cats;
    };

    return controller;
}(octopusCats || {}));