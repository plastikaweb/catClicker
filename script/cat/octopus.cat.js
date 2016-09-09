var octopusCat = (function(controller) {
    /** controller */
    function _updateClicksView() {
        var clicks = controller.getCurrentCat().clicks;
        catView.updateClicks(clicks);
        adminView.updateClicks(clicks);
    }        
    return controller = {
        init: function() {
            catView.init();
        },
        getCurrentCat: function() {
            return model.selectedCat;
        },
        setCurrentCat: function(cat) {
            model.selectedCat = cat;
        },
        setCurrentCatView: function(cat, updateList) {
            catView.render(cat);
            adminView.render(cat);
            _updateClicksView();
            if(updateList) {
                catsView.render();
            }
        },
        changeCat: function(cat) {
            this.setCurrentCat(cat);
            this.setCurrentCatView(cat);
        },
        countClicks: function() {
            this.getCurrentCat().clicks++; 
            _updateClicksView();
        }
        
    };
}(octopusCat || {}));