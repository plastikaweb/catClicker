var octopusAdmin = (function (controller) {
    /**
     * on laod action
     */
    controller.init = function () {
        adminView.init();
    };
    /**
     * admin area is shown or not
     * @returns {boolean}
     */
    controller.getAdminVisibility = function () {
        return model.isAdminShown;
    };
    /**
     * set visibility for admin area
     * @param {boolean} state
     */
    controller.setAdminVisibility = function (state) {
        model.isAdminShown = state;
    };
    /**
     * update cat properties and updates view
     * @param {object} data
     */
    controller.changeDataCat = function (data) {
        var indexCat = $.inArray(model.selectedCat, model.cats);
        var updateList = data.pic !== model.selectedCat.pic ||
            data.name !== model.selectedCat.name;
        if (indexCat > -1) {
            model.cats[indexCat].update(data.name, data.pic, parseInt(data.clicks));
            octopusCat.setCurrentCatView(octopusCat.getCurrentCat(), updateList);
        }
    };

    return controller;
}(octopusAdmin || {}));
