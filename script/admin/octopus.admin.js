var octopusAdmin = (function (controller) {
    controller.init = function () {
        adminView.init();
    };
    controller.getAdminState = function () {
        return model.isAdminShown;
    };
    controller.setAdminState = function (state) {
        model.isAdminShown = state;
    };
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
