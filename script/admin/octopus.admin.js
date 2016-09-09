var octopusAdmin = (function(controller) {
    /** controller */
    return controller = {
        init: function() {
            adminView.init();
        },
        getAdminState: function() {
            return model.isAdminShown;
        },
        setAdminState: function(state) {
            model.isAdminShown = state;
        },
        changeDataCat: function(data) {
            var indexCat = $.inArray(model.selectedCat, model.cats); 
            var updateList = data.pic !== model.selectedCat.pic || 
                data.name !== model.selectedCat.name;
            if(indexCat > -1) {
                model.cats[indexCat].update(data.name, data.pic, parseInt(data.clicks)); 
                octopusCat.setCurrentCatView(octopusCat.getCurrentCat(), updateList);           
            }
        }
    };
}(octopusAdmin || {}));
