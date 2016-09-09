var octopusCat = (function (controller) {

    function _updateClicksView() {
        var clicks = controller.getCurrentCat().clicks;
        catView.updateClicks(clicks);
        adminView.updateClicks(clicks);
    }

    controller.init = function () {
        catView.init();
    };
    controller.getCurrentCat = function () {
        return model.selectedCat;
    };
    controller.setCurrentCat = function (cat) {
        model.selectedCat = cat;
    };
    controller.setCurrentCatView = function (cat, updateList) {
        catView.render(cat);
        adminView.render(cat);
        _updateClicksView();
        if (updateList) {
            catsView.render();
        }
    };
    controller.changeCat = function (cat) {
        this.setCurrentCat(cat);
        this.setCurrentCatView(cat);
    };
    controller.countClicks = function () {
        this.getCurrentCat().clicks++;
        _updateClicksView();
    };

    return controller;
}(octopusCat || {}));