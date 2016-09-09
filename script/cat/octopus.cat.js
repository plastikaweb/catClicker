var octopusCat = (function (controller) {

    /**
     * get current clicks for cat and updates cat view and #clicks field on admin view
     * @private
     */
    function _updateClicksView() {
        var clicks = controller.getCurrentCat().clicks;
        catView.updateClicks(clicks);
        adminView.updateClicks(clicks);
    }

    /**
     * on load action
     */
    controller.init = function () {
        catView.init();
    };
    /**
     * returns current model cat
     * @returns {Cat}
     */
    controller.getCurrentCat = function () {
        return model.selectedCat;
    };
    /**
     * changes current cat model
     * @param cat
     */
    controller.setCurrentCat = function (cat) {
        model.selectedCat = cat;
    };
    /**
     * updates all views
     * @param {Cat} cat
     * @param {boolean} updateList
     */
    controller.setCurrentCatView = function (cat, updateList) {
        catView.render(cat);
        adminView.render(cat);
        _updateClicksView();
        if (updateList) {
            catsView.render();
        }
    };
    /**
     * on change cat update model and view
     * @param {Cat} cat
     */
    controller.changeCat = function (cat) {
        this.setCurrentCat(cat);
        this.setCurrentCatView(cat);
    };
    /**
     * gets clicks on cat from model
     * and updates view accordling
     */
    controller.countClicks = function () {
        this.getCurrentCat().clicks++;
        _updateClicksView();
    };

    return controller;
}(octopusCat || {}));