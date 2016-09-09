var adminView = (function (view) {

    /**
     * send new cat data to controller
     * @private
     */
    function _saveCatInfo() {
        var data = {
            name: view.nameInput.val(),
            pic: view.picInput.val(),
            clicks: (view.clicksInput.val())
        };
        octopusAdmin.changeDataCat(data);
    }

    /**
     * show or hide admin form
     * @private
     */
    function _showOrHideAdmin() {
        var state = octopusAdmin.getAdminVisibility();
        octopusAdmin.setAdminVisibility(!state);
        view.admin.toggleClass('hide', state);
    }

    /**
     * on load action
     */
    view.init = function () {
        // cache selectors
        this.nameInput = $('#nameField');
        this.picInput = $('#picField');
        this.clicksInput = $('#clicksField');
        this.admin = $('#admin');

        // Events
        $('.showHideAdmin').on('click', _showOrHideAdmin);
        $('#saveAdmin').on('click', _saveCatInfo);
    };
    /**
     * populate form with current data
     * @param {object} cat
     */
    view.render = function (cat) {
        this.nameInput.val(cat.name);
        this.picInput.val(cat.pic);
        this.clicksInput.val(cat.clicks);
    };
    /**
     * update #clicks field
     * @param {number} clicks
     */
    view.updateClicks = function (clicks) {
        this.clicksInput.val(clicks);
    };

    return view;
}(adminView || {}));