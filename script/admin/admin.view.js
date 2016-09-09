var adminView = (function (view) {
    return view = {
        init: function () {
            this.nameInput = $('#nameField');
            this.picInput = $('#picField');
            this.clicksInput = $('#clicksField');

            $('.showHideAdmin').on('click', function () {
                var state = octopusAdmin.getAdminState();
                $('#admin').toggleClass('hide', state);
                octopusAdmin.setAdminState(!state);
            });
            $('#saveAdmin').on('click', $.proxy(function () {
                var data = {
                    name: this.nameInput.val(),
                    pic: this.picInput.val(),
                    clicks: this.clicksInput.val()
                };
                octopusAdmin.changeDataCat(data);
            }, this));
        },
        render: function (cat) {
            this.nameInput.val(cat.name);
            this.picInput.val(cat.pic);
            this.clicksInput.val(cat.clicks);
        },
        updateClicks: function (clicks) {
            this.clicksInput.val(clicks);
        },
        saveCatInfo: function () {
            var data = {
                name: this.nameInput.val(),
                pic: this.picInput.val(),
                clicks: (this.clicksInput.val())
            };
            octopusAdmin.changeDataCat(data);
        }
    };
}(adminView || {}));